// FondoParticulas.test.js
import React from 'react';
import { render } from '@testing-library/react';
import FondoParticulas from './components/FondoParticulas';

describe('FondoParticulas', () => {
  it('debe renderizar correctamente el componente', () => {
    const { container } = render(<FondoParticulas />);
    const elementoFondo = container.querySelector('#particles-js');
    expect(elementoFondo).toBeInTheDocument();
  });
});
