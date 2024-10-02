// components/UserInfo.js
"use client"
export default function UserInfo() {
    const isLoggedIn = true; // Simulación de usuario logueado
    const userName = 'Usuario'; // Nombre simulado
  
    return isLoggedIn ? (
      <div className="user-info">
        <span>Hola, {userName}</span>
        <button>Cerrar Sesión</button>
      </div>
    ) : (
      <Link href="/login">Login</Link>
    );
  }
  