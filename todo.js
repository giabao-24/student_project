function xoa_lap() {
  let s = "aabbc";
  let new_s = new Set(s);
  let s1 = "";
  for(let char of new_s) {
    s1 += char;
  }
  console.log(s1);
}
function find_max() {
  let s = "ckka";
  let new_s = new Set(s);
  let s1 = "";
  console.log(new_s);
}
find_max();