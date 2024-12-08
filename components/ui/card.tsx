"use client";

import { Button } from "@headlessui/react";
import React from "react";

interface Product {
  id: string;
  imageAlt: string;
  imageSrc: string;
  href: string;
  name: string;
  color: string;
  price: string;
}

export default function Card({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      className="group relative drop-shadow-md border-2 p-2 rounded-md"
    >
      <img
        // alt={product.imageAlt}
        src={product.imageSrc}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">Owner: {product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      <Button className="rounded-md mt-2 w-full bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Buy Now
      </Button>
    </div>
  );
}
