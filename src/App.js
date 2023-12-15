import React, { useEffect, useState } from "react";

const App = () => {
  const [response, setResponse] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "GET",
    }).then(async (response) => {
      if (response.ok) {
        setResponse(await response.json());
      } else {
        setResponse("error while loading");
      }
    });
  }, []);

  return <div>{response}</div>;
};
export default App;
