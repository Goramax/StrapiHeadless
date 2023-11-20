import type { Schema, Attribute } from '@strapi/strapi';

export interface FrontSlider extends Schema.Component {
  collectionName: 'components_front_sliders';
  info: {
    displayName: 'Slider';
    icon: 'landscape';
  };
  attributes: {
    images: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'front.slider': FrontSlider;
    }
  }
}
