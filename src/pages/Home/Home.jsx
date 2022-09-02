import { Button } from "@mui/material";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import HomeImgLoader from "../../components/HomeImgLoader/HomeImgLoader";
import "./Home.css";

const Home = () => {
  const HomeImg = React.lazy(() => import("../../components/HomeImg/HomeImg"));
  return (
    <div className="home roll-out" key="home">
      <div className="home__main">
        <div className="home__main_text">
          <h1>Online shopping is simple!</h1>
          <p>
            Order your groceries from{" "}
            <span style={{ fontStyle: "italic" }}>React Store</span> with our
            easy to use app, and get your products delivered straight to your
            doorstep.
          </p>
          <Link to="/products">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#6791f3",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 700,
              }}
            >
              Start Shopping
            </Button>
          </Link>
        </div>
        <Suspense fallback={<HomeImgLoader />}>
          <HomeImg />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
