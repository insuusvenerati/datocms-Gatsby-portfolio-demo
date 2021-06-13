import React from 'react';
import { create } from 'react-test-renderer';

import PureLayout from '../Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    const data = {
      datoCmsSite: {
        globalSeo: {
          siteName: 'laura norwood',
        },
        faviconMetaTags: {
          tags: [
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '57x57',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=57&h=57',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '60x60',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=60&h=60',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '72x72',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=72&h=72',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '76x76',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=76&h=76',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '114x114',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=114&h=114',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '120x120',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=120&h=120',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '144x144',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=144&h=144',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '152x152',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=152&h=152',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=180&h=180',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'msapplication-square70x70',
                content: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=70&h=70',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'msapplication-square150x150',
                content: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=150&h=150',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'msapplication-square310x310',
                content: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=310&h=310',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'msapplication-square310x150',
                content: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=310&h=150',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'icon',
                sizes: '16x16',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=16&h=16',
                type: 'image/png',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'icon',
                sizes: '32x32',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=32&h=32',
                type: 'image/png',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'icon',
                sizes: '96x96',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=96&h=96',
                type: 'image/png',
              },
            },
            {
              tagName: 'link',
              attributes: {
                rel: 'icon',
                sizes: '192x192',
                href: 'https://www.datocms-assets.com/23328/1594783402-faviconcat.png?w=192&h=192',
                type: 'image/png',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'application-name',
                content: 'Gatsby portfolio demo',
              },
            },
          ],
        },
      },
      datoCmsHome: {
        seoMetaTags: {
          tags: [
            {
              tagName: 'title',
              content: 'Homepage - laura norwood',
            },
            {
              tagName: 'meta',
              attributes: {
                property: 'og:title',
                content: 'Homepage',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'twitter:title',
                content: 'Homepage',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'description',
                content:
                  "Hello! I'm Laura, an illustrator & concept artist based in Florida. I've been doing freelance illustration and concept work for ten years, specializing in character design, prop design, and background painting.",
              },
            },
            {
              tagName: 'meta',
              attributes: {
                property: 'og:description',
                content:
                  "Hello! I'm Laura, an illustrator & concept artist based in Florida. I've been doing freelance illustration and concept work for ten years, specializing in character design, prop design, and background painting.",
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'twitter:description',
                content:
                  "Hello! I'm Laura, an illustrator & concept artist based in Florida. I've been doing freelance illustration and concept work for ten years, specializing in character design, prop design, and background painting.",
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'twitter:site',
                content: '@Treatscraft',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'twitter:card',
                content: 'summary',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                property: 'article:modified_time',
                content: '2020-07-22T23:22:16Z',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                property: 'article:published_time',
                content: '2020-03-26T03:59:35Z',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                property: 'og:locale',
                content: 'en_EN',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                property: 'og:type',
                content: 'article',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                property: 'og:site_name',
                content: 'laura norwood',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                property: 'og:image',
                content:
                  'https://www.datocms-assets.com/23328/1594787760-48caed16baeecd9e3f9587269d17dc141orig.png?w=1000&fit=max&fm=jpg',
              },
            },
            {
              tagName: 'meta',
              attributes: {
                name: 'twitter:image',
                content:
                  'https://www.datocms-assets.com/23328/1594787760-48caed16baeecd9e3f9587269d17dc141orig.png?w=1000&fit=max&fm=jpg',
              },
            },
          ],
        },
        introTextNode: {
          childMarkdownRemark: {
            html: '<p>visdev • bg painting • illustration</p>',
          },
        },
        copyright: '',
      },
      allDatoCmsSocialProfile: {
        edges: [
          {
            node: {
              profileType: 'Twitter',
              url: 'https://twitter.com/Treatscraft',
              icon: {
                fluid: {
                  aspectRatio: 1.0612244897959184,
                  src: 'https://www.datocms-assets.com/23328/1595107438-twitter.png?fm=webp',
                  srcSet:
                    'https://www.datocms-assets.com/23328/1595107438-twitter.png?dpr=0.08&fm=webp&w=208 15w,\nhttps://www.datocms-assets.com/23328/1595107438-twitter.png?dpr=0.15&fm=webp&w=208 30w,\nhttps://www.datocms-assets.com/23328/1595107438-twitter.png?dpr=0.29&fm=webp&w=208 60w,\nhttps://www.datocms-assets.com/23328/1595107438-twitter.png?dpr=0.44&fm=webp&w=208 90w,\nhttps://www.datocms-assets.com/23328/1595107438-twitter.png?dpr=0.58&fm=webp&w=208 120w,\nhttps://www.datocms-assets.com/23328/1595107438-twitter.png?dpr=0.87&fm=webp&w=208 180w,\nhttps://www.datocms-assets.com/23328/1595107438-twitter.png?dpr=1&fm=webp&w=208 208w',
                  sizes: '(max-width: 60px) 100vw, 60px',
                },
              },
            },
          },
          {
            node: {
              profileType: 'Instagram',
              url: 'https://www.instagram.com/ljanorwood/',
              icon: {
                fluid: {
                  aspectRatio: 1.0561224489795917,
                  src: 'https://www.datocms-assets.com/23328/1595107432-insta.png?fm=webp',
                  srcSet:
                    'https://www.datocms-assets.com/23328/1595107432-insta.png?dpr=0.08&fm=webp&w=207 15w,\nhttps://www.datocms-assets.com/23328/1595107432-insta.png?dpr=0.15&fm=webp&w=207 30w,\nhttps://www.datocms-assets.com/23328/1595107432-insta.png?dpr=0.29&fm=webp&w=207 60w,\nhttps://www.datocms-assets.com/23328/1595107432-insta.png?dpr=0.44&fm=webp&w=207 90w,\nhttps://www.datocms-assets.com/23328/1595107432-insta.png?dpr=0.58&fm=webp&w=207 120w,\nhttps://www.datocms-assets.com/23328/1595107432-insta.png?dpr=0.87&fm=webp&w=207 180w,\nhttps://www.datocms-assets.com/23328/1595107432-insta.png?dpr=1&fm=webp&w=207 207w',
                  sizes: '(max-width: 60px) 100vw, 60px',
                },
              },
            },
          },
          {
            node: {
              profileType: 'Email',
              url: 'mailto:norwood.lja@gmail.com',
              icon: {
                fluid: {
                  aspectRatio: 1.0612244897959184,
                  src: 'https://www.datocms-assets.com/23328/1595107435-mail.png?fm=webp',
                  srcSet:
                    'https://www.datocms-assets.com/23328/1595107435-mail.png?dpr=0.08&fm=webp&w=208 15w,\nhttps://www.datocms-assets.com/23328/1595107435-mail.png?dpr=0.15&fm=webp&w=208 30w,\nhttps://www.datocms-assets.com/23328/1595107435-mail.png?dpr=0.29&fm=webp&w=208 60w,\nhttps://www.datocms-assets.com/23328/1595107435-mail.png?dpr=0.44&fm=webp&w=208 90w,\nhttps://www.datocms-assets.com/23328/1595107435-mail.png?dpr=0.58&fm=webp&w=208 120w,\nhttps://www.datocms-assets.com/23328/1595107435-mail.png?dpr=0.87&fm=webp&w=208 180w,\nhttps://www.datocms-assets.com/23328/1595107435-mail.png?dpr=1&fm=webp&w=208 208w',
                  sizes: '(max-width: 60px) 100vw, 60px',
                },
              },
            },
          },
        ],
      },
      sidebar: {
        nodes: [
          {
            fixed: {
              width: 225,
              height: 245,
              src: 'https://www.datocms-assets.com/23328/1594784357-sidebarbg.png?auto=format&w=225',
              srcSet:
                'https://www.datocms-assets.com/23328/1594784357-sidebarbg.png?auto=format&dpr=1&w=225 1x,\nhttps://www.datocms-assets.com/23328/1594784357-sidebarbg.png?auto=format&dpr=1.5&w=225 1.5x,\nhttps://www.datocms-assets.com/23328/1594784357-sidebarbg.png?auto=format&dpr=2&w=225 2x,\nhttps://www.datocms-assets.com/23328/1594784357-sidebarbg.png?auto=format&dpr=3&w=225 3x',
              aspectRatio: 0.9183673469387755,
            },
          },
        ],
      },
      catImages: {
        nodes: [
          {
            fixed: {
              width: 149,
              height: 169,
              src: 'https://www.datocms-assets.com/23328/1601060463-8.png?auto=format&w=149',
              srcSet:
                'https://www.datocms-assets.com/23328/1601060463-8.png?auto=format&dpr=1&w=149 1x,\nhttps://www.datocms-assets.com/23328/1601060463-8.png?auto=format&dpr=1.5&w=149 1.5x,\nhttps://www.datocms-assets.com/23328/1601060463-8.png?auto=format&dpr=2&w=149 2x,\nhttps://www.datocms-assets.com/23328/1601060463-8.png?auto=format&dpr=3&w=149 3x',
              aspectRatio: 0.8816568047337278,
            },
          },
          {
            fixed: {
              width: 149,
              height: 169,
              src: 'https://www.datocms-assets.com/23328/1601060460-7.png?auto=format&w=149',
              srcSet:
                'https://www.datocms-assets.com/23328/1601060460-7.png?auto=format&dpr=1&w=149 1x,\nhttps://www.datocms-assets.com/23328/1601060460-7.png?auto=format&dpr=1.5&w=149 1.5x,\nhttps://www.datocms-assets.com/23328/1601060460-7.png?auto=format&dpr=2&w=149 2x,\nhttps://www.datocms-assets.com/23328/1601060460-7.png?auto=format&dpr=3&w=149 3x',
              aspectRatio: 0.8816568047337278,
            },
          },
          {
            fixed: {
              width: 149,
              height: 169,
              src: 'https://www.datocms-assets.com/23328/1601060455-6.png?auto=format&w=149',
              srcSet:
                'https://www.datocms-assets.com/23328/1601060455-6.png?auto=format&dpr=1&w=149 1x,\nhttps://www.datocms-assets.com/23328/1601060455-6.png?auto=format&dpr=1.5&w=149 1.5x,\nhttps://www.datocms-assets.com/23328/1601060455-6.png?auto=format&dpr=2&w=149 2x,\nhttps://www.datocms-assets.com/23328/1601060455-6.png?auto=format&dpr=3&w=149 3x',
              aspectRatio: 0.8816568047337278,
            },
          },
          {
            fixed: {
              width: 149,
              height: 169,
              src: 'https://www.datocms-assets.com/23328/1595531241-2.png?auto=format&w=149',
              srcSet:
                'https://www.datocms-assets.com/23328/1595531241-2.png?auto=format&dpr=1&w=149 1x,\nhttps://www.datocms-assets.com/23328/1595531241-2.png?auto=format&dpr=1.5&w=149 1.5x,\nhttps://www.datocms-assets.com/23328/1595531241-2.png?auto=format&dpr=2&w=149 2x,\nhttps://www.datocms-assets.com/23328/1595531241-2.png?auto=format&dpr=3&w=149 3x',
              aspectRatio: 0.8816568047337278,
            },
          },
          {
            fixed: {
              width: 149,
              height: 169,
              src: 'https://www.datocms-assets.com/23328/1595531238-3.png?auto=format&w=149',
              srcSet:
                'https://www.datocms-assets.com/23328/1595531238-3.png?auto=format&dpr=1&w=149 1x,\nhttps://www.datocms-assets.com/23328/1595531238-3.png?auto=format&dpr=1.5&w=149 1.5x,\nhttps://www.datocms-assets.com/23328/1595531238-3.png?auto=format&dpr=2&w=149 2x,\nhttps://www.datocms-assets.com/23328/1595531238-3.png?auto=format&dpr=3&w=149 3x',
              aspectRatio: 0.8816568047337278,
            },
          },
          {
            fixed: {
              width: 149,
              height: 169,
              src: 'https://www.datocms-assets.com/23328/1595531234-4.png?auto=format&w=149',
              srcSet:
                'https://www.datocms-assets.com/23328/1595531234-4.png?auto=format&dpr=1&w=149 1x,\nhttps://www.datocms-assets.com/23328/1595531234-4.png?auto=format&dpr=1.5&w=149 1.5x,\nhttps://www.datocms-assets.com/23328/1595531234-4.png?auto=format&dpr=2&w=149 2x,\nhttps://www.datocms-assets.com/23328/1595531234-4.png?auto=format&dpr=3&w=149 3x',
              aspectRatio: 0.8816568047337278,
            },
          },
          {
            fixed: {
              width: 149,
              height: 169,
              src: 'https://www.datocms-assets.com/23328/1595531230-1.png?auto=format&w=149',
              srcSet:
                'https://www.datocms-assets.com/23328/1595531230-1.png?auto=format&dpr=1&w=149 1x,\nhttps://www.datocms-assets.com/23328/1595531230-1.png?auto=format&dpr=1.5&w=149 1.5x,\nhttps://www.datocms-assets.com/23328/1595531230-1.png?auto=format&dpr=2&w=149 2x,\nhttps://www.datocms-assets.com/23328/1595531230-1.png?auto=format&dpr=3&w=149 3x',
              aspectRatio: 0.8816568047337278,
            },
          },
        ],
      },
      catIcon: {
        fixed: {
          width: 60,
          height: 57,
          src: 'https://www.datocms-assets.com/23328/1595107428-cat.png?fm=webp&w=60',
          srcSet:
            'https://www.datocms-assets.com/23328/1595107428-cat.png?dpr=1&fm=webp&w=60 1x,\nhttps://www.datocms-assets.com/23328/1595107428-cat.png?dpr=1.5&fm=webp&w=60 1.5x,\nhttps://www.datocms-assets.com/23328/1595107428-cat.png?dpr=2&fm=webp&w=60 2x,\nhttps://www.datocms-assets.com/23328/1595107428-cat.png?dpr=3&fm=webp&w=60 3x',
          aspectRatio: 1.0526315789473684,
        },
      },
    };

    console.log(data);

    const tree = create(<PureLayout data={data} />);
    expect(tree).toMatchSnapshot();
  });
});
