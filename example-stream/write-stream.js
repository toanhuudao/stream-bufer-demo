import { createWriteStream } from "fs";
let data = 'write more text here!';
 
//Sử dụng phương thức createWriteStream
const writerStream = createWriteStream('example-stream\\output.txt');
 
// Ghi dữ liệu vào file
writerStream.write(data);
 
// Đánh dấu đây là cuối file
writerStream.end();
 
// Bắt sự kiện finish của Streams
writerStream.on('finish', function() {
    console.log("Write done.");
});
// Bắt sự kiện error khi xảy ra lỗi 
writerStream.on('error', function(err){
   console.log(err.stack);
});