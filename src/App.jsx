import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useEffect, useState } from "react";
import AdminPage from "./pages/AdminPage/AdminPage";
import { Context } from "./context";

function App() {
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState([]);
  const [signed, isSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  const stopLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const checkData = (login, password) => {
    if (login === "Admin" && password === "Admin") isSigned(true);
    else isSigned(false);
  };

  // useEffect(() => {
  //   fetch("http://localhost:5000/data")
  //     .then((response) => response.json())
  //     .then((actualData) => setData(actualData));
  // }, []);

  useEffect(() => {
    fetch("https://630cf8f953a833c534399e7e.mockapi.io/api/db/store_products")
      .then((res) => res.json())
      .then((json) => json[0].data)
      .then((actualData) => setData(actualData))
      .then(() => stopLoading());
  }, []);

  const addOrder = (item) => {
    const isInArray = orders.find((el) => el.id === item.id);
    if (isInArray) {
      setOrders(
        orders.map((el) =>
          el.id === item.id ? { ...isInArray, count: isInArray.count + 1 } : el
        )
      );
    } else {
      setOrders([...orders, { ...item, count: 1 }]);
    }
  };

  const removeOrder = (item) => {
    setOrders(orders.filter((el) => el.id !== item.id));
  };

  const decrementOrder = (item) => {
    const isInArray = orders.find((el) => el.id === item.id);
    if (item.count !== 1) {
      setOrders(
        orders.map((el) =>
          el.id === item.id ? { ...isInArray, count: isInArray.count - 1 } : el
        )
      );
    }
  };

  const newItem = (item) => {
    setData((current) => [...current, item]);
  };

  return (
    <Context.Provider value={{ newItem }}>
      <div className="App">
        <Header count={orders.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <Products
                loading={loading}
                stopLoading={stopLoading}
                onAdd={addOrder}
                data={data}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                onAdd={addOrder}
                onRemove={removeOrder}
                onMinus={decrementOrder}
                orders={orders}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <AdminPage
                removeItem={removeItem}
                data={data}
                signed={signed}
                checkData={checkData}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
