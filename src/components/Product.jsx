import React, { useEffect, useState } from "react";

function Product() {
  const [state, setState] = useState();
  const [state2, setState2] = useState();

  const [loading, setLoading] = useState(false);
 

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'da81b807a3msh6630664edd85f8cp16fe6bjsnf0cc3c8311bf',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
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

  // useEffect(
  //   () => async () => {
  //     const res = await fetch(
  //       "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list?lang=en&country=us",
  //       options
  //     );
  //     const data = await res.json();
  //     setState2(data);
  //   },
  //   []
  // );

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="products_container">
      {state
        ? state.results.map((ele, index) => (
            <div key={index} className="card product_card">
              <div className="product_title">
                <h4> {ele.name} </h4>
                <div>
                  <i className="bi bi-heart" style={{ fontSize: "2rem" }}></i>
                </div>
              </div>
              <div className="product_img">
                {state ? (
                  <img
                    className="card-img-top"
                    src={ele.images[0].url}
                    alt="Card image cap"
                  />
                ) : (
                  //{state.results[index].name}
                  <img className="card-img-top" src="" alt="Card image cap" />
                )}
              </div>

              <div className="card-body product_card_body">
                <div>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="product_card_body_price">
                  <h6 className="card-title">Price: {ele.price.value} Euro</h6>
                  <a href="#" className="">
                    <i
                      className="bi bi-basket"
                      style={{ color: "black", fontSize: "2.5rem" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Product;
