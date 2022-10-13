import { useState } from "react";
export function DataFetcher() {
  const [data, fetchData] = useState([]);
  function callJokes(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => getJokes(data));
  }
  return [data, fetchData];
}
