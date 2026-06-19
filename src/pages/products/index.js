import { useState ,useDeferredValue} from "react";
import ProductCard from "@/components/ProductCard";

const Products = ({ products }) => {

  const [selectedBrand, setSelectedBrand] = useState("");

  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search)

  const [sortBy ,setSortBy] = useState("")
  const brands = [
    ...new Set(products.map(product => product.brand))
  ];

  const filteredProducts = products.filter((product) => {

  const matchBrand =
    selectedBrand === "" ||
    product.brand === selectedBrand;

  const matchSearch =
    product.title
      .toLowerCase()
      .includes(deferredSearch.toLowerCase());

  return matchBrand && matchSearch;

});

  const sortedProducts = [...filteredProducts];

  if(sortBy === "price"){
    sortedProducts.sort((a,b)=> a.price - b.price);
  }
  if(sortBy == "rating"){
    sortedProducts.sort((a,b)=> b.rating - a.raiting)
  }
  return (
    <div className="bg-white">

      <div className="mx-auto max-w-7xl px-4 py-10">

        <h1 className="text-3xl font-bold mb-6">
          Products
        </h1>
        <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-[500px] m-4"
        />

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
                <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border p-2 rounded ml-4"
        >
        <option value="">
            Sort By
        </option>

        <option value="price">
            Price
        </option>

        <option value="rating">
            Rating
        </option>
        </select>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

          {sortedProducts.map((product) => (
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