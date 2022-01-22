import React from "react";
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'


const NavBarItem = ({ title, props }) => (
    <li className={`mx-4 cursor-pointer ${props}`}>

        {title}

    </li>
);


const Navbar = () => {

    const [toggleMenue, setToggleMenu] = React.useState(false)

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

            <div className="flex relative">
                {toggleMenue
                    ?
                    < MdClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    :
                    < FiMenu fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                    
                    
                    }


                {toggleMenue && (

                    <ul fontSize={28} className="z=10 fixed top-0  -right-2 p-3 w-[70vw] h-screen shadow-2xl md-hidden list-none flex flex-col justify-start items-end rounded-none slider text-white animate-slide-in duration-750">
                        <li className="text-xl w-full my-2">< MdClose onClick={() => setToggleMenu(false)} /></li>
                        {["Market", "Wallets", "Tutorials", "Exchange"].map((item, index) => (
                            <NavBarItem key={item + index} title={item} />
                        ))}
                    </ul>

                )}


            </div>



        </nav>
    )

}

export default Navbar;