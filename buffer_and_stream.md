# Stream And Buffer

## why need to use Buffer Class In NodeJs?

Pure JavaScript is great with Unicode encoded strings, but it does not handle binary data very well. It is not problematic when we perform an operation on data at browser level but at the time of dealing with TCP stream and performing a read-write operation on the file system is required to deal with pure binary data. To satisfy this need Node.js use Buffer, So in this article, we are going to know about buffer in Node.js.

## 1.Buffer in NodeJs

**Buffers in Node.js**: The Buffer class in Node.js is used to perform operations on raw binary data. Generally, Buffer refers to the particular memory location in memory.
Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with binary data, and it can not be resizable. Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.

## Methods to perform the operations on Buffer

| No        |      Method                              |  Description                                         |
|-----------|:----------------------------------------:|-----------------------------------------------------:|
|1          |Buffer.alloc(size)                        | It creates a buffer and allocates size to it.        |
|2          |Buffer.from(initialization)               | It creates a buffer and allocates size to it.        |
|3          |Buffer.write(data)                        | It writes the data on the buffer.                    |
|4          |toString()                                | It read data from the buffer and returned it.        |
|5          |Buffer.isBuffer(object)                   | It checks whether the object is a buffer or not.     |
|6          |Buffer.length                             | It returns the length of the buffer.                 |
|7          |Buffer.copy(buffer,subsection size)       | It copies data from one buffer to another.           |
|8          |Buffer.slice(start, end=buffer.length)    | It returns the subsection of data stored in a buffer.|
|9          |Buffer.concat([buffer,buffer])            | It concatenates two buffers.                         |

## Example

[Buffer example](buffer-example.js)

## 2.Stream in NodeJs

Streams are one of the fundamental concepts of Node.js. Streams are a type of data-handling methods and are used to read or write input into output sequentially. Streams are used to handle reading/writing files or exchanging information in an efficient way.

The official Node.js documentation defines streams as “A stream is an abstract interface for working with streaming data in Node.js.” The stream module provides an API for implementing the stream interface. Examples of the stream object in Node.js can be a request to an HTTP server and process.stdout are both stream instances. In short, Streams are objects in Node.js that lets the user read data from a source or write data to a destination in a continuous manner.

## 2.1 Advantages of Streams over other data handling methods

suppose we have a 10GB file and only 1GB Ram
Time Efficient: We don’t have to wait until entire file has been transmitted. We can start processing data as soon as we have it.
Memory Efficient: We don’t have to load huge amount of data in memory before we start processing.

## 2.2 Types of Streams in Node.js: There are namely four types of streams in Node.js

Writable: We can write data to these streams. Example: [fs.createWriteStream()](example-stream/readable-stream.js) \
Readable: We can read data from these streams. Example:  [fs.createWriteStream()](example-stream/readable-stream.js) \
Duplex: Streams that are both, Writable as well as Readable. Example: net.socket \
Transform: Streams that can modify or transform the data as it is written and read. Example: zlib.createDeflate \

## 2.3 read data with Stream

example: read data with [fs.createReadStream()](example-stream/read-stream.js) \

## 2.4 write data with Stream

example: read data with [fs.createWriteStream()](example-stream/write-stream.js) \

## 2.5 Piping Stream with nodeJs

The readable.pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable (lấy dữ liệu đầu ra từ một stream làm đầu vào trong streams khác)

example: pipe stream with [pipe() method](example-stream/write-stream.js)

## 2.5 Piping Chaining Stream with nodeJs

example: pipe chaining with [pipe() method](example-stream/piping-chaining.js)

## 2.6 Write big file with Stream

example: write big file [example](example-stream/write-large-file.js)

## 2.7 Read big file with stream

example: write big file [example](example-stream/write-large-file.js)