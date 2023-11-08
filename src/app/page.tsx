'use client'
import type { NextPage } from "next";
import React from 'react';
import Form from './components/formComponent';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto max-w-xl p-8">
      <h1 className="text-2xl font-semibold">Prueba</h1>
      <div className="md:flex">
        <div className="md:w-1/2">
          <Form />
        </div>
        <div className="md:w-1/2">
        </div>
      </div>
    </div>
  );
};


export default Home;
