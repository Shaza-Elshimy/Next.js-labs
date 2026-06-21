import { useRouter } from "next/router";
import ProductForm from "@/components/ProductForm";
import toast from "react-hot-toast";

const EditProduct = ({ product }) => {
  const router = useRouter();

  const updateProduct = async (data) => {
    const res = await fetch(`/api/products/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Failed to update product");
    }

    toast.success("Product updated successfully!");
    router.push("/products");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Edit Product</h1>
      <ProductForm initialData={product} onSubmit={updateProduct} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default EditProduct;