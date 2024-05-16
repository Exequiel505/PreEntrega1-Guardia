const ItemDetail = ({product}) => {
  return (
    <div>
      <h1>Detail Container</h1>
      <img src={product.image} />
      <div>
        <p>{product.name}</p>
        <p>precio: {product.price}</p>
        <p>stock: {product.stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
