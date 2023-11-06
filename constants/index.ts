import { facebook, instagram, twitter } from "@/public/icons";
import { customer1, customer2 } from "@/public/images";


// star ratings need to be whole numbers like 5 not 4.5
export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 5, // whole number
        feedback: " Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 5, // whole number
        feedback: "Excellent! I'll definitely be a returning customer!"
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
        title: "Contáctanos al",
        links: [
            // { name: "contact@teresitashows.com", link: "mailto:customer@nike.com" },
            { name: "469-328-2513", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "https://www.facebook.com/teresitapayasita" },
    // { src: twitter, alt: "twitter logo", link: "https://twitter.com/teresitashows" },
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/teresitashow/" },
];