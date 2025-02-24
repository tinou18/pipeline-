import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  }, []);

  const addProduct = () => {
    axios.post("http://localhost:5000/products", newProduct).then(res => {
      setProducts([...products, res.data]);
      setNewProduct({ name: "", price: "", description: ""});
    });
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then(() => {
      setProducts(products.filter(p => p._id !== id));
    });
  };

  return (
    <div>
      <h1>Produits</h1>
      <input type="text" placeholder="Nom" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input type="text" placeholder="Prix" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
      <input type="text" placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
      <button onClick={addProduct}>Ajouter Produit</button>

      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - {p.price}€ - {p.description}
            <button onClick={() => deleteProduct(p._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
