/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LayoutQuery
// ====================================================

export interface LayoutQuery_datoCmsSite_globalSeo {
  siteName: string | null;
}

export interface LayoutQuery_datoCmsSite_faviconMetaTags {
  tags: any | null;
}

export interface LayoutQuery_datoCmsSite {
  globalSeo: LayoutQuery_datoCmsSite_globalSeo | null;
  faviconMetaTags: LayoutQuery_datoCmsSite_faviconMetaTags | null;
}

export interface LayoutQuery_datoCmsHome_seoMetaTags {
  tags: any | null;
}

export interface LayoutQuery_datoCmsHome_introTextNode_childMarkdownRemark {
  html: string | null;
}

export interface LayoutQuery_datoCmsHome_introTextNode {
  childMarkdownRemark: LayoutQuery_datoCmsHome_introTextNode_childMarkdownRemark | null;
}

export interface LayoutQuery_datoCmsHome {
  seoMetaTags: LayoutQuery_datoCmsHome_seoMetaTags | null;
  introTextNode: LayoutQuery_datoCmsHome_introTextNode | null;
  copyright: string | null;
}

export interface LayoutQuery_allDatoCmsSocialProfile_edges_node_icon_fluid {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface LayoutQuery_allDatoCmsSocialProfile_edges_node_icon {
  fluid: LayoutQuery_allDatoCmsSocialProfile_edges_node_icon_fluid | null;
}

export interface LayoutQuery_allDatoCmsSocialProfile_edges_node {
  profileType: string | null;
  url: string | null;
  icon: LayoutQuery_allDatoCmsSocialProfile_edges_node_icon | null;
}

export interface LayoutQuery_allDatoCmsSocialProfile_edges {
  node: LayoutQuery_allDatoCmsSocialProfile_edges_node;
}

export interface LayoutQuery_allDatoCmsSocialProfile {
  edges: LayoutQuery_allDatoCmsSocialProfile_edges[];
}

export interface LayoutQuery_sidebar_nodes_fixed {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  aspectRatio: number | null;
}

export interface LayoutQuery_sidebar_nodes {
  fixed: LayoutQuery_sidebar_nodes_fixed | null;
}

export interface LayoutQuery_sidebar {
  nodes: LayoutQuery_sidebar_nodes[];
}

export interface LayoutQuery_catImages_nodes_fixed {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  aspectRatio: number | null;
}

export interface LayoutQuery_catImages_nodes {
  fixed: LayoutQuery_catImages_nodes_fixed | null;
}

export interface LayoutQuery_catImages {
  nodes: LayoutQuery_catImages_nodes[];
}

export interface LayoutQuery_catIcon_fixed {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  aspectRatio: number | null;
}

export interface LayoutQuery_catIcon {
  fixed: LayoutQuery_catIcon_fixed | null;
}

export interface LayoutQuery {
  datoCmsSite: LayoutQuery_datoCmsSite | null;
  datoCmsHome: LayoutQuery_datoCmsHome | null;
  allDatoCmsSocialProfile: LayoutQuery_allDatoCmsSocialProfile;
  sidebar: LayoutQuery_sidebar;
  catImages: LayoutQuery_catImages;
  catIcon: LayoutQuery_catIcon | null;
}
