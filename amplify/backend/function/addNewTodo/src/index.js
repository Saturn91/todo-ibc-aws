/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  let description;

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "unexpected method!" }),
    };
  }

  // Safely parse the event body
  try {
    const requestBody = JSON.parse(event.body);
    description = requestBody.description;
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid JSON format" }),
    };
  }

  if (!description) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "description is required" }),
    };
  }

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify([
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
      {
        id: 3,
        description,
        done: false,
      },
    ]),
  };
};
