import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import p1 from '../assets/ch1.webp';
import p2 from '../assets/chair2.png';
import p3 from '../assets/fur1.webp';
import p4 from '../assets/curtain2.jpg';
import p5 from '../assets/ch2.webp';
import p6 from '../assets/ch3.webp';
import p7 from '../assets/chair3.webp';
import p8 from '../assets/curtain.jpg';
import p9 from '../assets/chair4.webp';
import p10 from '../assets/ch4.jpg';
import p11 from '../assets/fur2.webp';
import p12 from '../assets/curtain3.webp';
import p13 from '../assets/fur3.webp';
import p14 from '../assets/ch5.jpg';
import p15 from '../assets/chair5.avif';
import p16 from '../assets/curtain4.webp';
import p17 from '../assets/chair6.avif';
import p18 from '../assets/sofa1.avif';
import p19 from '../assets/fur4.webp';
import p20 from '../assets/fur5.webp';
import p21 from '../assets/sofa2.avif';
import p22 from '../assets/sofa3.avif';
import p23 from '../assets/chair7.avif';
import p24 from '../assets/sofa4.jpg';
import p25 from '../assets/sofa5.avif';
import p26 from '../assets/rosenmandel.avif';

type features = { 
    products: cartItem[]
    increaseQ: (head:string) => void
    decreaseQ: (head:string) => void
    removeQ: (head:string) => void
    totalQuantity: number
    chooseProd: (head:string) => void
    changeOpenPage: (page:string) => void
    ChosenProd:string
    openPage:string
    getChosenProd: ()=> String
    getOpenPage: ()=> String
    getTotalItems: ()=> number
    totalPrice: ()=> number
    theme:number
    themeChange: () => void
    closeTheme: () => void
    toggleList:() => void
    getList:() => number
    List: number
    toggleCurrTheme:(th:number) => void
    getCurrTheme:() => number
    getProducts:() => cartItem[]
    clearCart: () => void
    changeSearchedProd:(str:string) => void
    getSearchedProd:() => string
    changeSearchState: () => void
    getSearchState: () => number
}

const cartContext = createContext({}as features)
type cartItem = { 
    img: string 
    head: string
    type: string
    price: number
    quantity: number
  }

export function useCart() { 
    return useContext(cartContext);
}
type child = { 
    children: ReactNode
}

const data = [
  {img: p1, head: 'Plugland', type: 'Lamp', price: 450, quantity: 0},
  {img: p2, head: 'Vitlok', type: 'Chair', price: 322, quantity: 0},
  {img: p3, head: 'Navlinge', type: 'Plant', price: 460, quantity: 0},
  {img: p4, head: 'Pitty', type: 'Curtain', price: 320, quantity: 0},
  {img: p5, head: 'Ramsald', type: 'Lamp', price: 500, quantity: 0},
  {img: p6, head: 'Vaxjo', type: 'Lamp', price: 221, quantity: 0},
  {img: p7, head: 'Tallbyn', type: 'Chair', price: 729, quantity: 0},
  {img: p8, head: 'Ranarp', type: 'Curtain', price: 540, quantity: 0},
  {img: p9, head: 'Valhala', type: 'Chair', price: 400, quantity: 0},
  {img: p10, head: 'Soft', type: 'Lamp', price: 180, quantity: 0},
  {img: p11, head: 'Navwag', type: 'Plant', price: 90, quantity: 0},
  {img: p12, head: 'Pitya', type: 'Curtain', price: 220, quantity: 0},
  {img: p13, head: 'Grandle', type: 'Plant', price: 100, quantity: 0},
  {img: p14, head: 'Sphinx', type: 'Lamp', price: 121, quantity: 0},
  {img: p15, head: 'Telet', type: 'Chair', price: 650, quantity: 0},
  {img: p16, head: 'Rosey', type: 'Curtain', price: 340, quantity: 0},
  {img: p17, head: 'Oxel', type: 'Chair', price: 760, quantity: 0},
  {img: p18, head: 'Wellen', type: 'Sofa', price: 3750, quantity: 0},
  {img: p19, head: 'Natel', type: 'Plant', price: 90, quantity: 0},
  {img: p20, head: 'Loloua', type: 'Plant', price: 120, quantity: 0},
  {img: p21, head: 'Sendre', type: 'Sofa', price: 4200, quantity: 0},
  {img: p22, head: 'Zinx', type: 'Sofa', price: 2600, quantity: 0},
  {img: p23, head: 'Chase', type: 'Chair', price: 680, quantity: 0},
  {img: p24, head: 'Quambra', type: 'Sofa', price: 3150, quantity: 0},
  {img: p25, head: 'Linans', type: 'Sofa', price: 7150, quantity: 0},
  {img: p26, head: 'Rosenman', type: 'Curtain', price: 250, quantity: 0},
]


const initstorage = localStorage.getItem("theme") != null ? JSON.parse(localStorage.getItem("theme")!) : 1 ;
const chosenProd = localStorage.getItem("chosenProduct") != null ? JSON.parse(localStorage.getItem("chosenProduct")!) : "" ;
const totalQ = localStorage.getItem("totalQ") != "" ? JSON.parse(localStorage.getItem("totalQ")!) : 0 ;
const cartProds = localStorage.getItem("incart")   ? JSON.parse(localStorage.getItem("incart")!) : data ;

// localStorage.clear()

export function MainCart({children}:child) { 
    const [products, setProducts] = useState<cartItem[]>(cartProds);

      const [totalQuantity, settotalQuantity] = useState<number>(totalQ);
      const [List, setList] = useState(0);
      const [ChosenProd, setChosenProd] = useState(chosenProd);
      const [theme, settheme] = useState(0);
      const [currTheme, setCurrTheme] = useState<number>(initstorage);
      const [openPage, setopenPage] = useState("home");
      const [searchedProd, setsearchedProd] = useState("");
      const [search, setSearch] = useState(0);
      const changeOpenPage = (page:string) => { 
        setopenPage(page);
      }

      useEffect(() => { 
        localStorage.setItem("incart", JSON.stringify(products));
      }, [products]);

      useEffect(() => { 
        localStorage.setItem("chosenProduct", JSON.stringify(ChosenProd));
      }, [ChosenProd]);

      useEffect(() => { 
        let total = 0 ; 
        products.map((item) => { 
          if (item.quantity > 0) { 
            total += item.quantity;
          }
        })
        localStorage.setItem("totalQ", JSON.stringify(total));
      }, [totalQuantity]);

      useEffect(() => { 
        localStorage.setItem("theme", JSON.stringify(currTheme));
      }, [currTheme])
      
      // toggle search state 
      const changeSearchState = () => { 
        search == 1 ? setSearch(0) : setSearch(1);
      }
      const getSearchState = () => { 
        return search ; 
      }

      // Clear the cart 
      const clearCart = () => { 
        let items = [...products];
        settotalQuantity(0) ; 
        items.map((item) => { 
          if (item.quantity > 0 ) { 
            
            item.quantity = 0 ; 
          }
        })
        setProducts(items);
      }

      // searched product 
      const changeSearchedProd = (str:string) => { 
        setsearchedProd(str);
      }

      const getSearchedProd = () => { 
        return searchedProd ;
      }

      const getProducts = () =>  {
        return products;
      }

      const toggleCurrTheme = (th:number) => { 
        setCurrTheme(th);
      }
      const getCurrTheme = () => { 
        return currTheme;
      }

      const toggleList = () => { 
        if(List == 1) 
          setList(0);
        else 
          setList(1);
      }

      const getList = () => { 
        return List ; 
      }

      const getOpenPage = () => { 
        return openPage ; 
      }
      const themeChange = () => { 
          if (theme == 0) 
              settheme(1);
          else 
              settheme(0);
      }
      const closeTheme = () => { 
        if (theme == 1) { 
          settheme(0);
        }
      }
      const chooseProd = (head:string) => { 
        setChosenProd(head);
        
      }
      const getChosenProd = () => { 
        return ChosenProd ;
        
      }

      const increaseQ = (head:string) => { 
        let items = [...products];
        items.find((item) =>  { 
          if (item.head == head) { 
            item.quantity++;
            settotalQuantity(totalQuantity + 1);
          }
        });
        setProducts(items);
      }

      const getTotalItems = () => { 
        let items = 0 ; 
        products.map((item) => { 
          if (item.quantity > 0) { 
            items++;
          }
        });
        return items ; 
      }

      const decreaseQ = (head:string) => { 
        let items = [...products];
        items.find((item) =>  { 
          if (item.head == head) {
            settotalQuantity(totalQuantity - 1);
            if (item.quantity > 0) 
                item.quantity--;
          }
        });
        setProducts(items);
      }
      const removeQ = (head:string) => { 
        let items = [...products];
        items.find((item) =>  { 
          if (item.head == head) {
            settotalQuantity(totalQuantity - item.quantity);
                item.quantity = 0;
          }
        });
        setProducts(items);
      }

      const totalPrice = () => { 
        let total = 0 ; 
        products.map((item) => { 
          if (item.quantity > 0 ) { 
            total += (item.price * item.quantity);
          }
        })
        return total ;
      }

    return( 
        <cartContext.Provider value={{changeSearchState, getSearchState, changeSearchedProd, getSearchedProd,theme,clearCart, toggleCurrTheme,getProducts,  getCurrTheme, toggleList, getList, List , changeOpenPage, getOpenPage , openPage, themeChange, closeTheme, products,getTotalItems, chooseProd,ChosenProd,getChosenProd,  increaseQ, decreaseQ, removeQ, totalQuantity, totalPrice}}>
            {children}
        </cartContext.Provider>
    )
}