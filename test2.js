const { MongoClient } = require("mongodb");
const prompt = require("prompt-sync")();

// Kết nối MongoDB local
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Kết nối MongoDB thành công!");
    const db = client.db("aaa");           // database "aaa"
    const users = db.collection("users");  // collection "users"
    let id = Number(prompt("nhập id"));
    let username1 = prompt("Nhập user name");
    await users.insertOne({id:id,username:username1});
    // Lấy tất cả document
    const allUsers = await users.find().toArray();
    const usernames = [];
    for (let user of allUsers) {
      if (user.id < 10) {
        usernames.push(user.username);
      } else {
        // Nếu id >= 10, bỏ qua hoặc xử lý khác
        // console.log(`Bỏ qua ${user.username}`);
      }
    }
    console.log("📌 Username có id < 10:", usernames);

  } catch (err) {
    console.error("❌ Lỗi:", err);
  } finally {
    await client.close();
  }
}
async function add_one() {
  try {
    await client.connect();
    console.log("Conected !!!");
    const db = client.db("aaa");
    const users = db.collection("users");
    let new_arr = [];
    await users.insertMany([{id:5,username:"Nguyen Quang"},
      {id:6,username:"Tuong Nguyen"},
      {id:7,username:"Tuong Vy"}]);
    let allUsers = await users.find().toArray();
    for(let user of allUsers) {
      new_arr.push(user);
    }
    console.log(new_arr);
  } catch (error) {
    console.log("Can't Connected!");
  } finally {
     //aaaa;
     client.close();
  }
}
async function sort_by_name() {
  try {
    await client.connect();
    console.log("connected!");
    const db = client.db("aaa");
    const users = db.collection("users");
    let new_arr = [];
    let allUsers = await users.find().toArray();
    await users.sort((a,b) => a.id - b.id);
    for(let user of allUsers) {
      new_arr.push(user);
    }
    new_arr.sort((a,b) => a.id - b.id);
    for(let i = 0;i < new_arr.length;i++) {
      console.log(new_arr[i].id + " " + new_arr[i].username);
    }
  } catch (error) {
    
  }
}
sort_by_name();
