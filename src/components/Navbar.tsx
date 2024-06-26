import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import {   useEffect, useState } from "react";
import MobList from "./MobList";
import ThemeChanger from "./ThemeChanger";
import { useCart } from "../context/Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [looking, setlooking] = useState("");
    
    const {getSearchedProd, totalQuantity, getOpenPage,themeChange, theme, toggleList, changeSearchedProd, changeSearchState, getSearchState} = useCart();
    
    const closeTheme = () => { 
        if (theme == 1) { 
            themeChange();
        }
    }

    const toggleSearch = () => { 
        changeSearchState();
    }
    
    
    const goToTest = () => { 
        if (window.location.pathname != "/" ) { 
            setTimeout(() => { 
                document.getElementById("test")?.scrollIntoView();
            }, 750)
        }
        else { 
            document.getElementById("test")?.scrollIntoView();
        }
        
    }


    const handleSearch = (event:any) =>  { 
        setlooking(event.target.value)
        changeSearchedProd(event.target.value);
    }
    const handleCloseSearch = () =>  { 
        toggleSearch();
        setlooking("");
        changeSearchedProd("");
    }

    // if we are removing the search by keyboard
    // this won't work except if the searchedProd has been changed  
    useEffect(() => { 
        if (getSearchedProd() == "") { 
            if (getSearchState() == 1)
                changeSearchState();
        }
    }, [getSearchedProd()]);

    return ( 
        // 
        <div  className={`${getSearchState() != 1 ? "grid grid-cols-[55%_1fr] sm:grid-cols-[70%_1fr] md:grid-cols-[80%_1fr]  w-full" : "grid  grid-cols-1 sm:grid-cols-[70%_1fr] md:grid-cols-[80%_1fr]  w-full"} `}>

            <div onClick={closeTheme} className=" relative overflow-hidden flex justify-between items-center bg-sec-color ">
                <div className="flex gap-8 max-sm:h-[72px]  items-center sm:justify-around lg:justify-between min-[1285px]:pr-24    py-5 px-5 sm:px-12 lg:px-24 xl:px-24  w-full">
                    <FontAwesomeIcon onClick={() => toggleList()} icon={faBarsStaggered} size="xl" className=" cursor-pointer trans hover:opacity-75 sm:hidden" />
                    <Link to="/" >
                        <h1 className=" text-xl font-bold sm:text-2xl pointer-events-none">Livin.</h1>
                    </Link>
                    
                    <ul className="max-sm:hidden flex gap-9 md:gap-14 900:gap-14 lg:gap-14 xl:gap-20">
                        
                        <li className={`flex gap-2 trans  hover:text-black items-center justify-center cursor-pointer`}>
                        <Link to="/" >
                            <span className={`${getOpenPage() === "home" ? "text-black" : " text-dark-gray"}`}>
                                Home
                            </span>
                        </Link>
                        </li>

                        <Link to="/AllProducts" >
                            <li className={`flex gap-2  trans  items-center justify-center cursor-pointer`}>
                                <span className={`${getOpenPage() == "product" ? "text-black" : " text-dark-gray"} hover:text-black trans`}>
                                    Products
                                </span>
                            
                            </li>
                        </Link>

                        <Link to="/InCart">
                            <li className={`flex text-dark-gray  trans items-center justify-center cursor-pointer`}>
                                <span className={`${getOpenPage() == "cart" ? "text-black" : "text-dark-gray"} hover:text-black trans`}>
                                    Cart
                                </span>
                            </li>
                        </Link>
                        
                        <Link to="/" onClick={goToTest}>
                            <li  className={`flex  text-dark-gray gap-2 trans hover:text-black items-center justify-center cursor-pointer`}>
                                <span className=" ">
                                    About
                                </span>
                            </li>
                        </Link>
                        
                    </ul>
                </div>

                {/* search 1  large screens*/}
                <Link  to="/AllProducts"  className=" max-lg:hidden cursor-text  bg-main-white p-2 flex items-center  gap-2 max-[1135px]:-ml-14">
                    <FontAwesomeIcon  icon={faMagnifyingGlass}  className="  trans hover:opacity-75 text-sm" />
                    <div  className=" cursor-text" >
                        <input  value={looking} maxLength={20}   onChange={handleSearch} type="text" name="" id="search" className="bg-main-white h-full outline-none   text-sm w-56" placeholder="What are you searching for ?" />
                    </div>
                </Link>

                {/* search 2 small screens   */}
                {getSearchState() == 1 && <div className="bg-main-white shadow-md lg:hidden absolute h-[72px]  w-screen  top-0  left-0 flex justify-around items-center">
                    <input type="text" value={looking} maxLength={20}  autoFocus onChange={handleSearch} className=" w-2/3   outline-none" placeholder="What are you searching for ?" />
                    <FontAwesomeIcon onClick={() => handleCloseSearch()} icon={faXmark} size="xl" className="mr-2  z-50 cursor-pointer trans hover:opacity-75" />
                </div>}

            </div>

            { <div className="max-lg:hidden flex gap-8 justify-around items-center py-6  bg-main-white  w-1/2 mx-auto relative">
                <FontAwesomeIcon onClick={() => themeChange()} icon={faPaintRoller} size="lg" className={theme == 1 ?" cursor-pointer text-main-color scale-[150%] rotate-180  trans hover:opacity-50" : " cursor-pointer text-main-color trans  hover:opacity-50" } />
                <FontAwesomeIcon onClick={() => toggleSearch()} icon={faMagnifyingGlass} size="lg" className=" lg:hidden cursor-pointer trans hover:opacity-75" />
                <Link to="/InCart" >
                    <div className=" relative h-fit w-fit cursor-pointer trans hover:opacity-75">
                            <FontAwesomeIcon icon={faCartShopping} size="lg" className={` ${getOpenPage() == "cart" ? "text-main-color" : "text-dark-gray"} `} />
                        {totalQuantity > 0 && <span className={` absolute top-0 -translate-y-1/2 -right-3    text-white flex items-center justify-center text-xs w-6 h-6 rounded-full ${getOpenPage() == "cart" ? "bg-dark-gray" : "bg-main-color"} font-bold`}>{totalQuantity}</span>}
                    </div>
                </Link>
                {/* <FontAwesomeIcon icon={faHeart} size="lg" className=" text-dark-gray trans hover:opacity-75 cursor-pointer" /> */}
                {<ThemeChanger pos={theme} />}
                </div>}


                {getSearchState() != 1 && 
                <div className="lg:hidden flex gap-5 sm:gap-8 justify-around items-center py-6  bg-main-white w-1/2 mx-auto relative">
                    <FontAwesomeIcon onClick={() => themeChange()} icon={faPaintRoller} size="lg" className={theme == 1 ?" cursor-pointer text-main-color scale-[150%] rotate-180  trans hover:opacity-50" : " cursor-pointer text-main-color trans  hover:opacity-50" } />
                    <Link to="/AllProducts">
                        <FontAwesomeIcon onClick={() => toggleSearch()} icon={faMagnifyingGlass} size="lg" className=" lg:hidden cursor-pointer trans hover:opacity-75" />
                    </Link>
                    <Link to="/InCart" >
                        <div className=" relative h-fit w-fit cursor-pointer trans hover:opacity-75">
                                <FontAwesomeIcon icon={faCartShopping} size="lg" className={` ${getOpenPage() == "cart" ? "text-main-color" : "text-dark-gray"} `} />
                            {totalQuantity > 0 && <span className={` absolute top-0 -translate-y-1/2 -right-3    text-white flex items-center justify-center text-xs w-6 h-6 rounded-full ${getOpenPage() == "cart" ? "bg-dark-gray" : "bg-main-color"} font-bold`}>{totalQuantity}</span>}
                        </div>
                    </Link>
                    {/* <FontAwesomeIcon icon={faHeart} size="lg" className=" text-dark-gray trans hover:opacity-75 cursor-pointer" /> */}
                    {<ThemeChanger pos={theme} />}
                </div>}
                
                <MobList   />
        </div>
    )

}

export default Navbar