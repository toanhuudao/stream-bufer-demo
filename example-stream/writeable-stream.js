// Sample JavaScript Code for
// Writable Stream
// Accessing Streams
import { Writable } from 'stream';

// Whatever is passed in standard
// input is out streamed here.
const outStream = new Writable({

	// The Write function takes three
	// arguments
	// Chunk is for Buffer
	// Encoding is used in case we want
	// to configure the stream differently
	// In this sample code, Encoding is ignored
	// callback is used to indicate
	// successful execution
	write(chunk, encoding, callback) {
		console.log(chunk.toString());
		callback();
	}

});

outStream.write('some data');
outStream.write('some more data');
outStream.end('done writing data');

// Echo the data to the standard output
process.stdin.pipe(outStream);
