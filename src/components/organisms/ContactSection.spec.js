import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);

    flushSync(() => {
      root.render(<ContactSection />);
    });
  });

  afterEach(() => {
    flushSync(() => {
      root.unmount();
    });

    container.remove();
  });

  it('debe renderizar el formulario de contacto', () => {
    const form = container.querySelector('form');
    const nameInput = container.querySelector('#name');
    const messageInput = container.querySelector('#message');

    expect(form).not.toBeNull();
    expect(nameInput).not.toBeNull();
    expect(messageInput).not.toBeNull();
  });

  it('debe mostrar un error si se envía el formulario vacío', () => {
    const form = container.querySelector('form');

    flushSync(() => {
      form.dispatchEvent(
        new Event('submit', {
          bubbles: true,
          cancelable: true
        })
      );
    });

    const error = container.querySelector('.alert-danger');

    expect(error).not.toBeNull();
    expect(error.textContent).toContain(
      'Por favor, completa todos los campos.'
    );
  });

  it('debe mostrar confirmación al enviar datos válidos', () => {
    const nameInput = container.querySelector('#name');
    const messageInput = container.querySelector('#message');
    const form = container.querySelector('form');

    flushSync(() => {
      const nameSetter =
        Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          'value'
        ).set;

      nameSetter.call(nameInput, 'Alejandro');

      nameInput.dispatchEvent(
        new Event('input', { bubbles: true })
      );

      const messageSetter =
        Object.getOwnPropertyDescriptor(
          HTMLTextAreaElement.prototype,
          'value'
        ).set;

      messageSetter.call(messageInput, 'Mensaje de prueba');

      messageInput.dispatchEvent(
        new Event('input', { bubbles: true })
      );
    });

    flushSync(() => {
      form.dispatchEvent(
        new Event('submit', {
          bubbles: true,
          cancelable: true
        })
      );
    });

    const success = container.querySelector('.alert-success');

    expect(success).not.toBeNull();
    expect(success.textContent).toContain(
      'Mensaje enviado correctamente.'
    );
  });
});