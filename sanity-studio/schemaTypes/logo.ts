export default {
  name: 'logo',
  type: 'document',
  title: "logo",
  fields: [
    {
      name: 'logoName',
      type: 'string',
      title: 'Logo',
    },
    {
      name: 'logo',
      title: 'logoImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
