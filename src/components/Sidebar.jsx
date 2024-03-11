import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaShopify,
    FaCalendar
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {

     // State to manage the open/close state of the sidebar
    const[isOpen ,setIsOpen] = useState(false);

     // Function to toggle the sidebar's open/close state
    const toggle = () => setIsOpen (!isOpen);

    // Array containing menu items with their paths, names, and icons
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
          path:"/product",
          name:"Products Management",
          icon:<FaShoppingBag/>
        },
        {
            path:"/order",
            name:"Orders Management",
            icon:<FaShopify/>
        },
        {
          path:"/orderclendar",
          name:"Orders Calendar View",
          icon:<FaCalendar/>
      },
    ]
    return (
        <div className="container">
             {/* Sidebar container */}
           <div style={{width: isOpen ? "400px" : "50px"}} className="sidebar">

              {/* Top section containing logo and toggle button */}
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>

                 {/* Menu items */}
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        
                         {/* Icon for the menu item */}
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;