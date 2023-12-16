import React, { useState, useEffect } from 'react';

export default function ViewProduct() {
  const [id, setId] = useState(1);
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    image: '',
  });

  useEffect(
    function () {
      fetch('https://fakestoreapi.com/products/' + id)
        .then((res) => res.json())
        .then((json) =>
          setProduct({
            title: json.title,
            description: json.description,
            price: json.price,
            image: json.image,
          })
        );
    },
    [id]
  );

  function next() {
    if (id < 20) setId((id) => id + 1);
  }

  function previous() {
    if (id > 1) setId((id) => id - 1);
  }

  return (
    <div>
      <h1>Products</h1>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
      <h3>{product.title}</h3>
      <h4>$ {product.price}</h4>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} height={300} />
    </div>
  );
}
