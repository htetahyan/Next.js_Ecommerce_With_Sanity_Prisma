

import  sanityClient  from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export const client=sanityClient({
    projectId:"hc054n9u",
    dataset: "production",
    apiVersion:"2022-11-17",
    useCdn:true,
    token:'sk1teqSsJ1me5Yi1NwRETgQWdzlwh0qKKBStqKjnffX5Pr5wpyEVdCgkg1gSuKdeqQySDsVAYCRzGKJKyxGnzOlw4LGyNOeUGVPEADXqMVm5RtdcReblfsE684dmxZPj4YFPgAYG4WiOgPYOOlv4Afzh80lShD4TAqUPyxVYdgVOEBscJ2te'
})
const  builder=imageUrlBuilder(client);
export const urlFor=(source)=> builder.image(source);