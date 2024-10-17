
import { faGear, faHome, faCar, faChartSimple, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";



export const K = {
   Overview : [
    {
        id: 1,
        name: 'Available Slots',
        number: 100


    },

    {
        id: 2,
        name: 'Slots Booked',
        number: 50


    },

    {
        id: 3,
        name: 'Total Slots',
        number: 400


    },

    {
        id: 4,
        name: 'Revenue',
        number: "$400.00"


    },


   ],

  
   SidebarLinks : [
    {
        name: 'Overview',
        route: '',
        icon: faHome


    },

    {
        name: 'Statistics',
        route: '',
        icon: faChartSimple


    },

    {
        name: 'Parking Slots',
        route: '',
        icon: faCar


    },

    {
        name: 'Settings',
        route: 'settings',
        icon: faGear


    },

    {
        name: 'Logout',
        route: '',
        icon: faRightFromBracket


    },

    


   ],


   Charts : [
    {
        name: "Sales Overview",

    }
   ]
}