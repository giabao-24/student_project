let s = [{id:1,ten:"Gia Bao"}];
// index.js
const mongoose = require("mongoose");
// Kết nối MongoDB local (mặc định port 27017)
mongoose.connect("mongodb://localhost:27017/aaa")
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch(err => console.error("❌ Lỗi:", err));

// Tạo Schema
const userSchema = new mongoose.Schema({
  id: Number,
  username: String
});

// Tạo Model
const User = mongoose.model("User", userSchema);

// Thêm dữ liệu
// Thêm nhiều dữ liệu
async function addUsers() {
  const users = await User.insertMany([
    { id: 3, username: "Gia Bảo" },
    { id: 1, username: "Nguyen Tuan Anh" },
    { id: 2, username: "Linh Chi" }
  ]);
  console.log("📌 Đã lưu users:", users);
}

//
async function deleteUsersById() {
  const result = await User.deleteMany({ id: 3 });
  console.log(`🗑️ Đã xóa ${result.deletedCount} user(s) có id = "3"`);
}
async function delete_giabao() {
  const result = await User.deleteOne({username: "Gia Bảo"});
  console.log(`🗑️ Đã xóa ${result.deletedCount} user(s) có username = "Gia Bao"`);
}
async function change() {
  const result = await User.updateOne({username:"Linh Chi"},{id:3});
}
function change2() {
   for(let i = 0;i < s.length;i++) {
    if(s[i].id === 1) {
      console.log(s[i].ten);
    }
   }
}
let real_id = 3;
async function listUsersForOf(real_id) {
  const users = await User.find();
  for (const u of users) {
    if(u.id === real_id) {
      console.log("Ket noi thanh cong ten nguoi dung co id la " + real_id + " ten " + u.username);
    }
  }
}
change2();
aaaa