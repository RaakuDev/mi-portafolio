function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container">

        <a className="navbar-brand" href="#inicio">
          Mi Portafolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >
          <div className="navbar-nav ms-auto">

            <a className="nav-link" href="#sobre-mi">
              Sobre mí
            </a>

            <a className="nav-link" href="#proyectos">
              Proyectos
            </a>

            <a className="nav-link" href="#noticias">
                Noticias
            </a>

            <a className="nav-link" href="#contacto">
                Contacto
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;