import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './layout/Layout';
import './index.css'
import { ViewProduct } from './Component/ProductsComponent/ViewProduct';
import { AddProduct } from './Component/ProductsComponent/AddProduct';
import ImageUploadComponent from './Component/ImageUploadComponent/ImageUploadComponent';

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
      {
       path: 'imageUpload',
        Component: ImageUploadComponent
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,

  </StrictMode>,
)
