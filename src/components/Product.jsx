import React from "react";
const Product = ({ image, title, description, category, rating,price }) => {
  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
      <a href="#" className="block w-full h-full">
        <img
          alt="blog photo"
          src={image}
          className="object-cover w-full max-h-40"
        />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md"></p>
          <p className="mb-2 text-xl line-clamp-1 font-medium text-gray-800 dark:text-white">
            {title}
          </p>
          <p className="font-light line-clamp-3 text-gray-400 dark:text-gray-300 text-md">
            {description}
          </p>
          <div className="flex flex-col mt-4 mb-4">
            <span className="px-2 py-1 w-1/2 text-center text-sm rounded text-white  bg-blue-600 font-medium">
              {category}
            </span>
            <span className="mt-2">
              {
              rating &&
              [...Array(Math.round(rating))].map((e, i) => (
                <span key={i}>⭐</span>
              ))
              }
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-light text-lg font-bold dark:text-gray-300 ">
            {`S/ ${price}`}
            </h4>
            <button
              type="button"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Agregar
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product;
