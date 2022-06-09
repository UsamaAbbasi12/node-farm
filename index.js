// // Blocking Synchronous Way
// const fs = require("fs");
// const data = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(data);
// const newData = `This is What we know about Avacado ${data} `;
// fs.writeFileSync("./txt/newData.txt", newData);

// // Non Blocking Asynchronous
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error Loading file");
//   } else {
//     console.log(data);
//   }
// });
// console.log("This is Outside REadfile");

const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/" || path === "/overview") {
    res.end("Hello This is Overview");
  } else if (path === "/product") {
    res.end("This is Product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running");
});
