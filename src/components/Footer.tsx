import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
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
  return (
    <motion.div 
    initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
    className='mob-p space-up '>
        <div className='py-16 border-t-[1px] border-solid border-dark-gray flex flex-col gap-10'>
            <div className="hidden 950:flex 950:justify-between">
                <div className='flex flex-col gap-4 950:w-1/3'>
                    <div className="flex flex-col gap-1">
                        <h3 className='font-bold text-3xl w-fit'>Livin.</h3>
                        <p className='text-main-black opacity-75 '>Worldwide furniture store since 2020. <br />We sell over +1000 branded products on our websites.</p>
                
                    </div>
                    <div className="flex flex-col gap-2 w-fit">
                        <div className='flex gap-2'>
                            <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-main-color mt-[1px]" />
                            <p className='text-dark-gray '>Cairo, Egypt.</p>
                        </div>
                        <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faPhone} size="lg" className="text-main-color mt-[1px]" />
                            <p className='text-dark-gray '>+20 1228050484</p>
                        </div>
                        <a className='text-dark-gray w-fit h-fit flex gap-2  cursor-pointer trans hover:opacity-85' target='_blank' href="https://www.linkedin.com/in/mahmoud-amin-15023025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" className="  text-main-color mt-[1px]" />
                            <div className="underline">My LinkedIn Profile</div>
                        </a>
                    </div>
                </div>

                
                    
                    <div className=" flex-col gap-4 hidden 950:flex">
                        <h3 className="font-bold text-2xl">Menu</h3>
                        <ul className="flex flex-col gap-2 ">
                            <Link to="/AllProducts">
                                <li className="text-dark-gray  hover:text-main-black hover:text-opacity-70 cursor-pointer trans hover:opacity-85">Products</li>
                            </Link>
                            <li onClick={goToTest} className="text-dark-gray  hover:text-main-black hover:text-opacity-70 cursor-pointer trans hover:opacity-85">About Us</li>
                            <li className="text-dark-gray  hover:text-main-black hover:text-opacity-70 cursor-pointer trans hover:opacity-85">Support</li>
                            <li className="text-dark-gray  hover:text-main-black hover:text-opacity-70 cursor-pointer trans hover:opacity-85">Terms & Policy</li>
                        </ul>
                    </div>

                    <div className=" flex-col gap-4 hidden 950:flex">
                        <h3 className="font-bold text-2xl">Account</h3>
                        <ul className="flex flex-col gap-2 ">
                            <Link to="/InCart">
                                <li className="text-dark-gray  hover:text-main-black hover:text-opacity-70 cursor-pointer trans hover:opacity-85">My Account</li>
                            </Link>
                            <Link to="/InCart">
                                <li className="text-dark-gray  hover:text-main-black hover:text-opacity-70 cursor-pointer trans hover:opacity-85">Checkout</li>
                            </Link>
                            <Link to="/InCart">
                                <li className="text-dark-gray  hover:text-main-black hover:text-opacity-70 cursor-pointer trans hover:opacity-85">My cart</li>
                            </Link>
                            <li className="text-dark-gray  hover:text-main-black hover:text-opacity-70 cursor-pointer trans hover:opacity-85">My catalog</li>
                        </ul>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold text-2xl">Stay Updated</h2>
                            <div className="flex gap-1 h-10 ">
                                <input type="text" className=" bg-light-gray border-[1px] border-solid border-dark-gray  h-full outline-none trans w-2/3 750:w-full  pl-2" placeholder="Enter your email" />
                                <span className="h-full flex items-center  w-10 750:w-12 justify-center  bg-main-color text-main-white trans cursor-pointer hover:opacity-85">
                                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold text-2xl">Stay Connected</h2>
                            <ul className="flex gap-4 items-center">
                                <a href="https://github.com/Mahmoudamin11" target="_blank" className="text-main-color trans hover:opacity-85 text-xl"><FontAwesomeIcon icon={faGithub} size="xl" /></a>
                                <a target='_blank' href="https://www.linkedin.com/in/mahmoud-amin-15023025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-main-color trans hover:opacity-85 text-xl"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                                <span className=" text-dark-gray opacity-60 pointer-events-none flex items-center">&copy;Mahmoud</span>
                            </ul>
                        </div>
                    </div>
                
            </div>

            <div className="flex 950:hidden flex-col gap-10 500:gap-12 600:gap-24 800:gap-36 500:flex-row">
                <div className="flex gap-16 500:gap-12 600:gap-24 800:gap-36">
                    <div className="flex flex-col gap-4 ">
                        <h3 className="font-bold text-2xl">Menu</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="text-dark-gray hover:text-main-black max-md:text-sm hover:text-opacity-70 cursor-pointer trans hover:opacity-85">Products</li>
                            <li className="text-dark-gray hover:text-main-black max-md:text-sm hover:text-opacity-70 cursor-pointer trans hover:opacity-85">About Us</li>
                            <li className="text-dark-gray hover:text-main-black max-md:text-sm hover:text-opacity-70 cursor-pointer trans hover:opacity-85">Support</li>
                            <li className="text-dark-gray hover:text-main-black max-md:text-sm hover:text-opacity-70 cursor-pointer trans hover:opacity-85">Terms & Policy</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-2xl">Account</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="text-dark-gray hover:text-main-black max-md:text-sm hover:text-opacity-70 cursor-pointer trans hover:opacity-85">My Account</li>
                            <li className="text-dark-gray hover:text-main-black max-md:text-sm hover:text-opacity-70 cursor-pointer trans hover:opacity-85">Checkout</li>
                            <li className="text-dark-gray hover:text-main-black max-md:text-sm hover:text-opacity-70 cursor-pointer trans hover:opacity-85">My cart</li>
                            <li className="text-dark-gray hover:text-main-black max-md:text-sm hover:text-opacity-70 cursor-pointer trans hover:opacity-85">My catalog</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-2xl">Stay Updated</h2>
                        <div className="flex gap-1 h-10 ">
                            <input type="text" className=" bg-light-gray border-[1px] border-solid border-dark-gray  h-full outline-none trans w-2/3 750:w-full  pl-2" placeholder="Enter your email" />
                            <span className="h-full flex items-center  w-10 750:w-12 justify-center  bg-main-color text-main-white trans cursor-pointer hover:opacity-85">
                                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-2xl">Stay Connected</h2>
                        <ul className="flex gap-4 items-center">
                            <a href="https://github.com/Mahmoudamin11" target="_blank" className="text-main-color trans hover:opacity-85 text-xl"><FontAwesomeIcon icon={faGithub} size="xl" /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/mahmoud-amin-15023025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-main-color trans hover:opacity-85 text-xl"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                            <span className=" text-dark-gray opacity-60 pointer-events-none ">&copy;Mahmoud</span>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default Footer