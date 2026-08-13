import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './layout/Layout';
import './index.css'
import { ViewProduct } from './Component/ProductsComponent/ViewProduct';
import { AddProduct } from './Component/ProductsComponent/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {
        index: true,
        Component: ViewProduct
      },
      {
       path: 'addProduct',
        Component: AddProduct
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,

  </StrictMode>,
)
