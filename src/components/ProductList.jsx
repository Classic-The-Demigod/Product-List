

import Products from "../data.json";
import Product from "./Product";

function ProductList() {
  return (
    <div>
      <h1 className="ml-4 mb-4 text-4xl font-bold text-rose-500">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-y-7">
        {Products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
