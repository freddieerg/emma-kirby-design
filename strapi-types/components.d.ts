import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCover extends Schema.Component {
  collectionName: 'components_components_covers';
  info: {
    displayName: 'Cover';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.RichText;
    coverImage: Attribute.Media & Attribute.Required;
    flipped: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsQuote extends Schema.Component {
  collectionName: 'components_components_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    quote: Attribute.RichText & Attribute.Required;
    author: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.cover': ComponentsCover;
      'components.quote': ComponentsQuote;
    }
  }
}
