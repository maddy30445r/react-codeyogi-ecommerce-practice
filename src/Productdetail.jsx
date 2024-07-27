import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Productdetail({ cart, setcart }) {
  const param = useParams();
  const navigate = useNavigate();
  const [selected, setselected] = useState([]);
  const [quant, setquant] = useState(1);

  useEffect(function () {
    async function load() {
      try {
        // setloading(true);
        const data = await fetch(`https://dummyjson.com/products/${param.id}`);

        const res = await data.json();
        setselected(res);
      } catch {
        console.error("Failed to load data");
      } finally {
        // setloading(false);
      }
    }
    load();
  }, []);

  function handlecartadd() {
    
    let newprod = {
      id: selected.id,
      prodname: selected.title,
      quantity: Number(quant),
      image: selected.thumbnail,
      price:selected.price
    };
    if (cart.map((item) => item.id).includes(selected.id)) {
      setcart(
        cart.map((cartitem) =>
          cartitem.id == selected.id
            ? { ...cartitem, quantity: Number(cartitem.quantity)+ Number(quant) }
            : cartitem
        )
      );
    }
    else{

      setcart([...cart, newprod]);
    }
    setquant(1);
  }

  return (
    <div className=" bg-zinc-100 p-8 flex justify-center items-center min-h-[calc(100vh-6.4rem)]">
      <div className=" flex flex-col relative  sm:flex-row px-7 bg-white shadow-gray-500 py-4 h-full">
        <button
          onClick={() => navigate(-1,{replace:true})}
          className=" absolute text-xl bg-red-500 w-[30px] aspect-square top-2  rounded-full text-white">
          &larr;
        </button>
        <div className="sm:py-7">
          <img
            className="object-cover max-h-[400px] w-full sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
            src={selected.thumbnail}
          />
        </div>

        <div className="sm:w-3/6 lg:1/2 flex flex-col gap-3 p-6 justify-start">
          <h1 className="lg:text-5xl text-3xl sm:text-4xl text-gray-600">
            {selected.title}
          </h1>

          <h1 className=" text-gray-700 font-semibold lg:text-4xl text-2xl sm:text-3xl">
            {selected.price}$
          </h1>

          <p className="text-sm lg:text-lg text-gray-500">
            {selected.description}
          </p>

          <div className="flex gap-3 mt-4">
            <input
              value={quant}
              onChange={(e) => {
                if (e.target.value <= selected.stock && e.target.value >= 0)
                  setquant(e.target.value);
              }}
              type="number"
              className="  border-2 px-2 w-16"
              max={selected.stock}
              min={1}
            />

            <button
              onClick={handlecartadd}
              disabled={selected.stock < 0}
              className="text-xs bg-red-500 py-1 px-6 rounded-md text-white">
              {selected.stock > 0 ? "Add to cart" : "Out of stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
