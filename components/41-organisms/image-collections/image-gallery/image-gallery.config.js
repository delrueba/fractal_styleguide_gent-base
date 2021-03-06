'use strict';

const imageList = [];
for (let i = 6; i--;) {
  imageList.push({
    src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
    alt: 'placeholder image alternative text',
    caption: 'image caption'
  });
}

module.exports = {
  title: 'Image gallery',
  status: 'ready',
  name: 'Image gallery',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.label || item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'multiple',
      preview: '@preview',
      hidden: true
    },
    {
      name: 'default',
      label: 'Single',
      preview: '@preview',
      context: imageList[0]
    },
    {
      name: 'double',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: imageList.slice(-2)
      }
    },
    {
      name: 'triple',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: imageList.slice(-3)
      }
    },
    {
      name: 'quadruple',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: imageList.slice(-4)
      }
    },
    {
      name: 'quintuple',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: imageList.slice(-5)
      }
    },
    {
      name: 'quintuple et plus',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: imageList
      }
    },
    {
      name: 'default-alternative',
      label: 'Single (alternative)',
      preview: '@preview',
      context: {
        src: imageList[0].src,
        caption: imageList[0].caption,
        alt: imageList[0].alt,
        type: 'secondary'
      }
    },
    {
      name: 'double-alternative',
      label: 'Double (alternative)',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: imageList.slice(-2),
        type: 'secondary'
      }
    },
    {
      name: 'triple-alternative',
      label: 'Triple (alternative)',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: imageList.slice(-3),
        type: 'secondary'
      }
    },
    {
      name: 'quadruple-alternative',
      label: 'Quadruple (alternative)',
      view: 'image-gallery--multiple',
      preview: '@preview',
      context: {
        items: imageList.slice(-4),
        type: 'secondary'
      }
    }
  ]
};
