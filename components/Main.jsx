import { useState, useEffect } from "react";
import Head from "next/head";

//sllider

/* import Header from './Header'; */
import HightLight from "./hightlights/HightLight";

import Footer from "./Footer";
import Category from "./Category/Category";
import { Text, Grid } from "@nextui-org/react";
import Handler from "./Category/Handler";
const Main = ({ products, banners }) => {

 const categoryArr= products.map(p => p.category);
const  listItems= [...new Set(categoryArr)].sort()


  const [i, setIndex] = useState(0);
  const length = banners.length - 1;
  const next = () => {
    setIndex(i == length ? 0 : i + 1);
  };
  const prev = () => {
    setIndex(i == 0 ? length : i - 1);
  };
  const [cate, setCate] = useState("All");

  return (
    <>
      <Head>
        <title>Marketify</title>
        <link
          rel="icon"
          href="https://cdn4.vectorstock.com/i/1000x1000/47/48/letter-m-black-flower-alphabet-beautiful-capital-vector-31724748.jpg"
        />
      </Head>
      <div className="main flex flex-col justify-between">
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
            </div>
            <div className="hl_next" onClick={next}></div>
          </div>

          <Text
            h1
            css={{
              textAlign: "center",
              font: "5vw Days one",
              color: "#0b3b44",
            }}
          >
            Trending Products
          </Text>
          <div className="pd">
            <div className="filter">
              <h3>Category</h3>
              <ul className="fllterItem px-5 text-[#0b3b44]">
                {listItems.map((l, index) => {
                  return (
                    <li
                      className={
                        cate == l
                          ? "text-[#0b3b44] listClicked"
                          : "text-[#0b3b44]"
                      }
                      key={index}
                      onClick={() => setCate(l)}
                    >
                      <p>{l}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Grid.Container gap={2} justify="flex-start" className="category">
              {products.map((p) => {
                return <Handler p={p} cate={cate} />;
              })}
            </Grid.Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
