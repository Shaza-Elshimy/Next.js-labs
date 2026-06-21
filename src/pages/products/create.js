import { useRouter } from "next/router";
import ProductForm from "@/components/ProductForm";

const CreateProduct = () => {

  const router = useRouter();

  const createProduct = async (
    productData
  ) => {

    await fetch(
      "/api/products",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          productData
        ),
      }
    );

    router.push("/products");
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl mb-5">
        Add Product
      </h1>

      <ProductForm
        onSubmit={createProduct}
      />

    </div>
  );
};

export default CreateProduct;