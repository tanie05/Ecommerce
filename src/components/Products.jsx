import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  
  const [data, setData] = useState([]);

  const fetchInfo = () => { 
    return fetch('https://fakestoreapi.com/products') 
            .then((res) => res.json()) 
            .then((d) => {
              console.log(d[0])
              setData(d)

            }) 
    }
    
    useEffect(() => {
      fetchInfo();
    }, [])

  return (
    <Container>
      {data.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;