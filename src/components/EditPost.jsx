import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { StyledFormEdit } from "../styles/styledEditPost";
import { editContact } from "../contactReducer";

import Header from "./Header";

export default function EditPost() {
  const allContacts = useSelector((state) => state.contact.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const inputNameEditRef = React.useRef(null);
  const inputEmailEditRef = React.useRef(null);
  const inputNumberEditRef = React.useRef(null);

  const contactSelected = allContacts.find((contact) => contact.id == id);

  React.useEffect(() => {
    inputNameEditRef.current.value = contactSelected.name;
    inputEmailEditRef.current.value = contactSelected.email;
    inputNumberEditRef.current.value = contactSelected.number;
  }, []);

  const handleEditContacts = (e) => {
    e.preventDefault();

    let name = inputNameEditRef.current.value;
    let email = inputEmailEditRef.current.value;
    let number = inputNumberEditRef.current.value;

    const isEmailAlreadyRegistered = allContacts.some(
      (contact) => contact.email === email
    );
    const isNumberAlreadyRegistered = allContacts.some(
      (contact) => contact.number === number
    );

    if (isEmailAlreadyRegistered) {
      return;
    }

    if (isNumberAlreadyRegistered) {
      return;
    }

    const contactEdited = {
      id: contactSelected.id,
      name,
      email,
      number,
    };

    dispatch(editContact({ id: contactSelected.id - 1, data: contactEdited }));
    navigate("/");
  };

  return (
    <>
      <Header />

      <StyledFormEdit onSubmit={handleEditContacts}>
        <input ref={inputNameEditRef} type="text" />
        <input ref={inputEmailEditRef} type="email" />
        <input ref={inputNumberEditRef} type="number" />
        <div className="buttons-wrapper">
          <button className="update-btn" type="submit">
            Update Contact
          </button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </StyledFormEdit>
    </>
  );
}
