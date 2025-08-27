import products from "../data/products";

export default function ProductCard() {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price:{product.price}</p>
        </div>
      ))}
    </>
  );
}
