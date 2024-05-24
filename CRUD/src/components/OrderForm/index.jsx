import MyButton from "../MyButton";
import { useEffect, useState } from "react";
import "../../styles/components/_myform.scss";
import FormItem from "../FormItem";

const OrderForm = ({ selectedOrder, onSubmit }) => {

  const [dataOrder, setDataOrder] = useState(selectedOrder);

  const handleOnChange = (orderKey) => (e) => {
    const newValue = e.target.value;
    setDataOrder({ ...dataOrder, [orderKey]: newValue });
  };
  console.log(dataOrder);
  const handleClickSubmit = (e) => {
    e.preventDefault();
    onSubmit(dataOrder);
  };

  return (
    <div className="my-form">
      <form className="my-form--form" onSubmit={handleClickSubmit}>
        {/* <FormItem
          label={"Table Number"}
          type="number"
          handleOnChange={handleOnChange("tableNumber")}
          value={dataOrder.tableNumber}
          required
        />
        <FormItem
          label={"Date"}
          type="date"
          handleOnChange={handleOnChange("date")}
          value={dataOrder.date}
          required
        />
        <FormItem
          label={"Time"}
          type="time"
          handleOnChange={handleOnChange("time")}
          value={dataOrder.time}
          required
        />
        {dataOrder.items.map((item, index) => (
          <div key={index} className="item">
            <FormItem label={"Item name"} value={item.itemName} required />

            <FormItem
              label={"Item price"}
              type="number"
              value={item.itemPrice}
              required
            />

            <FormItem label={"Item amount"} value={item.amount} required />
          </div>
        ))}

        <FormItem
          label={"Total item"}
          type="number"
          handleOnChange={handleOnChange("totalItem")}
          value={dataOrder.totalItems}
          required
        />

        <FormItem
          label={"Total Price"}
          type="number"
          handleOnChange={handleOnChange("totalPrice")}
          value={dataOrder.totalPrice}
          required
        /> */}
        <select
          className="order__option"
          value={dataOrder.status}
          onChange={handleOnChange("status")}
          required
        >
          <option>Preparing</option>
          <option>Completed</option>
        </select>
        <div className="my-form--form--button">
          <MyButton>Save</MyButton>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
