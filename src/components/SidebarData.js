import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as RiIcons from 'react-icons/ri';
import * as VscIcons from 'react-icons/vsc';
import * as CgIcons from 'react-icons/cg';
 
export const SidebarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <RiIcons.RiDashboardLine />,
        },
    {
        title: 'Products',
        path: '/products',
        icon: <FiIcons.FiShoppingBag />,
        iconClosed: <RiIcons.RiArrowDownCircleLine />,
        iconOpened: <RiIcons.RiArrowUpCircleLine />,
        subNav: [
    {
        title:'All Products',
        path:'products/allproducts',
    },

    {
        title:'Categories',
        path:'products/categories',
    },
    {
        title:'Inventory',
        path:'products/inventory',
    },
    {
        title:'Discounts',
        path:'products/discounts',
    },
    {
        title:'Taxes',
        path:'products/taxes',
    },
]
},
    {
        title: 'Employees',
        path: '/employees',
        icon: <AiIcons.AiOutlineIdcard />,
        iconClosed: <RiIcons.RiArrowDownCircleLine />,
        iconOpened: <RiIcons.RiArrowUpCircleLine />,

subNav:[{
    title:'Employee List',
    path:'/employees/employeelist',

},
{
    title:'Access Rights',
    path:'/employees/access',

},


]
    },
    {
        title: 'Customers',
        path: '/customers',
        icon: <HiIcons.HiOutlineUsers />,
        iconClosed: <RiIcons.RiArrowDownCircleLine />,
        iconOpened: <RiIcons.RiArrowUpCircleLine />,
        subNav: [
            {
                title:'All Products',
                path:'products/allproduct',
            },
        
            {
                title:'Categories',
                path:'products/categories',
            },
            {
                title:'Inventory',
                path:'products/inventory',
            },
            {
                title:'Discounts',
                path:'products/discounts',
            },
            {
                title:'Taxes',
                path:'products/taxes',
            },
        ]

    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <VscIcons.VscGraph />,
        iconClosed: <RiIcons.RiArrowDownCircleLine />,
        iconOpened: <RiIcons.RiArrowUpCircleLine />,
        subNav: [
            {
                title:'All Products',
                path:'products/allproduct',
            },
        
            {
                title:'Categories',
                path:'products/categories',
            },
            {
                title:'Inventory',
                path:'products/inventory',
            },
            {
                title:'Discounts',
                path:'products/discounts',
            },
            {
                title:'Taxes',
                path:'products/taxes',
            },
        ]

    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiOutlineSetting />,



    },

]