function decode(word) {
  const cipher = {
    a: word.length[1],
    b: word.length[2],
    c: word.length[3],
    d: word.length[4]
  };

  const decipheredWord = [];

  for (let i = 0; i < word.length; i++) {
    if (i == "a") {
      decipheredWord.push(cipher.a);
    } else if (i == "b") {
      decipheredWord.push(cipher.b);
    } else if (i == "c") {
      decipheredWord.push(cipher.c);
    } else if (i == "d") {
      decipheredWord.push(cipher.d);
    } else {
      decipheredWord.push(" ");
    }
    return decipheredWord;
  }

  decipheredWord.toString();
  console.log(`The deciphered word is ${decipheredWord}`);
  return decipheredWord;
}