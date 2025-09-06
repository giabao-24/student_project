function xoa_lap() {
  let s = "aabbc";
  let new_s = new Set(s);
  let s1 = "";
  for(let char of new_s) {
    s1 += char;
  }
  console.log(s1);
}
xoa_lap();