import connectDB from "@/lib/db";
import Product from "@/models/Product";

export default async function handler(req, res) {

  await connectDB();

  const { id } = req.query;

  if (req.method === "GET") {

    const product =
      await Product.findById(id);

    return res.status(200).json(product);
  }

}