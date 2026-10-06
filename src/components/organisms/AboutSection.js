import profileImage from '../../assets/apio.jpg';

function AboutSection() {
  return (
    <section id="sobre-mi" className="py-5">
      <div className="row align-items-center">

        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
          <img
            src={profileImage}
            alt="Foto de perfil"
            className="img-fluid rounded-circle"
          />
        </div>

        <div className="col-12 col-md-8">
          <h2>Sobre mí</h2>

          <p>
            Hola, soy César. Soy estudiante de desarrollo de software
            interesado en el desarrollo de aplicaciones y tecnologías web.
            En este portafolio presento algunos de los proyectos que he
            desarrollado durante mi formación.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;