import React from 'react';
import { render, screen } from '@testing-library/react';
import BGImageContainer from './BgImageContainer';
import data from './bgImageData.json';

describe('BgImageContainer', () => {
  test('should match snapshot', () => {
    render(
      <BGImageContainer mobileBgImage={data.data.mobileBgImage} desktopBgImage={data.data.desktopBgImage} />,
    );
    expect(screen).toMatchSnapshot();
  });
});
