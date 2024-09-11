// import http from "http";
// import fs from "fs/promises";
import url from "url";
import path from "path";
import "dotenv/config";
import express from "express";

const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", (req, res) => {
  let filePath = path.join(__dirname, "public", "index.html");
  res.status(200).sendFile(filePath);
});

app.get("/about", (req, res) => {
  let filePath = path.join(__dirname, "public", "about.html");
  res.status(200).sendFile(filePath);
});

app.get("/contact-me", (req, res) => {
  let filePath = path.join(__dirname, "public", "contact-me.html");
  res.status(200).sendFile(filePath);
});

app.get("*", (req, res) => {
  let filePath = path.join(__dirname, "public", "404.html");
  res.status(404).sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// middleware
// const logger = (req, res, next) => {
//   console.log(req.method, req.url);
//   console.log("filename:", __filename);
//   console.log("dirname:", __dirname);
//   next();
// };

// const server = http.createServer((req, res) => {
//   logger(req, res, async () => {
//     try {
//       if (req.method === "GET") {
//         let filePath;
//         if (req.url === "/") {
//           filePath = path.join(__dirname, "public", "index.html");
//         } else if (req.url === "/about") {
//           filePath = path.join(__dirname, "public", "about.html");
//         } else if (req.url === "/contact-me") {
//           filePath = path.join(__dirname, "public", "contact-me.html");
//         } else {
//           throw new Error("Path not found");
//         }

//         const data = await fs.readFile(filePath);
//         res.setHeader("Content-Type", "text/html");
//         res.write(data);
//         res.end();
//       } else {
//         throw new Error("Unaccepted method");
//       }
//     } catch (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end();
//     }
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
