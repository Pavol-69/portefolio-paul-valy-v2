import "./Contact.scss";
import "../../index.scss";

import TextField from "@mui/material/TextField";

import Modal from "../Modal/Modal";

import emailjs from "emailjs-com";

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.mail) {
      newErrors.mail = "Ce champ est requis";
    } else if (!isValidEmail(formData.mail)) {
      newErrors.mail = "Adresse mail invalide";
    }

    if (!formData.message) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSuccess();
    }
  };

  const handleSuccess = () => {
    sendMail(formData.name, formData.mail, formData.message);
    setFormData({
      name: "",
      mail: "",
      message: "",
    });
    setShowModal(true);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendMail = async (name, email, message) => {
    try {
      const result = await emailjs.send(
        "service_jfesfvr",
        "template_qi1ysvn",
        {
          from_name: name,
          from_email: email,
          message,
          to_email: "paul.valy@gmail.com",
        },
        "ng7GwPl1Es3CvQiiC"
      );
      console.log("Email envoyé !", result.text);
      return true;
    } catch (error) {
      console.error("Erreur envoi email :", error);
      return false;
    }
  };

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)} className="contact_ctn elm_ct">
        <TextField
          className={`input_contact ${errors.name ? " input_error" : null}`}
          label="Votre nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          helperText={errors.name ? "Ce champ est requis" : " "}
        />
        <TextField
          className={`input_contact ${errors.mail ? " input_error" : null}`}
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          label="Votre adresse mail"
          variant="outlined"
          helperText={errors.mail ? errors.mail : " "}
        />
        <TextField
          className={`input_contact ${errors.message ? " input_error" : null}`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          id="input_message"
          label="Votre message"
          variant="outlined"
          multiline
          helperText={errors.message ? "Ce champ est requis" : " "}
        />
        <button onClick={(e) => handleSubmit(e)} className="btn elm_ct">
          Envoyer
        </button>
      </form>
      {showModal ? (
        <Modal
          content={<div>Message envoyé !</div>}
          setShowModal={setShowModal}
        />
      ) : null}
    </section>
  );
}

export default Contact;
