import { motion } from 'framer-motion'
import { useCart } from '../context/Cart'
import Product from '../components/Product';
import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import CartIcon from '../components/CartIcon';


const AllProducts = () => {
    const location  = useLocation();
    const {products, changeOpenPage, getSearchedProd, getSearchState, changeSearchState} = useCart();
    const [types, settypes] = useState([
        "All",
        "Chair",
        "Plant",
        "Curtain",
        "Lamp",
        "Sofa",
    ]);

    const [shownArr, setshownArr] = useState(products);

    
    const [chosenType, setchosenType] = useState("All");

    const SetType = (type:string) => { 
        setchosenType(type);
    }
    useEffect(() => { 
        window.scrollTo(0, 0);
        changeOpenPage("product");
        if (location.pathname != "/AllProducts") { 
            if (getSearchState() == 1) { 
                changeSearchState();
            }
        }
    }, [location.pathname])

    const changeShownArr = () => { 
        let items =  new Array();
        products.map((item) => { 
            // handle type 
            if (chosenType != "All" ) { 
                if (item.type == chosenType) { 
                    if (getSearchedProd() != "") { 
                        let h = item.head.toLowerCase() ;
                        if (h.startsWith(getSearchedProd().toLowerCase()) == true) { 
                            items.push(item);
                        }
                    }
                    else 
                        items.push(item);
                }
            }
            else { 
                if (getSearchedProd() != "") { 
                    let h = item.head.toLowerCase() ;
                    if (h.startsWith(getSearchedProd().toLowerCase()) == true) { 
                        items.push(item);
                    }
                }
                else 
                    items.push(item);
            }
        })
        setshownArr(items);
    }

    useEffect(() => { 
        changeShownArr();
    }, [ chosenType])

    useEffect(() => { 
        changeShownArr();
        
    }, [getSearchedProd()]);


  return (
    <motion.div className='py-12  mob-p min-h-[90vh]'
    initial={{opacity:0}}
    animate={{opacity:"100%"}}
    exit={{opacity:0}}
    >
        
        

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:"100%"}}
        exit={{opacity:0}}
        className='flex flex-col w-full  mx-auto '>
            <div id="filter" className='flex flex-col gap-3 w-full mb-8   items-start'>

                <h1 className=' text-2xl font-bold mx-auto'>Categories</h1>
                <div className=' flex justify-center w-full max-[720px]:gap-2 gap-10 max-sm:text-sm'>
                    { 
                        types.map((type) => (
                            
                                <button key={type} onClick={() => SetType(type)} className={` ${chosenType == type ? " bg-main-color text-white" : " text-main-color"} py-1 px-4 max-[550px]:px-2  border-[1px] border-solid border-main-color trans sm:hover:bg-sec-color  hover:border-sec-color`}>{type}</button>
                            
                        ))
                    }
                </div>
            </div>

            {/* Filtered products */}   
            <div className=''>
                {<motion.div
                initial={{opacity:0}}
                animate={{opacity:"100%"}}
                exit={{opacity:0}}
                className={`grid  gap-8 ${shownArr.length == 0 ? "hidden" : "block"}   grid-cols-2  sm:grid-cols-3 sm:gap-10 xl:gap-5 md:grid-cols-4  place-items-center`}>
                    {
                        shownArr.map((prod) => (
                            <div key={prod.head} className={``} >
                                { <Product prod={prod}  />}
                            </div>
                
                        ))
                
                    }
                </motion.div>}
                {shownArr.length == 0 && <div className='
                w-full text-center text-dark-gray  font-bold text-3xl col-span-2  min-h-[70vh] sm:min-h-[50vh] flex items-center justify-center
                '>No Data Found</div>}
            </div>
        </motion.div>
        
        
        <CartIcon />
        
    </motion.div>
  )
}

export default AllProducts