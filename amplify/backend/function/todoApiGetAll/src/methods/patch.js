const patch = (event) => {
  if (event.httpMethod !== "PATCH") {
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
  let newTodo;
  try {
    const requestBody = JSON.parse(event.body);
    newTodo = {
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
    old = mockToDos.find((todo) => todo.id == newTodo.id);
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

  if (!newTodo.description || !!newTodo.done) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      statusCode: 400,
      body: JSON.stringify({ message: "description and done are required" }),
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
      mockToDos.map((todo) => {
        if (todo.id == old.id) return newTodo;
        return todo;
      })
    ),
  };
};

module.exports = patch;
