import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";
import products from "../data/products";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find(p => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <ProductPage product={product} relatedProducts={related} />
  );
}