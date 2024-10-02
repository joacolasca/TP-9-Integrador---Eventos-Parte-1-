// components/Header.js
"use client"
import Link from 'next/link';
import UserInfo from '../UserInfo/UserInfo';

export default function Header() {
  return (
    <header>
      <div>
        <h1>Eventos</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/events">Eventos</Link>
          <Link href="/contact">Contacto</Link>
          <UserInfo /> {/* Mostrar si está logueado */}
        </nav>
      </div>
    </header>
  );
}
