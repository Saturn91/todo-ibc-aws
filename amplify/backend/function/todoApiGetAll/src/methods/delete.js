const deleteFun = (event) => {
  if (event.httpMethod !== "DELETE") {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      statusCode: 400,
      body: JSON.stringify({ message: "unexpected method!" }),
    };
  }

  // Safely parse the event body
  let toDeleteToDo;
  try {
    const requestBody = JSON.parse(event.body);
    toDeleteToDo = {
      id: requestBody.id,
      description: requestBody.description,
      done: requestBody.done,
    };
  } catch (error) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid JSON format" }),
    };
  }

  const mockToDos = [
    {
      id: 1,
      description: "make fun of rust developers",
      done: true,
    },
    {
      id: 2,
      description: "get ready for the responses",
      done: false,
    },
  ];

  let old;
  try {
    old = mockToDos.find((todo) => todo.id == toDeleteToDo.id);
  } catch (error) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      statusCode: 401,
      body: JSON.stringify({ message: "invalid id" }),
    };
  }

  if (!old) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      statusCode: 404,
      body: JSON.stringify({ message: "invalid todo" }),
    };
  }

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(
      mockToDos.filter((todo) => todo.id !== toDeleteToDo.id)
    ),
  };
};

module.exports = deleteFun;
