import { GiTennisRacket } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { BsChatLeftTextFill } from "react-icons/bs";
import { PiTrafficConeBold } from "react-icons/pi";

export const SidebarData = [
    {
        title: 'General',
        icon: <BsChatLeftTextFill />,
        link:'/forum/'
    },
    {
        title:'Rackets',
        icon:<GiTennisRacket />,
        link:'/forum/rackets/'
    },
    {
        title:'Shoes',
        icon:<GiConverseShoe />,
        link:'/forum/shoes/'
    },
    {
        title:'Drills',
        icon: <PiTrafficConeBold />,
        link:'/forum/drills/'
    }
]