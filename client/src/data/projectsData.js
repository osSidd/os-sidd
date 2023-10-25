import proer from '../assets/proer.png'
import apify from '../assets/apify.png'
import portfolio from '../assets/portfolio.png'

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
        image:apify,
        title:'APIfy',
        description:'A PWA made out of interest of API integration. Combines feeds for news, weather, sports, finance, social & entertainment, thus eliminates need for multiple apps.',
        timespan:"september '23 - present",
        associatedWith:'Personal project',
        techUsed:['react','d3', 'mui'],
        btn:[
            // {
            //     id:0,
            //     label:'live',
            //     href:'#'
            // },
            {  
                id:0,
                label:'code',
                href:'https://github.com/osSidd/Apify'
            }
        ]
    },
    {
        id:2,
        image:portfolio,
        title:'Portfolio',
        description:"I required a Portfolio to demonstrate my web development projects and skills. It's simple but gets the job done.",
        timespan:"october '23 - october '23",
        associatedWith:'portfolio',
        techUsed:['react', 'mui', 'nodeJs'],
        btn:[{
            id:0,
            label:'live',
            href:'https://portfolio-green-two-40.vercel.app/'
        }]
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