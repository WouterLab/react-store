import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Products.css";
import { Button, CircularProgress as Loader } from "@mui/material";
import ItemLoader from "../../components/ItemLoader/ItemLoader";
import { Link } from "react-router-dom";

const Item = lazy(() => import("../../components/Item/Item"));

const Products = (props) => {
  const [loading, setLoading] = useState(true);
  const [items, getItems] = useState([]);

  useEffect(() => {
    getItems(props.data);
    setTimeout(() => {
      setLoading(props.loading);
    }, 1000);
  }, [props.data, props.loading]);

  return (
    <div className="products roll-out" key="products">
      <div className="products__main">
        <div className="products__heading">
          <h2>Products</h2>
          <p>Take a look at our products</p>
        </div>
        <div className="products__list">
          {loading && (
            <Loader
              sx={{
                color: "#6791f3",
              }}
            />
          )}
          {loading
            ? null
            : items.map((item) => {
                return (
                  <Suspense
                    key={item.id}
                    fallback={<ItemLoader skeleton={"skeleton"} />}
                  >
                    <Item
                      item={item}
                      title={item.title}
                      desc={item.description}
                      price={item.price}
                      src={item.src}
                      onAdd={props.onAdd}
                    />
                  </Suspense>
                );
              })}
          {loading ? null : (
            <div className="editlink">
              <Link to="/admin">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#6791f3",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 700,
                    paddingLeft: "70px",
                    paddingRight: "70px",
                  }}
                >
                  Edit product list
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
