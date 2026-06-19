import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const Products = ({ products }) => {

  const [selectedBrand, setSelectedBrand] = useState("");

  const brands = [
    ...new Set(products.map(product => product.brand))
  ];

  const filteredProducts = selectedBrand
    ? products.filter(
        product => product.brand === selectedBrand
      )
    : products;

  return (
    <div className="bg-white">

      <div className="mx-auto max-w-7xl px-4 py-10">

        <h1 className="text-3xl font-bold mb-6">
          Products
        </h1>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border p-2 rounded mb-8"
        >
          <option value="">
            All Brands
          </option>

          {brands.map((brand) => (
            <option
              key={brand}
              value={brand}
            >
              {brand}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export async function getStaticProps() {

  const res = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
}

export default Products;