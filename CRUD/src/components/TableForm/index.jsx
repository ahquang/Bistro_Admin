import { useState } from "react";
import "../../styles/components/_myform.scss";
import MyButton from "../MyButton";
import FormItem from "../FormItem";

const TableForm = ({ selectedTable, onSubmit }) => {
  console.log(selectedTable);
  const [dataTable, setDataTable] = useState(
    // selectedTable
    selectedTable ||  {
      name: "",
      date: "",
      time: "",
      phone: "",
      totalPerson: ""
    }
  );
  console.log(dataTable);
  const handleOnChange = (tableKey) => (e) => {
    const newValue = e.target.value;
    setDataTable({ ...dataTable, [tableKey]: newValue });
  };
  console.log(dataTable);
  const handleClickSubmit = (e) => {
    e.preventDefault();
    onSubmit(dataTable);
  };
  return (
    <div className="my-form">
      <form className="my-form--form" onSubmit={handleClickSubmit}>
        <FormItem
          label={"Name"}
          handleOnChange={handleOnChange("name")}
          value={dataTable.name}
          required
        />
        <FormItem
          label={"Date"}
          handleOnChange={handleOnChange("date")}
          value={dataTable.date}
          type="date"
          required
        />
        <FormItem
          label={"Time"}
          handleOnChange={handleOnChange("time")}
          value={dataTable.time}
          type="time"
          required
        />
        <FormItem
          label={"Phone"}
          handleOnChange={handleOnChange("phone")}
          value={dataTable.phone}
          type="number"
          required
        />
        <FormItem
          label={"Total Person"}
          handleOnChange={handleOnChange("totalPerson")}
          value={dataTable.totalPerson}
          required
        />
        <div className="my-form--form--button">
          <MyButton>Save</MyButton>
        </div>
      </form>
    </div>
  );
};

export default TableForm;
