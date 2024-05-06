import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_main.scss";
import { getTableDetailAPI, deleteTableAPI } from "../../services/tables.js";
const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const TableDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedTable, setSelectedTable] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentTableId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const tableData = await getTableDetailAPI(currentTableId)
      setSelectedTable(tableData)
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDeleteBtn = () => {
    deleteTableAPI(selectedTable._id);
    navigate("/table/list");
  };
  const page = ["Home /", "Tables /", selectedTable.firstname];

  const handleClickPageBar = (e) => {
    navigate("/");
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
      <div className="main">
        <PageBar page={page} handleOnClick={handleClickPageBar} />
        <div className="main__title">
          <h1>{selectedTable.name}</h1>
        </div>
        <div className="main__detail">
          <div className="main__detail__btn">
            <MyButton
              className="main__detail__btn__update"
              onClick={() => navigate(`/table/update/${selectedTable._id}`)}
            >
              Update
            </MyButton>
            <MyButton
              className="main__detail__btn__delete"
              onClick={handleDeleteBtn}
            >
              Delete
            </MyButton>
          </div>
          <table className="main__detail--table">
            <tr>
              <th>ID</th>
              <td>{selectedTable._id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{selectedTable.name}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{selectedTable.date}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{selectedTable.time}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{selectedTable.phone}</td>
            </tr>
            <tr>
              <th>Total Person</th>
              <td>{selectedTable.totalPerson}</td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default TableDetail;
