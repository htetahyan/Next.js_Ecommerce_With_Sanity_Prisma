
/* eslint-disable react/no-unknown-property */

import { useState, useEffect } from "react";
import Head from "next/head";
//sllider

/* import Header from './Header'; */
import HightLight from "./hightlights/HightLight";

import Footer from "./Footer";

import { Text} from "@nextui-org/react";
import Handler from "./Category/Handler";
import { useStateManager } from "../state manager/Context";

const Main = ({ products, banners }) => {

  const categoryArr = products.map((p) => p.category);
  const categoryList = [...new Set(categoryArr)].sort();
  const [listItems, setlistItems] = useState(["all", ...categoryList]);

  const {cursorVariant,setCursorVariant}=useStateManager()
  const [i, setIndex] = useState(0);
  const length = banners.length - 1;
  const next = () => {
    setIndex(i == length ? 0 : i + 1);
  };
  const prev = () => {
    setIndex(i == 0 ? length : i - 1);
  };
const txtActive=()=>setCursorVariant("text")
const txtOff=()=> setCursorVariant("default")
  const [cate, setCate] = useState("all");
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
            
            <div className="banners">
              {banners.map((b, index) => {
                return <HightLight index={index} i={i} key={b._id} b={b} />;
              })}
            </div>
            <div className="mb_btn ">
         
       
<button class="button-82-pushable" role="button">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
   Buy Now
  </span>
</button>

            </div>
            <div className="hl_next" onClick={next}></div>
          </div>

          <Text onMouseEnter={txtActive} onMouseLeave={txtOff}
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
            <div className="filter flex">
              <div className="categoryContainer">
                {" "}
                <li className="pd_header flex">Category</li>
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
              </div>{" "}
        
       {/*          <div className="srhResults">
                  {searchInput.length > 0 &&
                    filtred?.map((f) => {
                      return (
                        <Link href={`/product/${f.slug.current}`}>
                          <p>{f?.name}</p>
                        </Link>
                      );
                    })}
                </div> */}
          
            </div>

            <div className="category ">
              {products.map((p) => {
                return <Handler key={p._id} p={p} cate={cate} />;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
