export default {
    name: 'testimonials',
    type: 'document',
    title: "testimonials",
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
        name : "reviews",
        title: "Reviews",
        type: 'array',
        of : [{type: 'reference', to: { type: "review"}}]
      }
    ],
    
  }
  