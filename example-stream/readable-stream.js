// Sample JavaScript Code for creating
// a Readable Stream
// Accessing streams
import { Readable } from 'stream';

// Reading the data
const inStream = new Readable({
	read() { }
});

// Pushing the data to the stream
inStream.push('GeeksForGeeks : ');
inStream.push(
	'A Computer Science portal for Geeks');

// Indicates that no more data is
// left in the stream
inStream.push(null);

// Echoing data to the standard output
inStream.pipe(process.stdout);
