/*
split by /

filter method with param urlPiece
  match method with regex
    if urlPiece has a . return

some loop
  if string contains .


split by /

filter
  contains . // gives us new filter



*/

function domainName(url) {
  let array = url.split('/');
  let urlWithDotOrDots = array.filter(urlPiece => {
    return urlPiece.match(/[.]/);
  });

  let splitAgain = urlWithDotOrDots[0].split('.');
  let resultArr = [];

  for (let idx = 0; idx < splitAgain.length; idx++) {
    if (splitAgain[0] === 'www') {
      splitAgain.shift();
    }
  }

  resultArr.push(splitAgain[0]);

  return resultArr[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));