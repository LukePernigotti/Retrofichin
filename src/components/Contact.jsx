import React, { Component } from "react";

const emailRegEx = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const fullNameRegEx = RegExp(
  /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+(([',. -][a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ])?[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]*)*$/
);
//ver de agregarle la g

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  //validate form from errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  //validate if the form was filled out
  Object.values(rest).forEach(val => {
    val == null && (valid = false);
  });

  return valid;
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      message: null,
      error: false,
      formErrors: {
        fullName: "",
        email: "",
        message: ""
      }
    };
  }

  handleSubmit = e => {
    if (formValid(this.state)) {
      this.setState({
        error: false
      });

      console.log(`
      --submitting--
      fullName: ${this.state.fullName}
      email: ${this.state.email}
      message: ${this.state.message}
      error: ${this.state.error}
      `); //por qué a la primera que hago el submit salta false en error y a la segunda actualiza?

      /*fetch("http://localhost:3000/form-process.php", {
        method: "POST",
        body: JSON.stringify(
          this.state.fullName,
          this.state.email,
          this.state.message
        ),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          console.log("Successful" + data);
        });
      });*/
    } else {
      e.preventDefault();

      this.setState({
        error: true
      });
      console.log(this.state);
      console.error("Form invalid - Display Error Message");
    }
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "fullName":
        formErrors.fullName =
          value.length > 2 && fullNameRegEx.test(value)
            ? ""
            : "El nombre no puedo contener números ni símbolos y debe tener más de 2 caracteres";
        break;
      case "email":
        formErrors.email = emailRegEx.test(value)
          ? ""
          : 'Email no válido, ingrese un email con el formato "algo@email.com"';
        break;
      case "message":
        formErrors.message = value.length < 10 ? "Mensaje muy corto" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center text-uppercase my-5 title">Contacto</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form
              onSubmit={this.handleSubmit}
              method="post"
              action="/form-process.php"
              noValidate
            >
              <div className="form-group mb-5">
                <label htmlFor="fullName" className="text-uppercase">
                  <span className="font-icon user" />
                  Nombre
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    this.state.error //si hay error
                      ? formErrors.fullName.length > 0 || //si hay un mensaje de error
                        this.state.fullName === null //si no se llenó el campo
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }`}
                  id="fullName"
                  name="fullName"
                  placeholder="Tu nombre y apellido"
                  required
                  onChange={this.handleChange}
                  noValidate
                />
                {(formErrors.fullName.length > 0 && (
                  <p className="invalid-feedback">{formErrors.fullName}</p>
                )) ||
                  (this.state.fullName === null && (
                    <p className="invalid-feedback">
                      No olvides completar tus datos!
                    </p>
                  ))}
              </div>

              <div className="form-group mb-5">
                <label htmlFor="email" className="text-uppercase">
                  <span className="font-icon email" />
                  E-mail
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    this.state.error
                      ? formErrors.email.length > 0 || this.state.email === null
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="Dirección de correo electrónico"
                  onChange={this.handleChange}
                  noValidate
                />
                {(formErrors.email.length > 0 && (
                  <p className="invalid-feedback">{formErrors.email}</p>
                )) ||
                  (this.state.email === null && (
                    <p className="invalid-feedback">
                      No olvides completar tus datos!
                    </p>
                  ))}
              </div>

              <div className="form-group mb-5">
                <label htmlFor="message" className="text-uppercase">
                  <span className="font-icon message" />
                  Mensaje
                </label>
                <textarea
                  className={`form-control ${
                    this.state.error
                      ? formErrors.message.length > 0 ||
                        this.state.message === null
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }`}
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Escribe lo que deseas consultar en este espacio"
                  onChange={this.handleChange}
                  noValidate
                />
                {(formErrors.message.length > 0 && (
                  <p className="invalid-feedback">{formErrors.message}</p>
                )) ||
                  (this.state.message === null && (
                    <p className="invalid-feedback">Escribe un mensaje breve</p>
                  ))}
              </div>
              <div className="d-flex justify-content-center mb-5">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill mt-3 mb-5 button"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
