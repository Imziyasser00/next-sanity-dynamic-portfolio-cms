export default {
    name: "review",
    title : "Review",
    type : "document",
    fields : [
        {
            name: "stars",
            title: "Stars",
            type: "number",
        },
        {
            name: "reviewText",
            title: "Review Text",
            type: "string",
        },
        {
            name: "clientName",
            title: "Client Name",
            type : "string",
        },
        {
            name: "clientCompany",
            title: "Client Company",
            type : "string",
        },
        {
            name: "clientImage",
            title: "Client image",
            type : "image",
        }
    ]
}