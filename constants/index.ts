import { facebook, instagram, twitter } from "@/public/icons";
import { customer1, customer2 } from "@/public/images";

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Otros Servicios",
        links: [
            { name: "Fiestas de Cumpleaños", link: "/" },
            { name: "Despedidas de Solteros", link: "/" },
            { name: "Baby Shower", link: "/" },
            { name: "Revelación de género", link: "/" },
            { name: "y mucho más!", link: "/" },
            
        ],
    },
    
    {
        title: "Get in touch",
        links: [
            { name: "contact@teresitashows.com", link: "mailto:customer@nike.com" },
            { name: "469-328-2513", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];