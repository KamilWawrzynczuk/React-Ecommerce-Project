import { useState } from "react";
export function DataFetcher() {
  const [data, fetchData] = useState([]);
  function getAPIData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => fetchData(data));
  }
  return [data, fetchData];
}
