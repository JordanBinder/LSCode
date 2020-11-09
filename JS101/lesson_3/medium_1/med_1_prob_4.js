// Is there a difference between these implementations, other than the method she used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}


function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// aka, push vs. concat.

//If we are adding to something that exists (the rolling buffer) I think it makes more sense to use push which is mutating the existing array.
// Whereas concat is creating a new array
