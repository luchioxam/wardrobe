function ProductCard({ product }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
      </div>
    </div>
  );
}

export default ProductCard;
