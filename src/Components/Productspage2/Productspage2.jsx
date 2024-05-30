import React, { useState, useEffect, useCallback } from 'react';
import "./Productspage2.css";
import jsPDF from 'jspdf';

const Productspage2 = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productionDate, setProductionDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState('expiryDate');
  const [editIndex, setEditIndex] = useState(null);

  const sortProducts = useCallback(() => {
    const sorted = [...products];
    if (sortBy === 'productionDate') {
      sorted.sort((a, b) => new Date(a.productionDate) - new Date(b.productionDate));
    } else if (sortBy === 'expiryDate') {
      sorted.sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
    } else if (sortBy === 'quantity') {
      sorted.sort((a, b) => a.quantity - b.quantity);
    }
    setProducts(sorted);
  }, [products, sortBy]);

  useEffect(() => {
    sortProducts();
  }, [products, sortBy, sortProducts]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      productionDate: productionDate.toISOString().split('T')[0],
      expiryDate: expiryDate.toISOString().split('T')[0],
      description: description,
      image: URL.createObjectURL(image),
      quantity: quantity
    };

    if (editIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }

    setProductName("");
    setProductionDate(new Date());
    setExpiryDate(new Date());
    setDescription("");
    setImage(null);
    setQuantity(1);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const downloadQRCodeTable = () => {
    const doc = new jsPDF();
    doc.text("QR Code Data", 10, 10);
    let y = 20;
    products.forEach((product) => {
      doc.text(`Name: ${product.name}, Production Date: ${product.productionDate}, Expiry Date: ${product.expiryDate}, Quantity: ${product.quantity}`, 10, y);
      doc.addImage(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        `Name: ${product.name}, Production Date: ${product.productionDate}, Expiry Date: ${product.expiryDate}, Quantity: ${product.quantity}`
      )}&size=100x100`, 'JPEG', 10, y + 10, 50, 50);
      y += 70;
    });
    doc.save("qr_code_table.pdf");
  };

  return (
    <div className="product-page">
      <div className="product-page1">
      <h2>Product Services</h2>
      <form onSubmit={handleAddProduct} className="product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="date"
          value={productionDate.toISOString().split('T')[0]}
          onChange={(e) => setProductionDate(new Date(e.target.value))}
        />
        <input
          type="date"
          value={expiryDate.toISOString().split('T')[0]}
          onChange={(e) => setExpiryDate(new Date(e.target.value))}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="productionDate">Sort by Production Date</option>
          <option value="expiryDate">Sort by Expiry Date</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
        <button type="submit">{editIndex !== null ? 'Update Product' : 'Add Product'}</button>
      </form>
      </div>

      <div className="service-cards-container">
        {products.map((product, index) => (
          <div key={index} className="service-card">
            <img src={product.image} alt={"Product " + (index + 1)} />
            <h3>{product.name}</h3>
            <div className="product-details">
              <p><strong>Production Date:</strong> {product.productionDate}</p>
              <p><strong>Expiry Date:</strong> {product.expiryDate}</p>
              <p>{product.description}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
            </div>
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="qr-code-table-container">
        <h2>QR Code Data</h2>
        <button onClick={downloadQRCodeTable}>Download QR Code Table as PDF</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Production Date</th>
              <th>Expiry Date</th>
              <th>Quantity</th>
              <th>QR Code</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.productionDate}</td>
                <td>{product.expiryDate}</td>
                <td>{product.quantity}</td>
                <td>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                      `Name: ${product.name}, Production Date: ${product.productionDate}, Expiry Date: ${product.expiryDate}, Quantity: ${product.quantity}`
                    )}&size=100x100`}
                    alt="QR Code"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Productspage2;
