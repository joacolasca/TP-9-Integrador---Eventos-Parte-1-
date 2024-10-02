// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a la plataforma de Eventos</h1>
      <p>Explora los mejores eventos, regístrate y participa en actividades emocionantes cerca de ti.</p>

      <section>
        <h2>Secciones Principales</h2>
        <ul>
          <li>
            <Link href="/events">Ver Eventos</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
          <li>
            <Link href="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link href="/registro">Registrarse</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
