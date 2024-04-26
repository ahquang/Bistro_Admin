import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import PageBar from "../../components/PageBar";
import TableForm from "../../components/TableForm";
import { postTableAPI } from "../../services/tables";

const TableCreate = () => {
  const navigate = useNavigate();
  const page = ["Home /", "Tables /", "Create Table"];

  const handleClickPageBar = (e) => {
    navigate("/table/list");
  };

  const handleAddTable = async (newTable) => {
    // addCity(newCity);
    await postTableAPI(newTable);
    navigate("/table/list");
  };
  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>Create Table</h1>
        </div>
        <TableForm onSubmit={handleAddTable}/>
      </div>
    </Layout>
  );
};

export default TableCreate;
