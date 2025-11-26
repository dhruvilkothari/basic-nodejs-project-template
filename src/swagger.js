const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

console.log("Path:", __dirname+"/routes/v1/*.js");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Docs",
      version: "1.0.0",
      description: "API documentation for my project",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },
  apis: [__dirname + "/routes/v1/*.js"], // path where your route files are
};

const specs = swaggerJsDoc(options);

module.exports = { swaggerUi, specs };
