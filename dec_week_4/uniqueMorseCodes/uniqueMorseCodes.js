const uniqueMorseRepresentations = (words) => {
  const morseCodes = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." };
  let transformation = [];

  for (let word of words) {
    let transformLetter = word.split('').reduce((transformedLetter, toTransform) => transformedLetter + morseCodes[toTransform], '');
    if (!transformation.includes(transformLetter)) {
      transformation.push(transformLetter);
    }
  }

  return transformation.length;
};

module.exports = uniqueMorseRepresentations;
