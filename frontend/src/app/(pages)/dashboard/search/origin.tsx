"use client";

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import Search from '@/app/components/searchbar/search';
import fetchDataFromGoBackend from "./hook";
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // Call the function when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/data");
      if (!response.ok) {
        throw new Error("Network response was not ok");
    }
      const data = await response.json();
      setBooks(data); // Assuming your data structure is an array of books
      console.log(data);
      // Handle the received data as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    /*{ <section className='py-24'>
      <div className='container'>
        <div className='mb-12 flex items-center justify-between gap-x-16'>
          <h1 className='text-3xl font-bold'>Books</h1>

          <div className='grow'>
            <Search />
          </div>
        </div>

        <ul
          role='list'
          className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'
        >
          {books.map(book => (
            <li key={book.id.toString()} className='relative'>
              <div className='group block aspect-square w-full overflow-hidden rounded-lg bg-gray-100'>
                <Image
                  src={book.coverImage}
                  alt=''
                  className='object-cover group-hover:opacity-75'
                  width={300}
                  height={300}
                />
              </div>
              <p className='mt-2 block truncate font-medium'>{book.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    */
  <div>
    Hello
  </div>
  );
};

export default SearchPage;