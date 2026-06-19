import ProductCard from "@/components/ProductCard";

const Products = ({ products }) => {
  return (
    <div>
       <h1>Products</h1>
       <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard 
                        key={product.id} 
                        product={product}
                        />
                ))}
                </div>
            </div>
        </div>
    </div>

     


  );
};


export async function getStaticProps(){

  const res = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await res.json();


  return {
    props:{
      products:data.products
    }
  };

}


export default Products;