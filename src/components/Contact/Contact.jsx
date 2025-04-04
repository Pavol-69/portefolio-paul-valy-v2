import "./Contact.scss";
import "../../index.scss";

import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <section className="contact_ctn elm_ct">
      <TextField
        className="input_contact"
        label="Votre nom"
        variant="outlined"
      />
      <TextField
        className="input_contact"
        label="Votre adresse mail"
        variant="outlined"
      />
      <TextField
        className="input_contact"
        label="Votre message"
        variant="outlined"
      />
    </section>
  );
}

export default Contact;
