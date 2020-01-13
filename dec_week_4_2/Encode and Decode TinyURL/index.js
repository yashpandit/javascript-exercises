let obj = {};
const origin = "http://tinyurl.com/";

const encode = (longUrl) => {
  const randomString = Math.random().toString(36).substring(5);
  obj[randomString] = longUrl;
  return origin + randomString;

};

const decode = (shortUrl) => {
  let getKey = shortUrl.split(origin);
  return obj[getKey[1]];
};