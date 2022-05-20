// import { readFile } from "fs";
// readFile("example-stream\\bigfile.txt","utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

import { createReadStream } from "fs";
 
// Đọc file bằng streams bằng phương thức createReadStream
const readerStream = createReadStream('bigfile.txt');
 
// Kiểu mã hóa dùng là UTF8
readerStream.setEncoding('UTF8');
 
// Sự kiện khi đọc data
readerStream.on('data', function(chunk) {
   console.log(chunk)
});