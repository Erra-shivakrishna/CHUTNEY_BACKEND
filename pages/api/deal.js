var request = require("request");

var options = {
  method: "POST",
  url: "https://inventory-fac4.restdb.io/rest/deals",
  headers: {
    "cache-control": "no-cache",
    "x-apikey": "560bd47058e7ab1b2648f4e7",
    "content-type": "application/json",
  },
  body: { field1: "xyz", field2: "abc" },
  json: true,
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
