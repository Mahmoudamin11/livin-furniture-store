import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  HashRouter} from 'react-router-dom';
// import AllProducts from './pages/AllProducts.tsx';
// import InCart from './pages/InCart.tsx';
// import Product from './components/Product.tsx';
// import Home from './pages/Home.tsx';

// const router = createBrowserRouter([
//   {
//     path: "/livin-furniture-store/",
//     element: <App />,
//     children: [
//       {
//         path: "/livin-furniture-store/",
//         element: <Home />,
//       },
//       {
//         path: "/livin-furniture-store/AllProducts",
//         element: <AllProducts />,
//       },
//       {
//         path: "/livin-furniture-store/InCart",
//         element: <InCart />,
//       },
//       {
//         path: "/livin-furniture-store/Product",
//         element: <Product />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
