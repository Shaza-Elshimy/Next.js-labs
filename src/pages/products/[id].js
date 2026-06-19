import { useRouter } from "next/router";

function ProductDetails(){
    const router = useRouter();
    return (
        <div>
            <h1>Product ID  : {router.query.id}</h1>
        </div>
    )
}
export default ProductDetails;