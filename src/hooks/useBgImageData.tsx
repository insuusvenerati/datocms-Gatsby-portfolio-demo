import { graphql, useStaticQuery } from 'gatsby';
import { BGTags } from './__generated__/BGTags';

const useBgImageData = (): BGTags => {
  return useStaticQuery<BGTags>(
    graphql`
      query BGTags {
        desktopBgImage: allDatoCmsAsset(
          filter: { tags: { in: "bg" } }
          sort: { fields: filename, order: ASC }
        ) {
          edges {
            node {
              id
              fixed(width: 1400) {
                ...GatsbyDatoCmsFixed
                src
              }
              fluid(imgixParams: { w: "654" }) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
          }
        }
        mobileBgImage: allDatoCmsAsset(
          filter: { tags: { in: "bg" } }
          sort: { fields: filename, order: ASC }
        ) {
          edges {
            node {
              id
              fixed(width: 400) {
                ...GatsbyDatoCmsFixed
                src
              }
              fluid(imgixParams: { w: "350" }) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
          }
        }
      }
    `,
  );
};

export default useBgImageData;
