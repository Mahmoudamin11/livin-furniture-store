import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

import human1 from '../assets/human1.png';
import human2 from '../assets/human2.png';
import human3 from '../assets/human3.png';
import human4 from '../assets/human4.png';
import { motion } from "framer-motion";

const Testmonials = () => {
    const [toggle, settoggle] = useState(1);
    const [toggleLG, settoggleLG] = useState(true);
    const tests = [
        {head: 'Fast service.', txt:'At the time, i purchased some custom-made sets of chairs and tables for my melbourne office. It only took around 2.5 months, and my staff loved it. In addition, i receive appealing discount offers.', name: 'Albert Flores', role:'Husband', img: human1},
        {head: 'Excellent quality.', txt:"Livin has a great selection and makes it easy to purchase. We worked with Lorri and she was very knowledgeable and guided us to find the perfect chairs we were shopping for. Their price was very fair and so far the experience was great.", name: 'Mark Stones', role:'Project Manager', img: human2},
        {head: 'Really perfect price.', txt:"We shopped at Livin Home Furnishings on SW Bangy Rd in Lake Oswego. They had many choices for furniture and we ordered a table and chairs set. Ryan Mack was great to work with. I would definitely recommend shopping at Livin.", name: 'Steven Cramer', role:'Department owner', img: human3},
        {head: 'Polite workers.', txt:"Excellent experience: Quality furniture at reasonable prices. Range of styles to suit different tastes. Considerate, informative sales people who listen and get what you're looking for. Likely will be retuning soon.", name: 'Luis Sandro', role:'Hotel owner', img: human4}
    ];

    const toggler = (n:number) => { 
            settoggle(n);
    };
    const togglerLG = () => { 
        if (toggleLG == true) { 
            settoggleLG(false);
        }
        else 
            settoggleLG(true);

    };

  return ( 
    <div id="test" className="mob-p space-up flex flex-col gap-10  items-center max-lg:justify-center overflow-hidden relative"> 
        <div className=" lg:flex lg:items-center  lg:justify-between w-full">
            <motion.h3 
            initial={{opacity:0, x:-300}}
            transition={{duration:0.4, opacity:{duration:0.5}}}
            whileInView={{opacity:1, x:0}}
            viewport={{once: true}}
            className="font-bold text-[44px] leading-[50px] max-lg:text-center">What our <br className=" max-lg:hidden" /> <span className="specialTitle">customers</span> are saying</motion.h3>
            
            {<motion.div 
            className="flex gap-5 max-lg:hidden">
                <motion.div  
                onClick={() => togglerLG()} className={`flex trans ${toggleLG == false ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" } hover:opacity-85 rotate-180 items-center justify-center text-white w-10 h-10 p-2 rounded-full cursor-pointer `}>
                    <FontAwesomeIcon  icon={faAngleRight} size='lg' />
                </motion.div>

                <motion.div 
                onClick={() => togglerLG()} className={`rightAngle trans hover:opacity-85 ${toggleLG == true ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" }`}>
                    <FontAwesomeIcon  icon={faAngleRight} size='lg' />
                </motion.div>
            </motion.div>}
        </div>
        
        
        <motion.div 
        
        className="flex relative overflow-hidden w-full max-[610px]:hidden">
            <motion.div 
            initial={{opacity:0}}
            // transition={{opacity:{duration:0.5}}}    
            whileInView={{opacity:1}}
            viewport={{once: true}}
            className={`  h-[326px]  grid grid-cols-2 gap-5 ${toggleLG == true ? "translate-x-0   relative transition-transform transform duration-500" :  "-translate-x-[200%]  absolute top-0  transition-transform transform duration-500"} place-items-center place-content-center `}>
                {
                    tests.map((test, index) => (
                        <div key={test.head} className={`trans bg-sec-color flex flex-col gap-4 justify-center   p-4 h-[340px] ${index > 1 ? "hidden" : "block"}`}>
                            <div className="flex justify-start">
                                <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className="ml-3 opacity-65" />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h3 className="font-bold text-2xl text-center m-0 p-0">{test.head}</h3>
                                <p className="text-sm text-dark-gray text-center">{test.txt}</p>
                                <div className="flex gap-3 items-center">
                                    <img src={test.img} alt="" className="rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-sm ">{test.name}</span>
                                        <span className="text-xs font-bold text-dark-gray">{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </motion.div>

            <motion.div 
            className={` h-[326px]  grid grid-cols-2 gap-5 ${toggleLG == true ? " translate-x-[200%] absolute top-0     transition-transform transform duration-500" :  "translate-x-0  relative transition-transform transform duration-500"} place-items-center place-content-center `}>
                {
                    tests.map((test, index) => (
                        <div key={test.head} className={`trans bg-sec-color flex flex-col gap-4 justify-center w-full   p-4 h-[340px] ${index > 1 ? "block" : "hidden"}`}>
                            <div className="flex justify-start">
                                <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className="ml-3 opacity-65" />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h3 className="font-bold text-2xl text-center m-0 p-0">{test.head}</h3>
                                <p className="text-sm text-dark-gray text-center">{test.txt}</p>
                                <div className="flex gap-3 items-center">
                                    <img src={test.img} alt="" className="rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-sm ">{test.name}</span>
                                        <span className="text-xs font-bold text-dark-gray">{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </motion.div>


        <motion.div 
        className="flex relative overflow-hidden w-full min-[610px]:hidden">
            <div className={`  h-[326px]   gap-5 ${toggle == 1 ? "translate-x-0   relative " :  "-translate-x-[200%]  absolute top-0 "} transition-transform transform duration-500 place-items-center place-content-center `}>
                {
                    tests.map((test, index) => (
                        <div key={test.head} className={`trans bg-sec-color flex flex-col gap-4 justify-center   p-4 h-[340px] ${index > 0 ? "hidden" : "block"}`}>
                            <div className="flex justify-start">
                                <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className="ml-3 opacity-65" />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h3 className="font-bold text-2xl text-center m-0 p-0">{test.head}</h3>
                                <p className="text-sm text-dark-gray text-center">{test.txt}</p>
                                <div className="flex gap-3 items-center">
                                    <img src={test.img} alt="" className="rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-sm ">{test.name}</span>
                                        <span className="text-xs font-bold text-dark-gray">{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={` h-[326px]   gap-5 ${toggle < 2 ? " translate-x-[200%] absolute top-0" : toggle > 2 ? " translate-x-[-200%] absolute top-0" :  "translate-x-0  relative "} transition-transform transform duration-500 place-items-center place-content-center `}>
                {
                    tests.map((test, index) => (
                        <div key={test.head} className={`trans bg-sec-color flex flex-col gap-4 justify-center w-full   p-4 h-[340px] ${index == 1 ? "block" : "hidden"}`}>
                            <div className="flex justify-start">
                                <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className="ml-3 opacity-65" />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h3 className="font-bold text-2xl text-center m-0 p-0">{test.head}</h3>
                                <p className="text-sm text-dark-gray text-center">{test.txt}</p>
                                <div className="flex gap-3 items-center">
                                    <img src={test.img} alt="" className="rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-sm ">{test.name}</span>
                                        <span className="text-xs font-bold text-dark-gray">{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={`  h-[326px]   gap-5 ${toggle == 3 ? "translate-x-0   relative" : toggle < 3 ? " translate-x-[200%] absolute" : "-translate-x-[200%]  absolute top-0"} transition-transform transform duration-500 place-items-center place-content-center `}>
                {
                    tests.map((test, index) => (
                        // className={(((toggleLG ==1) && (index == 0|| index == 2)) || ((toggleLG ==2) && (index == 1|| index == 3))) ? " trans bg-sec-color flex flex-col gap-4 justify-center opacity-100  p-4 h-[340px]" 
                        // : "trans hidden absolute bg-sec-color  flex-col gap-4 justify-center  p-4 h-[340px] "}
                        <div key={test.head} className={`trans bg-sec-color flex flex-col gap-4 justify-center   p-4 h-[340px] ${index == 2  ? "block" : "hidden"}`}>
                            <div className="flex justify-start">
                                <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className="ml-3 opacity-65" />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h3 className="font-bold text-2xl text-center m-0 p-0">{test.head}</h3>
                                <p className="text-sm text-dark-gray text-center">{test.txt}</p>
                                <div className="flex gap-3 items-center">
                                    <img src={test.img} alt="" className="rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-sm ">{test.name}</span>
                                        <span className="text-xs font-bold text-dark-gray">{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={` h-[326px]   gap-5 ${toggle < 4 ? " translate-x-[200%] absolute top-0 " :  "translate-x-0  relative"} transition-transform transform duration-500 place-items-center place-content-center `}>
                {
                    tests.map((test, index) => (
                        // className={(((toggleLG ==1) && (index == 0|| index == 2)) || ((toggleLG ==2) && (index == 1|| index == 3))) ? " trans bg-sec-color flex flex-col gap-4 justify-center opacity-100  p-4 h-[340px]" 
                        // : "trans hidden absolute bg-sec-color  flex-col gap-4 justify-center  p-4 h-[340px] "}
                        <div key={test.head} className={`trans bg-sec-color flex flex-col gap-4 justify-center w-full   p-4 h-[340px] ${index == 3 ? "block" : "hidden"}`}>
                            <div className="flex justify-start">
                                <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className="ml-3 opacity-65" />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h3 className="font-bold text-2xl text-center m-0 p-0">{test.head}</h3>
                                <p className="text-sm text-dark-gray text-center">{test.txt}</p>
                                <div className="flex gap-3 items-center">
                                    <img src={test.img} alt="" className="rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-sm ">{test.name}</span>
                                        <span className="text-xs font-bold text-dark-gray">{test.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </motion.div>

        {/* arrows */}
        <motion.div 
        className="flex gap-5 min-[610px]:hidden">
            <div  onClick={() => toggler(toggle-1)} className={`flex trans hover:opacity-85 rotate-180 items-center ${toggle > 1?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" } justify-center text-white w-10 h-10 p-2 rounded-full cursor-pointer trans`}>
              <FontAwesomeIcon  icon={faAngleRight} size='lg' />
            </div>
            <div onClick={() => toggler(toggle+1)} className={`rightAngle trans hover:opacity-85 ${toggle < 4  ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" }`}>
              <FontAwesomeIcon  icon={faAngleRight} size='lg' />
            </div>
        </motion.div>

        <motion.div 
        className="flex gap-5 max-[610px]:hidden lg:hidden">
            <div  onClick={() => togglerLG()} className={`flex trans hover:opacity-85 rotate-180 items-center justify-center text-white  ${toggleLG == false ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" } w-10 h-10 p-2 rounded-full cursor-pointer trans`}>
              <FontAwesomeIcon  icon={faAngleRight} size='lg' />
            </div>
            <div onClick={() => togglerLG()} className={`rightAngle trans hover:opacity-85  ${toggleLG == true ?  " bg-main-color cursor-pointer" : " bg-dark-gray pointer-events-none" }`}>
              <FontAwesomeIcon  icon={faAngleRight} size='lg' />
            </div>
        </motion.div>
    </div>
  )
}

export default Testmonials;