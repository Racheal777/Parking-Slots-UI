import { Settings, Home, Car, ChartArea, LogOut } from "lucide-react";
import {hockeyMask, home} from '@lucide/lab'

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
        icon: home


    },

    {
        name: 'Statistics',
        route: '',
        icon: home


    },

    {
        name: 'Parking Slots',
        route: '',
        icon: home


    },

    {
        name: 'Settings',
        route: 'settings',
        icon: hockeyMask


    },

    {
        name: 'Logout',
        route: '',
        icon: home


    },

    


   ],


   Charts : [
    {
        name: "Sales Overview",

    }
   ]
}