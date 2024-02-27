/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface ICard {
  title: string;
  description: string;
  slug: string;
}

const Card = ({ title, description, slug }: ICard) => (
  <div className="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
      <img
        className="rounded-t-lg"
        src="https://cdn.pixabay.com/photo/2023/09/22/07/52/beach-8268375_960_720.jpg"
        alt="image..."
      />
    </Link>
    <div className="p-5">
      <Link href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description.slice(0, 50)}...
      </p>
      <Link
        href={`${slug}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  </div>
);

export default Card;
