import React from "react";
import { Link } from "react-router-dom";
function Cart({ cart,setcart }) {
  const total = cart.reduce(function (acc, curr) {
    return acc + curr.price * curr.quantity;
  }, 0);

  function handledelete(itemid){
    setcart(cart.filter(item=>item.id!=itemid));


  }
  return (
    <div className="h-[calc(100vh-6.4rem)] overflow-auto ">
      <div className="grid grid-cols-12  md:px-16 py-4   ">
        <div className="text-center  py-2 text-sm col-span-1 ">
          <div className="xs   bg-zinc-100 py-[1.1rem] mb-2 border-l  "></div>
          {cart.map((item) => (
            <div className="bg-white p-2 py-[1.38rem] flex justify-center text-center border-b border-l font-medium">
              <div onClick={()=>{handledelete(item.id)}} className="border cursor-pointer w-5 h-5 flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white">
                x
              </div>
            </div>
          ))}
        </div>
        <div className="text-center  py-2 text-sm  col-span-1">
          <div className="xs   bg-zinc-100 py-[1.1rem] mb-2 "></div>
          {cart.map((item) => (
            <div className="bg-white p-2  text-center border-b font-medium">
              <div className="w-12 h-12">
                <img
                  src={item.image}
                  className="w-full object-cover object-center"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-2  text-sm  col-span-4">
          <div className="   bg-zinc-100 py-2 mb-2 font-medium ">Product</div>
          {cart.map((item) => (
            <Link to={`/products/${item.id}`}>
            <div className="bg-white p-2   py-[1.37rem] text-center border-b text-red-500 font-medium">
              {item.prodname}
            </div>
            </Link>
          ))}
        </div>
        <div className="text-center py-2 text-sm  col-span-2">
          <div className="xs mb-2 bg-zinc-100 py-2 font-medium">Quantity</div>
          {cart.map((item) => (
            <div className="bg-white p-2 py-[1.37rem]  text-center border-b  font-medium">
              {item.quantity}
            </div>
          ))}
        </div>
        <div className="text-center  py-2 text-sm  col-span-2">
          <div className="xs   bg-zinc-100 py-2 mb-2  font-medium ">Price</div>
          {cart.map((item) => (
            <div className="bg-white p-2 py-[1.37rem]  text-center border-b  font-medium">
              ${item.price}
            </div>
          ))}

          <div className="py-2 font-medium text-red-500">Cart Total</div>
        </div>
        <div className="text-center  py-2 text-sm  col-span-2">
          <div className="xs   bg-zinc-100 py-2 mb-2 border-r  font-medium">Subtotal</div>
          {cart.map((item) => (
            <div className="bg-white p-2 py-[1.37rem]   text-center border-b border-r  font-medium">
              ${(Number(item.quantity) * Number(item.price)).toFixed(2)}
            </div>
          ))}
          <div className="font-medium text-red-500 py-2">${total.toFixed(2)}</div>

         <Link>
         
          <div className="my-16 bg-red-500 text-white py-1 mr-4 md:mr-0 rounded-md text-xs md:text-base uppercase  ">Proceed to checkout → </div>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
