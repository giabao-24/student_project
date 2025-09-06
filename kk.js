const prompt = require("prompt-sync")();


let arr = [];
arr.splice(2,0,"Nguyen Van Nam","Cao Hoang Nam");
arr.splice(0,2);


function add_book() {
   let book_id = Number(prompt("Nhập ID Sách "));
   let book_name = prompt("Nhập tên sách ");
   let author_name = prompt("Nhập tên tác giả ");
   let public_year = Number(prompt("Nhập năm xuất bản "));
   for (let i = 0; i < arr.length; i++) {
     if (arr[i].book_id === book_id) {
       console.log("ID sách bị trùng lặp vui lòng thử lại!");
       return;
     }
   }
   arr.push({book_id, book_name, author_name, public_year});
   console.log("Added!");
}
function remove_book_byid() {
   let id = Number(prompt("Nhập ID sách cần xóa: ")); 
   let count_position = 0;
   for(let i = 0;i < arr.length;i++) {
    if(arr[i].book_id === id) {
       break;
    }
    count_position++;
   }
    if (count_position === arr.length) {
       console.log("Không tìm thấy sách với ID này!");
       return;
   } else {
   arr.splice(count_position,1);
   console.log("Xoá thành công!");
   }
}
function update_book() {
  display();
  let id_needed = prompt("Nhap id sach can sua thong tin");
  let found = false;
  for(let i = 0;i < arr.length;i++) {
    if(id_needed === arr[i].id) {
       found = true;
       console.log("Found ! Nhap thong tin cần sửa");
       let book_name = prompt("Nhập tên sách");
       arr[i].book_name = book_name;
       let author_name = prompt("Nhập tên tác giả");
       arr[i].author_name = author_name;
       let public_year = prompt("Nhập năm xuất bản");
       arr[i].public_year = public_year;
       break;
    }
  }
  if(!found) {
    console.log("ID " + id_needed + " không tồn tại");
  } else {
    console.log("Đã chỉnh sửa");
  }
}
function display() {
  arr.sort((a,b) => a.id - b.id);
  if (arr.length === 0) {
    console.log("Thư viện sách rỗng");
  } else {
    console.log(arr);
  }
}

function list() {
  while (true) {
    let choice = Number(prompt("Nhập lựa chọn:\n1. Xem sách\n2. Thêm sách\n3.Xóa sách\n4.Cập nhật sách\n-1. Thoát\n"));

    if (choice === 1) {
      display();
    } else if (choice === 2) {
      add_book();
    } else if (choice === -1) {
      break;
    } else if(choice === 3) {
      remove_book_byid();
    } else if(choice === 4) {
      update_book();
    }
     else {
      console.log("Lựa chọn không hợp lệ!");
    }
  }
}

list();
