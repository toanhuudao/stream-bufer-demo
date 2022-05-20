import { createReadStream, createWriteStream } from "fs";
 
// Đọc stream đầu vào là file input bằng phương thức createReadStream
let readerStream = createReadStream('example-stream\\pipe-input.txt');
 
// Ghi stream đầu ra là file input bằng phương thức createWriteStream
let writerStream = createWriteStream('example-stream\\pipe-output.txt');
 
//Sử dụng khái niệm về Pipping để dùng dữ liệu đầu ra của readerStream làm giá trị đầu ra của writerStream
readerStream.pipe(writerStream);