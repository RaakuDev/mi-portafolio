import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    flushSync(() => {
      root.unmount();
    });

    container.remove();
  });

  it('debe renderizar el texto recibido por props', () => {
    flushSync(() => {
      root.render(
        <CustomButton
          text="Ver proyecto"
          href="https://example.com"
        />
      );
    });

    const button = container.querySelector('a');

    expect(button.textContent).toBe('Ver proyecto');
  });

  it('debe utilizar el enlace recibido por props', () => {
    flushSync(() => {
      root.render(
        <CustomButton
          text="Ver proyecto"
          href="https://example.com"
        />
      );
    });

    const button = container.querySelector('a');

    expect(button.getAttribute('href')).toBe('https://example.com');
  });
});