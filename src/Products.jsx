import React, { useState, useEffect, memo, useMemo } from "react";
import Productcard from "./Productcard";

import Spinner from "../Spinner@1x-1.0s-200px-200px.gif";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
// import { Outlet } from "react-router-dom";

function Products() {
  const [sort, setsort] = useState("default");
  const [query, setquery] = useState("");
  const [product, setprodcuts] = useState([]);
  const[searchparams, setsearchparams] = useSearchParams();
  const pageno=searchparams.get("pageno");
  const navigate=useNavigate();
  // console.log(pageno);
  // const [loading, setloading] = useState(false);
  const total = 60;
  // const [page, setpage] =useState(1);
  useEffect(
    function () {
      async function load() {
        try {
          // setloading(true);
          const data = await fetch(
            `https://dummyjson.com/products?limit=12&skip=${pageno*12-12}`
          );
          const res = await data.json();
          setprodcuts(res.products);
        } catch {
          console.error("Failed to load data");
        } finally {
          // setloading(false);
        }
      }
      load();
    },
    [pageno]
  );
  let sorted = product?.slice();
  if (sort == "pricelth") {
    sorted.sort((a, b) => a.price - b.price);
  }
  if (sort == "pricehtl") {
    sorted.sort((a, b) => b.price - a.price);
  }
  if (sort == "name") {
    sorted.sort((a, b) => a.description.localeCompare(b.description));
  }

  return (
    <div className="flex flex-col bg-gray-100 sm:px-16 px-3   w-screen py-8 min-h-[calc(100vh-6.4rem)]">
      <div className=" bg-white self-center relative  w-full h-full">
        {/* {loading ? (
          <>
            <div className="absolute h-screen w-screen flex ">
              <img
                className="h-[150px] w-[150px] mx-auto "
                src={`${Spinner}`}
                alt="Loading Products..."
              />
            </div>
          </>
        ) : ( */}
          <>
            <input
              value={query}
              onChange={(e) => setquery(e.target.value)}
              placeholder="Search For Items..."
              className="bg-white border-2 border-gray-300 rounded-lg py-1 sm:px-2 px-1  text-xs mt-2 absolute right-40 sm:right-48"></input>
            <select
              value={sort}
              onChange={(e) => setsort(e.target.value)}
              className="absolute text-sm border border-gray-300 mt-2 sm:right-12 right-2"
              name=""
              id="">
              <option value="default">Default Sort</option>
              <option value="name">Sort By Name</option>
              <option value="pricehtl">Price-High to Low</option>
              <option value="pricelth">Price-Low to High</option>
            </select>

            <div className="flex flex-wrap gap-5 px-6 items-center  py-4 my-6">
              {sorted
                .filter(
                  (item) =>
                    item.description
                      .toLowerCase()
                      .indexOf(query.toLowerCase()) != -1
                )
                .map((product) => (
                  <Productcard pageno={pageno} product={product} key={product.id} />
                ))}
            </div>

            <div className="flex justify-center" >
              
              {Array.from({ length: total / 12 }, (i) => i).map((_, i) => (
                
                <div onClick={()=>{
                  // setpage(i+1);
                  navigate(`/products?pageno=${i+1}`, {replace:true});
                  // setsearchparams('pageno',{page});
                
                  }} className={`p-2 px-3 cursor-pointer  border ${pageno==i+1 ?"bg-gray-800 text-white":""}`}>
                  {i+1}</div>
              ))}
            </div>
          </>
        {/* )} */}
      </div>
    </div>
  );
}

export default Products;
