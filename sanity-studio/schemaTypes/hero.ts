export default {
    name: 'hero',
    type: 'document',
    title: "hero",
    fields: [
      {
        name: 'text1',
        type: 'string',
        title: 'Text1',
      },
      {
        name: 'text2',
        type: 'string',
        title: 'Text2',
      },
      {
        name: 'text3',
        type: 'string',
        title: 'Text3',
      },
      {
        name: 'buttonText',
        type: 'string',
        title: 'ButtonText',
      },
      {
        name: 'imageTitle',
        type: 'string',
        title: 'ImageTitle',
      },
      {
        name: 'heroImage',
        title: 'heroImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  