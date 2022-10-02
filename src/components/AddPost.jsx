import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../contactReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StyledForm, Title } from "../styles/styledAddPost";

export default function AddPost() {
  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.contact.value);
  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputNumberRef = React.useRef(null);

  const handleNewContact = (e) => {
    e.preventDefault();

    let name = inputNameRef.current.value;
    let email = inputEmailRef.current.value;
    let number = inputNumberRef.current.value;

    const isEmailAlreadyRegister = allContacts.some(
      (contact) => contact.email === email
    );
    const isNumberAlreadyRegister = allContacts.some(
      (contact) => contact.number === number
    );

    if (isEmailAlreadyRegister) {
      toast.error("Email is already registered");
      return;
    }

    if (isNumberAlreadyRegister) {
      toast.error("Number is already registered");
      return;
    }

    const newContact = {
      id: allContacts.length + 1,
      name,
      email,
      number,
    };

    toast.success("Contact added with success");

    inputNameRef.current.value = "";
    inputEmailRef.current.value = "";
    inputNumberRef.current.value = "";

    dispatch(addContact(newContact));
  };

  return (
    <>
      <Header />
      <Title>Add Post</Title>
      <ToastContainer />
      <StyledForm onSubmit={(e) => handleNewContact(e)}>
        <input
          ref={inputNameRef}
          type="text"
          placeholder="Full Name"
          autoFocus
          required
        />
        <input ref={inputEmailRef} type="email" placeholder="Email" required />
        <input
          ref={inputNumberRef}
          type="number"
          placeholder="Phone Number"
          required
        />

        <button type="submit">Add Student</button>
      </StyledForm>
    </>
  );
}
