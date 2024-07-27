import React from "react";
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
function Navbar({cart}) {
  return (
    <div className="flex justify-between bg-white p-1">
      <Link className="w-24 ml-[17%]" to="/" replace>
      <img className=" w-full object-cover" src="https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-1024x576.png" alt="" />
      </Link>
 
     <div className="flex items-center gap-1 mr-8">
      <Link to="cart" replace={true}>
      
      <TiShoppingCart  className=" text-5xl "/> 
      </Link>
      <span> ({cart.length})</span>

     </div>
    </div>
  );
}

export default Navbar;