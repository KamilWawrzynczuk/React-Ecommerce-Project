import React, { useState, useEffect, useContext } from "react";
import ChooseCollection from "./ChooseCollection";
import CoverPhoto from "./CoverPhoto";
import Gallery from "./Gallery";
import { fetchContext } from "../../functions/fetchContext";
import { dataContext } from "../../functions/Context";

function Home() {

  const { state, dispatch } = useContext(fetchContext);
  const { userState, dispatchUserState } = useContext(dataContext);

  // const [loading, setLoading] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f598709df1msh814c5a1fb3c3a89p1e8989jsne8da2617eff4',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };

  useEffect(
    () => async () => {
      const res = await fetch(
        "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
        options
      );
      const data = await res.json();
      dispatch({ type: "FETCH_PRODUCTS_MAN", payload: data.results });
      dispatchUserState({type:"IS_LOADING"});
    },
    []
  );


  return (
    <div>
      <CoverPhoto style={{ marginBottom: "50px" }} />
      <ChooseCollection />
      <Gallery />
    </div>
  );
}

export default Home;
