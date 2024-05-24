import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PAGE_SIZE } from "../../constants";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout";
import PageBar from "../../components/PageBar";
import MyButton from "../../components/MyButton";
import Pagination from "../../components/Pagination";
import detailIcon from "../../assets/icon/visibility_24px.svg";
import deleteIcon from "../../assets/icon/delete_24px.svg";
import "../../styles/pages/_main.scss";
import { getContactListAPI, deleteContactAPI } from "../../services/contacts";

const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const ContactList = () => {
  const navigate = useNavigate();
  const [dataContact, setDataContact] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const page = ["Home /", "Contacts"];

  const handleClickPageBar = (e) => {
    navigate("/contact/list");
  };

  const fetchData = async () => {
    const dataAPI = await getContactListAPI();
    setDataContact(dataAPI);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteContact = async (id) => {
    await deleteContactAPI(id);
    fetchData();
  };
 
  const totalPageCount = Math.ceil(dataContact.length / DEFAULT_PAGE_SIZE);

  const currentContactData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    const lastPageIndex = firstPageIndex + DEFAULT_PAGE_SIZE;
    return dataContact.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, dataContact]);

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
          <h1>Contacts</h1>
        </div>
        <span className="main--span">
          Showing {currentPage}-{totalPageCount} of {dataContact.length} items.
        </span>
        <table className="main__list">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Subject</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentContactData.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.address}</td>
                <td>{contact.subject}</td>
                <td>
                  <img
                    src={detailIcon}
                    alt=""
                    onClick={() => navigate(`/contact/detail/${contact._id}`)}
                  />
                  <img
                    src={deleteIcon}
                    alt=""
                    onClick={() => {
                      handleDeleteContact(contact._id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="main__pagination">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={dataContact.length}
            pageSize={DEFAULT_PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ContactList;
