//Sử dụng thư viện fs
import { createReadStream, createWriteStream } from "fs";
 
//Sử dụng thư viện zlib dùng để nén file
import { createGzip } from 'zlib';
 
//Phương thức có nhiệm vụ nén file
const gzip = createGzip()
 
//Đọc streams để lấy kết quả đầu ra 
const readStream = createReadStream('example-stream\\input.txt', 'utf8')
 
//Ghi streams ra file mới
const writeStream = createWriteStream('example-stream\\zip-output.txt.gz')
 
//Sử dụng kỹ thuật piping Chaining  
readStream.pipe(gzip).pipe(writeStream)