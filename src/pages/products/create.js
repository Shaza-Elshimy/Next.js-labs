import { useRouter } from "next/router";
import ProductForm from "@/components/ProductForm";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const router = useRouter();

  const createProduct = async (productData) => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Failed to create product");
    }

    toast.success("Product created successfully!");
    router.push("/products");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Add Product</h1>
      <ProductForm onSubmit={createProduct} />
    </div>
  );
};

export default CreateProduct;