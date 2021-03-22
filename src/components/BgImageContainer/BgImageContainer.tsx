import React, { useState } from 'react';
import Masonry from 'react-masonry-component';
import { BGTags } from '../../hooks/__generated__/BGTags';
import ImageCard from '../ImageCard/ImageCard';

const LazyLightbox = React.lazy(() => import('react-image-lightbox'));

const BgImageContainer = ({ desktopBgImage, mobileBgImage }: BGTags): JSX.Element => {
  const isSSR = typeof window === 'undefined';
  const { edges: desktopBgImageArray } = desktopBgImage;
  const { edges: mobileBgImageArray } = mobileBgImage;

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const zippedImages = desktopBgImageArray.map((element, index) => {
    return [element, mobileBgImageArray[index]];
  });

  return (
    <>
      <Masonry className="showcase">
        {zippedImages.map(([desktopImage, mobileImage]) => {
          const sources = [
            mobileImage.node.fluid,
            {
              ...desktopImage.node.fluid,
              media: `(min-width: 768px)`,
            },
          ];
          return (
            <ImageCard
              isOpen={isOpen}
              setOpen={setOpen}
              setPhotoIndex={setPhotoIndex}
              key={desktopImage.node.id}
              sources={sources}
              edges={desktopBgImageArray}
              node={desktopImage.node}
            />
          );
        })}
      </Masonry>
      {!isSSR && isOpen && (
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <LazyLightbox
            mainSrc={desktopBgImageArray[photoIndex].node.fixed.src}
            nextSrc={desktopBgImageArray[(photoIndex + 1) % desktopBgImageArray.length].node.fixed.src}
            prevSrc={
              desktopBgImageArray[(photoIndex + desktopBgImageArray.length - 1) % desktopBgImageArray.length]
                .node.fixed.src
            }
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + desktopBgImageArray.length - 1) % desktopBgImageArray.length)
            }
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % desktopBgImageArray.length)}
            onCloseRequest={() => setOpen(!isOpen)}
            clickOutsideToClose
            discourageDownloads={false}
            enableZoom={true}
          />
        </React.Suspense>
      )}
    </>
  );
};

export default BgImageContainer;
