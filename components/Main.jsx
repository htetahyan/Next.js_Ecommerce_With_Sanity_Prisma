import { useState } from "react";
import Head from "next/head";

//sllider

/* import Header from './Header'; */
import HightLight from "./hightlights/HightLight";
import Product from "./Product";
import Footer from "./Footer";

const Main = ({ products, banners }) => {
  const [i, setIndex] = useState(0);
  const length = banners.length - 1;
  const next = () => {
    setIndex(i == length ? 0 : i + 1);
  };
  const prev = () => {
    setIndex(i == 0 ? length : i - 1);
  };

  console.log(banners?.[i]?.midText);
  return (
    <>
      <Head>
        <title>Marketify</title>
        <link
          rel="icon"
          href="https://cdn4.vectorstock.com/i/1000x1000/47/48/letter-m-black-flower-alphabet-beautiful-capital-vector-31724748.jpg"
        />
      </Head>
      <div className="main flex flex-col justify-between min-h-screen">
        <div className="body ">
          <div className=" hightlight grid">
            <div className="hl_headerImg">
              <div className="hl_header img"></div>
            </div>
            <div className="hl_previous" onClick={prev}></div>
            <div className="mb_btn">
              <button className="button-82-pushable" role="button">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Buy Now!</span>
              </button>
            </div>
            <div className="banners">
              {banners.map((b, index) => {
                return <HightLight index={index} i={i} key={b._id} b={b} />;
              })}
            </div>{" "}
            <div className="hl_next" onClick={next}></div>
          </div>
          <h1 className="text-center text-purple-200">Winter Sale discount!</h1>
          <div className="pd">
            {products.map((p) => {
              return <Product key={p._id} p={p} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
