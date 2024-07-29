export default {
    name: 'metadata',
    title: 'Metadata',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'keywords',
            type: 'array',
            title: 'Keywords',
            of: [{ type: 'string' }]
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author'
        }
    ]
}