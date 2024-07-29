export default {
    name: 'about',
    type: 'document',
    title: "about",
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
        name: 'aboutBio',
        type: 'string',
        title: 'Bio',
      },
      {
        name: 'imageTitle',
        type: 'string',
        title: 'ImageTitle',
      },
      {
        name: 'aboutImage',
        title: 'aboutImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  