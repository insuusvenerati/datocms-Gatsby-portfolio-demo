/* eslint-disable react/no-danger */
import { Link } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import useLayoutData from '../../hooks/useLayoutData';
import ImageTooltip from '../ImageTooltip/ImageTooltip';
import Img from 'gatsby-image';
import { LayoutQuery } from '../../hooks/__generated__/LayoutQuery';

type LayoutProps = {
  data: LayoutQuery;
};

export const PureLayout: React.FC<LayoutProps> = ({ data, children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    allDatoCmsSocialProfile,
    catImages: { nodes: catImages },
    datoCmsHome,
    datoCmsSite,
    sidebar,
  } = data;
  const [catImage, setCatImage] = useState(catImages[0].fixed);
  console.log(data);

  const generateCatImageHandler = () => {
    const randomCatImage = catImages[Math.floor(Math.random() * catImages.length)].fixed;
    setCatImage(randomCatImage);
  };

  return (
    <div className={`container ${showMenu ? 'is-open' : ''}`}>
      <HelmetDatoCms favicon={datoCmsSite.faviconMetaTags} seo={datoCmsHome.seoMetaTags} />

      <div data-cy="sidebar-container" className="container__sidebar">
        <ImageTooltip generateRandomCatImageHandler={generateCatImageHandler} catImage={catImage} />
        <div style={{ backgroundImage: `url(${sidebar.nodes[0].fixed.src})` }} className={`sidebar`}>
          <h6 style={{ fontFamily: 'Montserrat' }} className="sidebar__title">
            <Link data-cy="site-title" to="/">
              {datoCmsSite.globalSeo.siteName}
            </Link>
          </h6>
          <div
            className="sidebar__intro"
            dangerouslySetInnerHTML={{
              __html: datoCmsHome.introTextNode.childMarkdownRemark.html,
            }}
          />
          <ul data-cy="sidebar-menu" className="sidebar__menu">
            <li>
              <Link activeStyle={{ color: '#5d6b5b' }} to="/">
                bg & illustration
              </Link>
            </li>
            <li>
              <Link activeStyle={{ color: '#5d6b5b' }} to="/sketchbook">
                sketchbook
              </Link>
            </li>
            <li>
              <Link activeStyle={{ color: '#5d6b5b' }} to="/about">
                about & contact
              </Link>
            </li>
          </ul>
          <div data-cy="icon-row" className="centered">
            {allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
              <a
                className={`social grow`}
                key={profile.profileType}
                style={{
                  cursor: 'pointer',
                }}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
              >
                <Img alt={profile.profileType} fluid={profile.icon.fluid} />
              </a>
            ))}
            <a style={{ width: '55px' }}>
              <span
                data-tip
                data-event="click"
                data-for="catGenerator"
                className="social social--cat grow"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container__body">
        <div className="container__mobile-header">
          <div className="mobile-header">
            <div className="mobile-header__menu">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowMenu(!showMenu);
                }}
              />
            </div>
            <div className="mobile-header__logo">
              <Link to="/">{datoCmsSite.globalSeo.siteName}</Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

const Layout: React.FC = ({ children }) => {
  // const {
  //   datoCmsSite,
  //   datoCmsHome,
  //   allDatoCmsSocialProfile,
  //   sidebar,
  //   catImages: { nodes: catImages },
  // } = useLayoutData();
  const data = useLayoutData();
  console.log(data);

  return (
    <PureLayout data={data}> {children} </PureLayout>
    // <div className={`container ${showMenu ? 'is-open' : ''}`}>
    //   <HelmetDatoCms favicon={datoCmsSite.faviconMetaTags} seo={datoCmsHome.seoMetaTags} />

    //   <div data-cy="sidebar-container" className="container__sidebar">
    //     <ImageTooltip generateRandomCatImageHandler={generateCatImageHandler} catImage={catImage} />
    //     <div style={{ backgroundImage: `url(${sidebar.nodes[0].fixed.src})` }} className={`sidebar`}>
    //       <h6 style={{ fontFamily: 'Montserrat' }} className="sidebar__title">
    //         <Link data-cy="site-title" to="/">
    //           {datoCmsSite.globalSeo.siteName}
    //         </Link>
    //       </h6>
    //       <div
    //         className="sidebar__intro"
    //         dangerouslySetInnerHTML={{
    //           __html: datoCmsHome.introTextNode.childMarkdownRemark.html,
    //         }}
    //       />
    //       <ul data-cy="sidebar-menu" className="sidebar__menu">
    //         <li>
    //           <Link activeStyle={{ color: '#5d6b5b' }} to="/">
    //             bg & illustration
    //           </Link>
    //         </li>
    //         <li>
    //           <Link activeStyle={{ color: '#5d6b5b' }} to="/sketchbook">
    //             sketchbook
    //           </Link>
    //         </li>
    //         <li>
    //           <Link activeStyle={{ color: '#5d6b5b' }} to="/about">
    //             about & contact
    //           </Link>
    //         </li>
    //       </ul>
    //       <div data-cy="icon-row" className="centered">
    //         {allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
    //           <a
    //             className={`social grow`}
    //             key={profile.profileType}
    //             style={{
    //               cursor: 'pointer',
    //             }}
    //             href={profile.url}
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <Img alt={profile.profileType} fluid={profile.icon.fluid} />
    //           </a>
    //         ))}
    //         <a style={{ width: '55px' }}>
    //           <span
    //             data-tip
    //             data-event="click"
    //             data-for="catGenerator"
    //             className="social social--cat grow"
    //             style={{ cursor: 'pointer' }}
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container__body">
    //     <div className="container__mobile-header">
    //       <div className="mobile-header">
    //         <div className="mobile-header__menu">
    //           <a
    //             href="#"
    //             onClick={(e) => {
    //               e.preventDefault();
    //               setShowMenu(!showMenu);
    //             }}
    //           />
    //         </div>
    //         <div className="mobile-header__logo">
    //           <Link to="/">{datoCmsSite.globalSeo.siteName}</Link>
    //         </div>
    //       </div>
    //     </div>
    //     {children}
    //   </div>
    // </div>
  );
};

export default Layout;
