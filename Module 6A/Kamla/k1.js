function paragram(a) {
  let f = new set();
  a = a.toLowerCase();
  for (let i of d) {
    if (i >= "a" && i <= "z") {
      f.add(i);
    }
  }
  if (f.size === 26) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(paragram("The quick brown fox jumps over a lazy dog"));
