import * as Sentry from '@sentry/react';
import { PageProps } from 'gatsby';
import * as React from 'react';
import BgImageContainer from '../components/BgImageContainer';
import Layout from '../components/Layout';
import useBgImageData from '../hooks/useBgImageData';

const IndexPage: React.FC<PageProps> = () => {
  const { desktopBgImage, mobileBgImage } = useBgImageData();
  return (
    <Layout>
      <Sentry.ErrorBoundary fallback={<h1>Error</h1>}>
        <BgImageContainer desktopBgImage={desktopBgImage} mobileBgImage={mobileBgImage} />
      </Sentry.ErrorBoundary>
    </Layout>
  );
};

export default IndexPage;
