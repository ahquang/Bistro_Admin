import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader.js";
import Layout from "../../components/Layout/index.jsx";
import PageBar from "../../components/PageBar/index.jsx";
import MyButton from "../../components/MyButton/index.jsx";
import "../../styles/pages/_main.scss";
import { getContactDetailAPI, deleteContactAPI } from "../../services/contacts.js";
const override = {
  display: "block",
  textAlign: "center",
  margin: "100px auto",
};

const ContactDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedContact, setSelectedContact] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentContactId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const contactData = await getContactDetailAPI(currentContactId)
      setSelectedContact(contactData)
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDeleteBtn = () => {
    deleteContactAPI(selectedContact._id);
    navigate("/contact/list");
  };
  const page = ["Home /", "Contacts /", selectedContact.name];

  const handleClickPageBar = (e) => {
    navigate("/contact/list");
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
          <h1>{selectedContact.name}</h1>
        </div>
        <div className="main__detail">
          <div className="main__detail__btn">
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
              <td>{selectedContact._id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{selectedContact.name}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{selectedContact.address}</td>
            </tr>
            <tr>
              <th>Subject</th>
              <td>{selectedContact.subject}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{selectedContact.message}</td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ContactDetail;
