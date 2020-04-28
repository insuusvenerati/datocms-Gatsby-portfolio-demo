import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Masonry from 'react-masonry-component';
import 'react-perfect-scrollbar/dist/css/styles.css';
import useBgImageData from '../hooks/useBgImageData';
import ImageCard from './ImageCard';

const BGImageContainer: React.FC = () => {
  const { allDatoCmsAsset } = useBgImageData();

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const edges = allDatoCmsAsset.edges;

  return (
    <>
      <Masonry className="showcase">
        {edges.map(({ node }) => (
          <ImageCard
            key={node.id}
            isOpen={isOpen}
            setPhotoIndex={setPhotoIndex}
            setOpen={setOpen}
            node={node}
            edges={edges}
          />
        ))}
      </Masonry>
      {isOpen && (
        <Lightbox
          mainSrc={edges[photoIndex].node.fixed.src}
          nextSrc={edges[(photoIndex + 1) % edges.length].node.fixed.src}
          prevSrc={edges[(photoIndex + edges.length - 1) % edges.length].node.fixed.src}
          onMovePrevRequest={(): void => setPhotoIndex((photoIndex + edges.length - 1) % edges.length)}
          onMoveNextRequest={(): void => setPhotoIndex((photoIndex + 1) % edges.length)}
          onCloseRequest={(): void => setOpen(!isOpen)}
          clickOutsideToClose
          discourageDownloads={false}
        />
      )}
    </>
  );
};

export default BGImageContainer;
