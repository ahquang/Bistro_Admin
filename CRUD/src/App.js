import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductCreate from "./container/product/ProductCreate";
import ProductDetail from "./container/product/ProductDetail";
import ProductList from "./container/product/ProductList";
import ProductUpdate from "./container/product/ProductUpdate";
import TableCreate from "./container/table/TableCreate";
import TableList from "./container/table/TableList";
import TableDetail from "./container/table/TableDetail";
import TableUpdate from "./container/table/TableUpdate";
import CategoryList from "./container/category/CategoryList";
import CategoryCreate from "./container/category/CategoryCreate";
import CategoryUpdate from "./container/category/CategoryUpdate";
import OrderCreate from "./container/order/OrderCreate";
import OrderList from "./container/order/OrderList";
import OrderDetail from "./container/order/OrderDetail";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/create" element={<ProductCreate />} />
            <Route path="/product/list" element={<ProductList />} />
            <Route path="/product/update/:id" element={<ProductUpdate />} />
            <Route path="/product/detail/:id" element={<ProductDetail />} />
            <Route path="/table/create" element={<TableCreate />} />
            <Route path="/table/list" element={<TableList />} />
            <Route path="/table/update/:id" element={<TableUpdate />} />
            <Route path="/table/detail/:id" element={<TableDetail />} />
            <Route path="/category/create" element={<CategoryCreate />} />
            <Route path="/category/list" element={<CategoryList />} />
            <Route path="/category/update/:id" element={<CategoryUpdate />} />
            <Route path="/order/create" element={<OrderCreate />} />
            <Route path="/order/list" element={<OrderList />} />
            <Route path="/order/detail/:id" element={<OrderDetail />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
