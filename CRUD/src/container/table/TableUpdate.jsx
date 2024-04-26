import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import TableForm from "../../components/TableForm/index.jsx";
import "../../styles/pages/_cities.scss";
import { getTableDetailAPI, updateTableAPI } from "../../services/tables.js";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const TableUpdate = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedTable, setSelectedTable] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentTableId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const tableData = await getTableDetailAPI(currentTableId);
      setSelectedTable(tableData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const page = ["Home /", "Tables /", `${selectedTable.name} /`, "Update"];

  const handleClickPageBar = (e) => {
    navigate("/table/list");
  };

  const handleUpdateTable = (updatedTable) => {
    const selectedTableRemoveId = Object.fromEntries(
      Object.entries(updatedTable).slice(1)
    );
    updateTableAPI(selectedTableRemoveId, selectedTable._id);
    navigate("/table/list");
  };

  if (loading) {
    return (
      <Layout>
        <PulseLoader
          color="gray"
          size={15}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="cities__main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="cities__main__title">
          <h1>Update Table</h1>
        </div>
        <TableForm selectedTable={selectedTable} onSubmit={handleUpdateTable} />
      </div>
    </Layout>
  );
};

export default TableUpdate;
