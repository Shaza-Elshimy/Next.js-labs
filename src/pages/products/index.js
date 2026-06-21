import { useState, useDeferredValue } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const Products = ({ products }) => {
  const { data: session } = useSession();
  const [allProducts, setAllProducts] = useState(products);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const deferredSearch = useDeferredValue(search);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setAllProducts(allProducts.filter((product) => product._id !== id));
      toast.success("Product deleted successfully!");
    } catch {
      toast.error("Failed to delete product");
    }
  };

  const brands = [
    ...new Set(allProducts.map((product) => product.brand)),
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchBrand = selectedBrand === "" || product.brand === selectedBrand;
    const matchSearch = product.title
      .toLowerCase()
      .includes(deferredSearch.toLowerCase());
    return matchBrand && matchSearch;
  });

  const sortedProducts = [...filteredProducts];
  if (sortBy === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  const displayedProducts = session
    ? sortedProducts
    : sortedProducts.slice(0, 3);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Products</h1>
          {session && (
            <Link
              href="/products/create"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Add Product
            </Link>
          )}
        </div>

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
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded ml-4"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>

        {!session && (
          <p className="text-sm text-gray-500 mt-2">
            Showing 3 products. Sign in to view all products and manage them.
          </p>
        )}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onDelete={deleteProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: { products },
  };
}

export default Products;