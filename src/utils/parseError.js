const parseError = (err) => {
  let parsed = JSON.parse(err.request.response).message
    .split(/[:,] /).slice(1);
  // console.log(parsed);
  let temp = {};
  for(let i = 0; i < parsed.length; i += 2) {
    temp[parsed[i]] = parsed[i + 1];
  }
  // console.log(temp);
  return temp;
}

export default parseError
