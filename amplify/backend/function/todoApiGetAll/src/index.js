const deleteFun = require("./methods/delete");
const get = require("./methods/get");
const patch = require("./methods/patch");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  switch (event.httpMethod) {
    case "GET":
      return get(event);
    case "PATCH":
      return patch(event);
    case "DELETE":
      return deleteFun(event);
    default:
      return get(event);
  }
};
