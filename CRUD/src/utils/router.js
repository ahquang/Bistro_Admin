import { createBrowserRouter } from "react-router-dom";
import Login from "../container/account/Login";
import Register from "../container/account/Register";
import ProductCreate from "../container/product/ProductCreate";
import ProductDetail from "../container/product/ProductDetail";
import ProductList from "../container/product/ProductList";
import ProductUpdate from "../container/product/ProductUpdate";
import TableCreate from "../container/table/TableCreate";
import TableList from "../container/table/TableList";
import TableDetail from "../container/table/TableDetail";
import TableUpdate from "../container/table/TableUpdate";
import CategoryList from "../container/category/CategoryList";
import CategoryCreate from "../container/category/CategoryCreate";
import CategoryUpdate from "../container/category/CategoryUpdate";
import OrderCreate from "../container/order/OrderCreate";
import OrderList from "../container/order/OrderList";
import OrderDetail from "../container/order/OrderDetail";
import { Protected } from "../components/Protected";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <Protected>
        <ProductList />
      </Protected>
    ),
  },
  {
    path: "/product/list",
    element: (
      <Protected>
        <ProductList />
      </Protected>
    ),
  },
  {
    path: "/product/create",
    element: (
      <Protected>
        <ProductCreate />
      </Protected>
    ),
  },
  {
    path: "/product/update/:id",
    element: (
      <Protected>
        <ProductUpdate />
      </Protected>
    ),
  },
  {
    path: "/product/detail/:id",
    element: (
      <Protected>
        <ProductDetail />
      </Protected>
    ),
  },
  {
    path: "/table/create",
    element: (
      <Protected>
        <TableCreate />
      </Protected>
    ),
  },
  {
    path: "/table/list",
    element: (
      <Protected>
        <TableList />
      </Protected>
    ),
  },
  {
    path: "/table/update/:id",
    element: (
      <Protected>
        <TableUpdate />
      </Protected>
    ),
  },
  {
    path: "/table/detail/:id",
    element: (
      <Protected>
        <TableDetail />
      </Protected>
    ),
  },
  {
    path: "/category/create",
    element: (
      <Protected>
        <CategoryCreate />
      </Protected>
    ),
  },
  {
    path: "/category/list",
    element: (
      <Protected>
        <CategoryList />
      </Protected>
    ),
  },
  {
    path: "/category/update/:id",
    element: (
      <Protected>
        <CategoryUpdate />
      </Protected>
    ),
  },
  {
    path: "/order/create",
    element: (
      <Protected>
        <OrderCreate />
      </Protected>
    ),
  },
  {
    path: "/order/list",
    element: (
      <Protected>
        <OrderList />
      </Protected>
    ),
  },
  {
    path: "/order/detail/:id",
    element: (
      <Protected>
        <OrderDetail />
      </Protected>
    ),
  },
]);
