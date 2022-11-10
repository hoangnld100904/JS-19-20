/*
Task
+Thêm nhân viên
+Xóa sinh viên
+Chỉnh sửa thông tin
*/
var dsnv = new DanhSachNhanVien();
//Custom Function: Get Element By ID
function GetELE(id){
    return document.getElementById(id)
}
function themNhanVien(){
    //Lấy thông tin từ form
    var user= GetELE('tknv').value;
    var name= GetELE('name').value;
    var email=GetELE('email').value;
    var password= GetELE('password').value;
    var date= GetELE('datepicker').value;
    var basicSalary= Number(GetELE('luongCB').value);
    var position= GetELE('chucvu').value;
    var workTime= Number(GetELE('gioLam').value);
    var nv = new NhanVien(user, name, email, password, date, basicSalary, position, workTime)
    nv.xepLoai();
    nv.tongLuong()
    dsnv.themNV(nv);  
    hienThiTable(dsnv.mangNV)
}
function hienThiTable(array){
    var content="" //String chứa HTML content
    array.map(function(nv, index){
        content +=
       ` <tr>
            <td>${nv.user}</td>
            <td>${nv.name}</td>
            <td>${nv.email}</td>
            <td>${nv.date}</td>
            <td>${nv.position}</td>
            <td>${nv.totalSalary}</td>
            <td>${nv.rank}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNhanVien(${index})" >Xóa</button>
            </td>
        </tr>`
    });
    GetELE("tableDanhSach").innerHTML= content;
}
//Find user
function timNhanVien(array, user){
    var nv = array.find(function(nv){
        return nv.user == user
    })
    return nv
} 
function xoaNhanVien(index){
    dsnv.mangNV.splice(index,1)
    hienThiTable(dsnv.mangNV)
}