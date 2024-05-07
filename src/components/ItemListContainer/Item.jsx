const item = ({ product }) => {
  return (
    <div>
      <img src={product.image} />
      <p>{product.name}</p>
      <p> precio : {product.price}</p>
    </div>
  );
};

export default item;
