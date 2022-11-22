export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options:{
                source:'midText',maxLength:85,
            }
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
      
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },
    
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {
            name: 'embeded',
            title: 'embededTimeCode',
            type: 'string',
        },
    ],
  };