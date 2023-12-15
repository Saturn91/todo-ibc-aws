/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
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
    ]),
  };
};
