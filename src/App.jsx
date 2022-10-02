import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import { Table } from "./styles/styledTable";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "./contactReducer";

export default function App() {
  const allContacts = useSelector((state) => state.contact.value);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Link to="add" className="add-contact-btn">
        Add Contact
      </Link>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allContacts?.map((contact, index) => (
            <tr key={index}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
              <td>
                <Link to={`edit/${contact.id}`} className="edit-contact-btn">
                  Edit
                </Link>
                <button
                  className="delete-contact-btn"
                  onClick={() => dispatch(removeContact(contact.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
