import Item from "./Item";
const itemList = ({products}) => {
  return (
    <div>
      {products.map((product) => (
        <Item key={product.id} product = {product}/>
      ))}
    </div>
  )
}

export default itemList