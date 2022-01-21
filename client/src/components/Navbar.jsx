import React from "react";
// import { HiMenueALt4 } from 'react-icons/hi'
// import {AiOutlineClose } from 'react-icons/ai'


const NavBarItem = ({ title, props }) => (
    <li className={`mx-4 cursor-pointer ${props}`}>
        
        {title}
    
    </li>
  );


const Navbar = () => {

    return (
         <nav className="w-full flex md:justify-center justify-between items-center">

             <div className='md:flex-[0.5] flex-initial justify-center items-center text-red p-0.5 logoFont'>
                    watcoin
                    
             </div>
             <div>

             </div>
             <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial text-lg p-4">

                {["Market", "Wallets", "Tutorials", "Exchange"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}

                <li className=" rounded-full font-bold bg-[#5959f8] py-1 px-7 cursor-pointer hover:bg-[#7a7af5]">
                    Login
                </li>
                 
             </ul>

            

         </nav>
    )
    
    } 
    
    export default Navbar;