var request = require("request");

var options = {
  method: "DELETE",
  url: "https://inventory-fac4.restdb.io/rest/users/560bd66201e7ab1b2648f4e7",
  headers: {
    "cache-control": "no-cache",
    "x-apikey": "560bd47058e7ab1b2648f4e7",
    "content-type": "application/json",
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
