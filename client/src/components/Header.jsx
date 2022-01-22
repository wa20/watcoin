import React from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const styles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Header = () => {

    const connectToWallet = () => {

    }


    return (
         <div className="w-full flex justify-center items-center">

             <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 w-full ">
                 <div className="flex flex-1 justify-start items-start flex-col md:mr-10 w-4/12">

                     <h1 className="text-3xl sm:text-5xl text-white py-1 headerTitle">
                        Watcoin
                     </h1>
                     <p className="text-left mt-5 text-white font-bold  md:w-9/12 w-11/12 text-base"> 
                         Explore crypto, buy and sell currencies 
                     </p>
                     <button type="button" onClick={connectToWallet} className=" w-full flex flex-row justify-center items-center my-4 bg-[#5959f8] p-2 rounded-full cursor-pointer hover:bg-[#8282f5]">
                        <p className="text-white text-base font-semibold">Connect Wallet</p> 
                     </button>

                     <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 ">
                         <div className={`rounded-tl-2xl ${styles}`}> Security </div>
                         <div className={` ${styles}`}> Etherium </div>
                         <div className={`rounded-tr-2xl ${styles}`}> web 3.0</div>
                         <div className={`rounded-bl-2xl ${styles}`}> blockchain </div>
                         <div className={` ${styles}`}> blockchain </div>
                         <div className={`rounded-br-2xl ${styles}`}> blockchain </div>
                     </div>
                     
                 </div>
                
             </div>

             <div className="">

             </div>
             
        </div>
    )
    
    } 
    
    export default Header;