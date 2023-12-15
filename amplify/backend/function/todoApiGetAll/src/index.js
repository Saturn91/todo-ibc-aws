const deleteFun = require("./methods/delete");
const get = require("./methods/get");
const patch = require("./methods/patch");
const post = require("./methods/post");

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
    case "POST":
      return post(event);
    default:
      return get(event);
  }
};
