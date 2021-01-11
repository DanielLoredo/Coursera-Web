const fs = require("fs");
const http = require("http");
const server = http.createServer();

/////////////OPTION 1
// server.on("request", (req, res) => {
//   const page = fs.readFile("test-file.txt", (err, data) => {
//   if(err) {
//   console.log(err);
//   }
//     res.end(data);
//   });
// });

////////////OPTION 2
// server.on("request", (req, res) => {
//   const readable = fs.createReadStream("test-file.txt");
//   readable.on("data", (chunk) => {
//     res.write(chunk);
//   });
//   readable.on("end", () => {
//     res.end();
//   });
//   readable.on("error", (err) => {
//     res.statusCode = 500;
//     res.end("File not found");
//   });
// });

////////////OPTION 3
server.on("request", (req, res) => {
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening....");
});
