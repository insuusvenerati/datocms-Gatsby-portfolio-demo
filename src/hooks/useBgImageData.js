import { graphql, useStaticQuery } from 'gatsby';

const useBgImageData = () => {
  const bgImageData = useStaticQuery(
    graphql`
      query BGTags {
        allDatoCmsAsset(filter: { tags: { in: "bg" } }) {
          edges {
            node {
              id
              fixed(width: 1400) {
                ...GatsbyDatoCmsFixed
                src
              }
              fluid(maxWidth: 2000) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
          }
        }
      }
    `,
  );
  return bgImageData;
};

export default useBgImageData;