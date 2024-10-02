// components/FormRegister.js
"use client"
export default function FormRegister() {
    return (
      <form>
        <label>Nombre</label>
        <input type="text" placeholder="Ingresa tu nombre" />
        <label>Email</label>
        <input type="email" placeholder="Ingresa tu email" />
        <label>Password</label>
        <input type="password" placeholder="Crea una contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    );
  }
  