import ProductDetails from "@/components/ProductDetails";


const Product = ({ product }) => {

  return (
    <ProductDetails product={product} />
  );

};

export async function getStaticPaths(){

  const res = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await res.json();


  const paths = data.products.map((product)=>({
    params:{
      id: product.id.toString()
    }
  }));


  return {
    paths,
    fallback:false
  };

}



export async function getStaticProps({params}){

  const res = await fetch(
    `https://dummyjson.com/products/${params.id}`
  );


  const product = await res.json();


  return {
    props:{
      product
    }
  };

}
export default Product;