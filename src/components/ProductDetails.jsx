const ProductDetails = ({ product }) => {
  return (
    <div className="bg-white">
      <div className="pt-6">

        {/* Image Gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">

          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className="aspect-square size-full rounded-lg object-cover"
            />
          ))}

        </div>


        {/* Product Info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">

          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

          </div>



          {/* Price + Details */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">

            <p className="text-3xl text-gray-900">
              ${product.price}
            </p>


            <div className="mt-6">

              <p>
                ⭐ Rating: {product.rating}
              </p>

              <p>
                Brand: {product.brand}
              </p>

              <p>
                Category: {product.category}
              </p>

            </div>



            <button
              className="
              mt-10 
              w-full 
              rounded-md 
              bg-indigo-600 
              px-8 
              py-3 
              text-white
              hover:bg-indigo-700
              "
            >
              Add to bag
            </button>


          </div>



          {/* Description */}
          <div className="py-10 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

            <h3 className="text-lg font-medium">
              Description
            </h3>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>


            <div className="mt-8">

              <h3 className="font-medium">
                Details
              </h3>

              <ul className="mt-4 list-disc pl-5 text-gray-600">

                <li>
                  Stock: {product.stock}
                </li>

                <li>
                  Discount: {product.discountPercentage}%
                </li>

                <li>
                  Warranty: {product.warrantyInformation}
                </li>

                <li>
                  Shipping: {product.shippingInformation}
                </li>

              </ul>

            </div>


          </div>


        </div>

      </div>
    </div>
  );
};


export default ProductDetails;