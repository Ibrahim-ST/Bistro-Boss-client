import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div>
      <div className="rounded w-96 h-full bg-[#F3F3F3] shadow-xl">
        <figure>
          <img
            src={image}
            className='rounded w-full'
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions ">
            <button className="btn btn-outline border-0 bg-slate-100 border-orange-400 hover:border-orange-400 hover:text-orange-400 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
