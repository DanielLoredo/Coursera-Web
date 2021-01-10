const fs = require("fs"); //Read and write files
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");

//////////////////////////////////////////////// FILES
// Synchronous way - Blocking flow

// const textIn = fs.readFileSyn("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");


// Asynchronous way - non-blocking flow

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//             fs.writeFile("./txt/final1.txt", `${data2} ${data3}`,"utf-8", (err) => {
//                 console.log("the file was succesfully written");
//             });
//         });
//     }); 
// });
// console.log("wait..."); 

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    //Overview Page
    if(pathname === "/" || pathname === "/overview") {

        const cardsHtml = dataObj.map((element) => {
            return replaceTemplate(tempCard, element);
        });

        const overview = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

        res.writeHead(200, { "Content-type" : "text/html" });
        res.end(overview);

    //Product Page
    } else if (pathname === "/product") {
    
        const product = dataObj[query.id];
        const productHTML = replaceTemplate(tempProduct, product);

        res.writeHead(200, { "Content-type": "text/html"});
        res.end(productHTML);

    //API Page    
    } else if (pathname === "/api") {

        res.writeHead(200, {
            "Content-type": "application/json"
        });
        res.end(data);
        
    //Not Found Page
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello-world"
        });
        res.end("<div>Page not Found</div>");
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port");
});

