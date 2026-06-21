import Link from "next/link";
import { useSession } from "next-auth/react";

const ProductCard = ({ product }) => {
        const { data: session } = useSession();

        const handleDelete = async () => {

        const confirmDelete =
        confirm("Delete Product ?");

        if(!confirmDelete) return;

        await fetch(
            `/api/products/${product._id}`,
            {
            method:"DELETE"
            }
        );

        window.location.reload();

        }
  return (
    <div className="group relative hover:shadow-lg transition p-2">

      <Link href={`/products/${product._id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />

        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              {product.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {product.category}
            </p>
          </div>

          <p className="text-sm font-medium text-gray-900">
            ${product.price}
          </p>
        </div>
      </Link>

      <div className="mt-3 flex gap-4">
        {session && (<><Link
          href={`/products/edit/${product._id}`}
          className="text-blue-600 font-semibold"
        >
          Edit
        </Link>
        <button
            onClick={handleDelete}
            className="text-red-600"
        >
            Delete
        </button></>)}
      </div>

    </div>
  );
};

export default ProductCard;