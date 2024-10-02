// components/FormLogin.js
"use client"
export default function FormLogin() {
    return (
      <form>
        <label>Email</label>
        <input type="email" placeholder="Ingresa tu email" />
        <label>Password</label>
        <input type="password" placeholder="Ingresa tu contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    );
  }
  