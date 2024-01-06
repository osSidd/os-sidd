import proer from '../assets/proer.png'
// import apify from '../assets/apify.png'
import falcone from '../assets/falcone.png'
import teerex from '../assets/teerex.png'
import portfolio from '../assets/portfolio.png'
import nintendo from '../assets/nintendo.png'

export default [
    {
        id:0,
        image:proer,
        title:'Proer Website UI',
        description:'Developed UI for Proer (Employee monitoring software) in wordpress using the elementor plugin, according to the given design.',
        timespan:"march '23 - april '23",
        associatedWith:'Aasa Technologies',
        techUsed:['wordpress','javascript', 'css'],
        btn:[{
            id:0,
            label:'live',
            href:'https://proer.io'
        }]
    },
    {
        id:1,
        image:nintendo,
        title:'Nintendo Product Page',
        description:"A landing page, a Frontend Practice level 3 project inspired from Nintendo's product page.",
        timespan:"January '24 - present",
        associatedWith:'Landing Page',
        techUsed:['react', 'tailwindCSS'],
        btn:[{
                id:0,
                label:'live',
                href:'https://nintendo-product-page.vercel.app/'
            },
            {
                id: 1,
                label: 'code',
                href: 'https://github.com/osSidd/Nintendo-Product-Page'
            }
        ]
    },
    {
        id:2,
        image:teerex,
        title:'TeeRex Store',
        description:'TeeRex Store is a Geektrust front-end coding challenge, which demonstrates a very basic e-commerce product listing page.',
        timespan:"november '23 - november '23",
        associatedWith:'Geektrust Coding Challenge',
        techUsed:['react','scss', 'webpack'],
        btn:[
            {
                id:0,
                label:'live',
                href:'https://tee-rex-store-liard.vercel.app/'
            },
            {  
                id:1,
                label:'code',
                href:'https://github.com/osSidd/teeRexStore'
            }
        ]
    },
    {
        id:3,
        image:falcone,
        title:'Finding Falcone',
        description:'Finding Falcone is a Geektrust front-end coding challenge, where a user needs to select 4 planets out of 6 and assign provided space vehicles to search for Queen Falcone. Upon selecting planets and assigning vehicles the user can view the result (a game of chance) provided by an api.',
        timespan:"november '23 - november '23",
        associatedWith:'Geektrust Coding Challenge',
        techUsed:['react','scss', 'typescript', 'webpack'],
        btn:[
            {
                id:0,
                label:'live',
                href:'https://finding-falcone-teal.vercel.app/'
            },
            {  
                id:1,
                label:'code',
                href:'https://github.com/osSidd/findingFalcone'
            }
        ]
    },
    // {
    //     id:0,
    //     image:proer,
    //     title:'Proer Website UI',
    //     description:'Developed UI for Proer (Employee monitoring software) in wordpress using the elementor plugin.',
    //     timespan:"march '23 - april '23",
    //     associatedWith:'Aasa Technologies',
    //     techUsed:['wordpress','javascript', 'css'],
    //     btn:{
    //         live:'https://proer.io'
    //     }
    // },
]