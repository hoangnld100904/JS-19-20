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
function setLocalStorage() {
    //?lưu mảng SV xuống localStorage
    //? dữ liệu của localStorage hay BE là dữ liệu JSON
    //?input: array (mangSV) => JSON

    //localStorage, JSON: đối tượng cung cấp sẵn của JS
    //stringify : array, object => JSON
    //setItem("tên local", JSON)
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
    //? 1 .getItem("tên local") => trả kết là JSON
    //? 2. parse: JSON => mảng
    //? 3. lưu vào dssv.mangSV

    // mangSV = [] => push, for
    //!mangSV  = null/undefine => không dùng được push, for
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }

}
getLocalStorage();
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
    setLocalStorage()
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
function timNhanVien(){
    
}
//Update user
function capNhatNhanVien(){
    var user= GetELE('tknv').value;
    var name= GetELE('name').value;
    var email=GetELE('email').value;
    var password= GetELE('password').value;
    var date= GetELE('datepicker').value;
    var basicSalary= Number(GetELE('luongCB').value);
    var position= GetELE('chucvu').value;
    var workTime= Number(GetELE('gioLam').value);
    var nvMoi = new NhanVien(user, name, email, password, date, basicSalary, position, workTime);
    nvMoi.xepLoai();
    nvMoi.tongLuong();
    dsnv.capNhatNhanVien(nvMoi);
    setLocalStorage();
    getLocalStorage();
}
//Sort by ranking
function locTheoXepLoai(){ 
    var rank= GetELE('searchName').value;
    if (rank==''){
        hienThiTable(dsnv.mangNV)
        return;
    }
    var output= dsnv.mangNV.filter(function(nv){
        return nv.rank == rank;
    })
    hienThiTable(output)
}
//Delete user
function xoaNhanVien(index){
    dsnv.xoaNhanVien(index)
    // hienThiTable(dsnv.mangNV)
    setLocalStorage()
    getLocalStorage()
}