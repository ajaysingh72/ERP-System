import React, { useState } from 'react';
import './style.css'

function ProductsManagement() {
  // Mock data for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 10, stock: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20, stock: 50 },
    { id: 3, name: 'Product 3', category: 'Category A', price: 15, stock: 75 },
  ]);

  // Function to add product
  const addProduct = () => {
    // Add a new product with mock data
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      category: 'New Category',
      price: 0,
      stock: 0
    };
    setProducts([...products, newProduct]);
  };

  // Function to edit product
  const editProduct = (productId, updatedProduct) => {
    // Find the product by ID and update it
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  // Function to delete product
  const deleteProduct = (productId) => {
    // Filter out the product with the specified ID
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="products-management">
      <h2>Products Management</h2>
      <button onClick={addProduct}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => editProduct(product.id, { name: 'Updated Product' })}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsManagement;
