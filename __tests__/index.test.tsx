import { render, screen } from '@testing-library/react';
import React from 'react';
import IndexPage from '../src/pages/index';

describe('home page', () => {
  test('matches snapshot', () => {
    render(<IndexPage />);

    expect(screen).toMatchSnapshot();
  });
});
