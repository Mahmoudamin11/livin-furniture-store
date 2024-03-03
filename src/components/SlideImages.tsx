import hall1 from '../assets/hall1COP2.jpg';
import hallp1 from '../assets/hall1.webp';
import hall2 from '../assets/hallp2COP2.jpg';
import hallp2 from '../assets/hallp2.jpg';
import hall3 from '../assets/hall3COP.jpg';
import hallp3 from '../assets/hallp3.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {  useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/Cart';

const SlideImages = () => {
  const {changeOpenPage} = useCart();
  const [img, setImg] = useState(1);
  const next = () => { 
    if (img < 3)
      setImg(img + 1);
    else
      setImg(1);
  };
  const prev = () => { 
    if (img > 1)
      setImg(img - 1);
    else
      setImg(3);
  };
  const circleImg = (n:number) => { 
    setImg(n);
  };

  return (
    <div className=''>
      <div className='min-[600px]:hidden relative h-80'>
        {<img loading='lazy' src={hallp1} alt="" className={`h-80 w-full ${img == 1 ? " opacity-100 " : "opacity-0"} absolute top-0 left-0 transition-opacity duration-500`} />}
        {<img loading='lazy' src={hallp2} alt="" className={`h-80 w-full ${img == 2 ? " opacity-100 " : "opacity-0"} absolute top-0 left-0 transition-opacity duration-500`} />}
        {<img loading='lazy' src={hallp3} alt="" className={`h-80 w-full ${img == 3 ? " opacity-100 " : "opacity-0"} absolute top-0 left-0 transition-opacity duration-500`} /> }
        <div className='group bg-white/65 cursor-pointer trans hover:bg-white/75 p-2 absolute top-[8%] right-[8%] flex flex-col gap-1'>
          <h3 className='font-bold text-2xl'>Stochie</h3>
          <p className='font-bold text-lg'>RP 17.000.000</p>
          <span className=' w-full flex gap-2 items-center'>
            <p className='text-dark-gray text-xs'>Luxury big sofa 3-seats</p>
            <span><FontAwesomeIcon className="text-sm group-hover:opacity-100 trans group-hover:text-main-black  group-hover:translate-x-1" icon={faArrowRightLong} /></span>
          </span>
        </div>
      </div>

      <div  className={`   max-[600px]:hidden xl:h-[82vh]   relative w-full h-[400px] min-[810px]:h-96 min-[940px]:h-[450px] min-[1000px]:h-[570px]  flex trans`}>
        { <img src={hall1} loading='lazy' alt="" className={` w-full ${img == 1 ? "opacity-100" : " opacity-0" } trans absolute top-0 left-0 h-full transition-opacity duration-500`} />}
        { <img src={hall3} loading='lazy' alt="" className={` w-full ${img == 3 ? "opacity-100" : " opacity-0" } trans absolute top-0 left-0 h-full transition-opacity duration-500`} />}
        { <img src={hall2} loading='lazy' alt="" className={` w-full ${img == 2 ? "opacity-100 " : " opacity-0" } trans absolute top-0 left-0 h-full transition-opacity duration-500`} />}
        <div className='flex max-[600px]:hidden flex-col absolute bottom-0 left-[5%] w-1/2 min-[680px]:w-[40%] min-[860px]:w-[30%]  bg-white/65 trans hover:bg-white/75 cursor-pointer  mt-9 p-4 min-[1000px]:p-8 lg:p-10 xl:py-14 xl:px-10 lg:w-[40%] xl:w-[30%]  gap-5 xl:gap-8'>
            <h2 className='font-bold text-3xl  min-[900px]:text-4xl lg:text-5xl xl:leading-[55px]'>We  Help You Make Unique Interior</h2>
            <p className='text-black/40 lg:text-lg'>We will provide consulting services to create the modern interior of your dreams.</p>
            <Link to="/AllProducts" onClick={() => changeOpenPage("product")}><button className='w-1/2  bg-main-color py-3 trans hover:opacity-85 text-main-white font-bold'>Shop Now</button></Link>
        </div>
        
        <div className='group bg-white/65 cursor-pointer trans hover:bg-white/75 p-2 md:p-5 absolute bottom-0 right-[8%] flex flex-col gap-1  xl:p-8'>
          <h3 className='font-bold text-2xl md:text-4xl'>Stochie</h3>
          <p className='font-bold text-lg'>RP 17.000.000</p>
          <span className=' w-full flex gap-2 items-center'>
            <p className='text-black/50 text-xs'>Luxury big sofa 3-seats</p>
            <span><FontAwesomeIcon className="text-sm group-hover:opacity-100 trans group-hover:text-main-black  group-hover:translate-x-1" icon={faArrowRightLong} /></span>
          </span>
        </div>

      </div>

      
      <div className='w-full flex gap-5 '>
        <div className='w-[40%] min-[450px]:w-[51%] sm:w-[60%] md:w-[70%] lg:w-[78%] bg-sec-color py-2'>
        </div>

        <ul className=' bg-main-white flex gap-5 py-2 items-center'>
            <div className=' flex gap-5 min-[600px]:hidden'>
              <li onClick={() => circleImg(1)} className={img == 1 ?'w-3 h-3 rounded-full active cursor-pointer trans  ': 'w-3 h-3 rounded-full bg-dark-gray opacity-85 cursor-pointer trans  '}></li>
              <li onClick={() => circleImg(2)} className={img == 2 ?'w-3 h-3 rounded-full active cursor-pointer trans  ': 'w-3 h-3 rounded-full bg-dark-gray opacity-85 cursor-pointer trans  '}></li>
              <li onClick={() => circleImg(3)} className={img == 3 ?'w-3 h-3 rounded-full active cursor-pointer trans  ': 'w-3 h-3 rounded-full bg-dark-gray opacity-85 cursor-pointer trans  '}></li>
            </div>
            <div className=' flex gap-5 max-[600px]:hidden'>
              <li onClick={() => circleImg(3)} className={img == 3 ?'w-3 h-3 rounded-full active cursor-pointer trans  ': 'w-3 h-3 rounded-full bg-dark-gray opacity-85 cursor-pointer trans  '}></li>
              <li onClick={() => circleImg(1)} className={img == 1 ?'w-3 h-3 rounded-full active cursor-pointer trans  ': 'w-3 h-3 rounded-full bg-dark-gray opacity-85 cursor-pointer trans  '}></li>
              <li onClick={() => circleImg(2)} className={img == 2 ?'w-3 h-3 rounded-full active cursor-pointer trans  ': 'w-3 h-3 rounded-full bg-dark-gray opacity-85 cursor-pointer trans  '}></li>
            </div>
          
            <div id='leftAngle' onClick={() => prev()} className='flex trans hover:opacity-65 rotate-180 items-center justify-center text-main-color bg-sec-color w-10 h-10 p-2 rounded-full cursor-pointer trans'>
              <FontAwesomeIcon  icon={faAngleRight} size='lg' />
            </div>
            <div onClick={() => next()} className='rightAngle trans hover:opacity-65'>
              <FontAwesomeIcon  icon={faAngleRight} size='lg' />
            </div>
          

          </ul>

          
      </div>

          <div className='flex min-[600px]:hidden flex-col mob-p mt-9  gap-5'>
            <h2 className='head'>We  Help You Make Unique Interior</h2>
            <p className='text-dark-gray text-center'>We will provide consulting services to create the modern interior of your dreams.</p>
            <Link to="/AllProducts" onClick={() => changeOpenPage("product")}>
              <button className='w-full bg-main-color py-4 trans hover:opacity-75 text-main-white font-bold'>Shop Now</button>
            </Link>
          </div>
    </div>
  )
}

export default SlideImages;