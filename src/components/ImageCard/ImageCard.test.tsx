import { render, screen } from '@testing-library/react';
import React from 'react';
import ImageCard from './ImageCard';
import { data } from '../BgImageContainer/bgImageData.json';
const setPhotoIndex = jest.fn();

describe('Image card component', () => {
  test('should only render an img tag', () => {
    render(
      <ImageCard
        sources={data.desktopBgImage.edges[0].node.fluid}
        setPhotoIndex={setPhotoIndex}
        edges={data.desktopBgImage.edges}
        node={data.desktopBgImage.edges[0].node}
        isOpen={false}
        setOpen={() => false}
      />,
    );
    const imgTag = screen.getByRole('img');
    expect(imgTag).toBeInTheDocument();
  });
});
