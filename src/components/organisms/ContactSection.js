import { useState } from 'react';

function ContactSection() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    if (name.trim() === '' || message.trim() === '') {
        setError('Por favor, completa todos los campos.');
        setSent(false);
        return;
    }

    setError('');
    setSent(true);
    setName('');
    setMessage('');
    };

  return (
    <section id="contacto" className="py-5">
      <h2 className="mb-4">Contacto</h2>
        <div className='row'>
            <div className='col-12 col-md-8 col-lg-6'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Mensaje
                    </label>

                    <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />

                    </div>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                     )}

                    <button type="submit" className="btn btn-primary">
                    Enviar
                    </button>

                    {sent && (
                        <div className="alert alert-success mt-3" role="alert">
                            Mensaje enviado correctamente.
                        </div>
                    )}

                </form>
            </div>
        </div>
    </section>
  );
}

export default ContactSection;