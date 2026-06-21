
const ProductDetails = ({product}) => {

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10">

      <div>
        <img
          src={product.image}
          width={400}
          height={400}
          alt={product.title}
          className="rounded-lg"
        />
      </div>


      <div>

        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>


        <p className="mt-4">
          {product.description}
        </p>


        <p className="mt-3">
          Brand:
          <span className="font-bold">
            {" "}{product.brand}
          </span>
        </p>


        <p>
          Category:
          <span className="font-bold">
            {" "}{product.category}
          </span>
        </p>


        <p>
          Rating ⭐ {product.rating}
        </p>


        <p className="text-xl mt-4">
          ${product.price}
        </p>


      </div>


    </div>
  );
};



export async function getServerSideProps({params}){

  const res = await fetch(
    `http://localhost:3000/api/products/${params.id}`
  );


  const product = await res.json();


  return {
    props:{
      product
    }
  };

}



export default ProductDetails;