"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./signInForm.module.css";
import Swal from "sweetalert2";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { customThemeBtn, customThemeInput } from "./signInCustomTheme";
import { authenticate } from "@/lib/actions";

const SignInForm = () => {
  // Estado para manejar el loading
  const [loading, setLoading] = useState(false);

  // Estados para inputs y errores
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Manejador de cambios en los inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar el campo mientras el usuario escribe
    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  // Validar todo el formulario antes de enviar
  const validateForm = () => {
    const newErrors = {
      email: validate("email", formData.email),
      password: validate("password", formData.password),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  // Validar cada campo
  const validate = (name: string, value: string) => {
    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "El email es obligatorio.";
        else if (!emailRegex.test(value)) return "Email inválido.";
        else if (value.length < 10) return "Email inválido.";
        return "";
      case "password":
        if (!value) return "La contraseña es obligatoria.";
        else if (value.length <= 5)
          return "La contraseña debe tener al menos 6 caracteres.";
        return "";
      default:
        return "";
    }
  };

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No fue posible iniciar sesión. Por favor, intenta nuevamente más tarde.",
      confirmButtonText: "Volver",
      confirmButtonColor: "gray",
      allowOutsideClick: false,
    });
  };

  // Manejador del submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      await sendDataToServer();
    }
  };

  const sendDataToServer = async () => {
    setLoading(true); // Activar loading

    const formDataNew = new FormData();
    formDataNew.append("email", formData.email);
    formDataNew.append("password", formData.password);

    try {
      const result = await authenticate({}, formDataNew);

      if (result?.includes("Credentials")) {
        setLoading(false);
        errorAlert();
      }
    } catch (err) {
      errorAlert();
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div>
          <div className={styles.labelContainer}>
            <Label htmlFor="email" value="Tu email:" className={styles.label} />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="ejemplo@dmr.com"
            theme={customThemeInput}
            color={errors.email ? "failure" : "base"}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>
        <div>
          <div className={styles.labelContainer}>
            <Label
              htmlFor="password"
              value="Tu contraseña:"
              className={styles.label}
            />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Ingrese la contraseña"
            name="password"
            theme={customThemeInput}
            color={errors.password ? "failure" : "base"}
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <p className={styles.errorText}>{errors.password}</p>
          )}
        </div>
        <span className={styles.mandatoryText}>
          <span className={styles.mandatoryStar}>*</span> Todos los campos son
          obligatorios.
        </span>
        <Button
          type="submit"
          theme={customThemeBtn}
          color={"base"}
          disabled={loading}
        >
          {loading ? (
            <div>
              <Spinner aria-label="Default status" size={"md"} />
              <span className={styles.spinnerText}>Enviando...</span>
            </div>
          ) : (
            "Enviar"
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
