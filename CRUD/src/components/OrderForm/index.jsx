import MyButton from "../MyButton";
import { useEffect, useState } from "react";
import "../../styles/components/_myform.scss";
import FormItem from "../FormItem";

const OrderForm = ({ selectedOrder, onSubmit }) => {

  const [dataOrder, setDataOrder] = useState(
    selectedOrder || {
      tableNumber: "",
      date: "",
      time: "",
      items: [
        {
          itemName: "cake",
          itemPrice: 12,
          amount: 2,
        },
        {
          itemName: "ice-cream",
          itemPrice: 10,
          amount: 3,
        },
        {
          itemName: "pizza",
          itemPrice: 20,
          amount: 1,
        },
      ],
      totalItems: 6,
      totalPrice: 74,
    }
  );

  const handleOnChange = (categoryKey) => (e) => {
    const newValue = e.target.value;
    setDataOrder({ ...dataOrder, [categoryKey]: newValue });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    onSubmit(dataOrder);
  };

  return (
    <div className="my-form">
      <form className="my-form--form" onSubmit={handleClickSubmit}>
        <FormItem
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
        />

        <div className="my-form--form--button">
          <MyButton>Save</MyButton>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
