import Link from "next/link";

const ProductCard = ({product}) => {

  return (
    <Link href={`/products/${product.id}`}>
        <div class="group relative hover:shadow-lg transaction">
            <img src={product.thumbnail} alt="Front of men&#039;s Basic Tee in white." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div class="mt-4 flex justify-between">
            <div>
                <h3 class="text-sm text-gray-700">
                <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {product.title}
                </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
        </div>
    </Link>
      

  );

};

export default ProductCard;