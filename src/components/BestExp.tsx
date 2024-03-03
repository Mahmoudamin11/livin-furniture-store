import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import img from '../assets/best exp.png';
import { motion } from "framer-motion";

const BestExp = () => {
    const stats = [
        {num:15 ,txt:'Years', txt2: 'experience'},
        {num:53 ,txt:'Gained', txt2: 'certificates'},
        {num: 1209,txt:'Sold', txt2: 'furnitures'},
    ]
  return (
    <motion.div
    initial={{opacity:0, x:300}}
    transition={{duration:0.4, opacity:{duration:0.5}}}
    whileInView={{opacity:1, x: 0}}
    viewport={{once: true}}
    
    className="mob-p space-up flex flex-col mb-20 ">
        <div className="flex flex-col gap-8 sm:text-left  items-center justify-center sm:flex-row ">
            <div className="flex flex-col gap-8 lg:gap-12 sm:items-start sm:justify-start items-center ">

                <h2 className="font-bold text-[44px] leading-[50px] text-center sm:text-left">We Provide You The <br className="max-[992px]:hidden" /> Best <span className="specialTitle">Experience</span></h2>
                <p className="text-dark-gray text-center sm:text-left min-[950px]:w-[90%] lg:w-[75%] lg:text-lg">With our mature experience, several honors, numerous items sold, we feel we can always deliver the finest results and service to our devoted clients.</p>
                
                <div className="flex justify-around sm:justify-start md:gap-12 lg:gap-20 xl:gap-20 w-full">
                    {
                        stats.map((st) => (
                            <div  className="flex flex-col gap-1 " key={st.num}>
                                <h3 className="text-main-color font-bold text-4xl md:-ml-[10px] lg:text-5xl">{st.num}</h3>
                                <span className="text-dark-gray sm:ml-2 md:m-0 sm:text-sm lg:text-[16px]">{st.txt} <br /> {st.txt2}</span>
                            </div>
                        ))
                    }
                </div>
                <button className="group px-4 py-3 hover:opacity-75 text-main-color text-lg font-bold flex items-center gap-2 w-fit bg-main-white border-[1px] border-solid border-main-color outline-none trans ">
                    <span className=" group-hover:opacity-75 trans">Learn More</span>
                    <FontAwesomeIcon className="text-2xl group-hover:opacity-100 trans group-hover:text-main-black  group-hover:translate-x-2" icon={faArrowRightLong} />
                </button>
            </div>
            <img src={img} alt="" className="bestEXP sm:w-[50%] min-[900px]:w-[40%] xl:w-[35%] w-full relative " />
        </div>

    </motion.div>
  )
}

export default BestExp;