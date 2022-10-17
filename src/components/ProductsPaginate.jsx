import React, {useState, useEffect} from 'react'
import Product from './Product';

function ProductsPaginate() {

    const [state, setState] = useState();

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);

    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "0ca285cda2msh5680e3ca1426639p1dbd8fjsn7cf7707e8871",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };
    
      useEffect(
        () => async () => {
          setLoading(true);
          const res = await fetch(
            "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
            options
          );
          const data = await res.json();
          setState(data);
          setLoading(false);
        },
        []
      );

  return (
    <Product state={state} loading={loading} />
  )
}

export default ProductsPaginate