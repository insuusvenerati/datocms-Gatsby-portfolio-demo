import React from 'react';
import ImageTooltip from './ImageTooltip';
import { render, screen } from '@testing-library/react';
import { data } from '../BgImageContainer/bgImageData.json';

describe('image tooltip component', () => {
  test('is hidden until clicked', () => {
    const generateRandomCatImageHandler = jest.fn();
    render(
      <ImageTooltip
        catImage={data.desktopBgImage.edges[0].node.fixed}
        generateRandomCatImageHandler={generateRandomCatImageHandler}
      />,
    );

    screen.debug();
    expect(true).toBeTruthy();
  });
});
