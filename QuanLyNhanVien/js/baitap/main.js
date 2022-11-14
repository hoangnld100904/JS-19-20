/*
Task
+Thêm nhân viên
+Xóa sinh viên
+Chỉnh sửa thông tin
*/
const dsnv = new DanhSachNhanVien();
const validation = new Validation();
//Custom Function: Get Element By ID
function GetELE(id) {
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
function themNhanVien() {
    //Lấy thông tin từ form
    var user = GetELE('tknv').value;
    var name = GetELE('name').value;
    var email = GetELE('email').value;
    var password = GetELE('password').value;
    var date = GetELE('datepicker').value;
    var basicSalary = GetELE('luongCB').value;
    var position = GetELE('chucvu').value;
    var workTime = GetELE('gioLam').value;
    var isValid = true; //Khởi tạo biến điều kiện để check thông tin của form\
    isValid &= validation.checkEmpty(user, "Tài khoản không được để trống", "tbTKNV") && validation.checkUser(user, "Tài khoản bao gồm 4-6 ký tự, bao gồm chữ, số, dấu gạch dưới", "tbTKNV") && validation.checkExistedUser(user, "Tài khoản đã tồn tại", "tbTKNV", dsnv.mangNV);
    isValid &= validation.checkEmpty(name, "Tên không được bỏ trống", "tbTen") && validation.checkName(name, "Tên chỉ bao gồm chữ", "tbTen");
    isValid &= validation.checkEmpty(email, "Email không được bỏ trống", "tbEmail") && validation.checkEmail(email, "Email không đúng định dạng", "tbEmail");
    isValid &= validation.checkEmpty(password, "Mật khẩu không được để trống", "tbMatKhau") && validation.checkPassword(password, "Mật khẩu phải bao gồm 1 chữ hoa, 1 số, 1 ký tự đặc biệt", "tbMatKhau");
    isValid &= validation.checkEmpty(basicSalary, "Lương không được để trống", "tbLuongCB") && validation.checkBasicSalary(basicSalary, "Lương cơ bản từ 1 triệu đến 20 triệu", "tbLuongCB");
    isValid &= validation.checkPosition(position, "Vui lòng chọn chức vụ", "tbChucVu");
    isValid &= validation.checkEmpty(workTime, "Giờ làm không được bỏ trống", "tbGiolam") && validation.checkWorkTime(workTime, "Giờ làm phải từ 80 đến 200 giờ", "tbGiolam");
    if (isValid) {
        var nv = new NhanVien(user, name, email, password, date, Number(basicSalary), position, Number(workTime))
        nv.xepLoai();
        nv.tongLuong()
        dsnv.themNV(nv);
        hienThiTable(dsnv.mangNV)
        setLocalStorage()
    }
}
function hienThiTable(array) {
    var content = "" //String chứa HTML content
    array.map(function (nv, index) {
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
    GetELE("tableDanhSach").innerHTML = content;
}
//Update user
function capNhatNhanVien() {
    var user = GetELE('tknv').value;
    var name = GetELE('name').value;
    var email = GetELE('email').value;
    var password = GetELE('password').value;
    var date = GetELE('datepicker').value;
    var basicSalary = GetELE('luongCB').value;
    var position = GetELE('chucvu').value;
    var workTime = GetELE('gioLam').value;
    var isValid = true; //Khởi tạo biến điều kiện để check thông tin của form\
    isValid &= validation.checkEmpty(user, "Tài khoản không được để trống", "tbTKNV") && validation.checkUser(user, "Tài khoản bao gồm 4-6 kí tự, bao gồm chữ, số, dấu gạch dưới", "tbTKNV");
    isValid &= validation.checkEmpty(name, "Tên không được bỏ trống", "tbTen") && validation.checkName(name, "Tên chỉ bao gồm chữ", "tbTen");
    isValid &= validation.checkEmpty(email, "Email không được bỏ trống", "tbEmail") && validation.checkEmail(email, "Email không đúng định dạng", "tbEmail");
    isValid &= validation.checkEmpty(password, "Mật khẩu không được để trống", "tbMatKhau") && validation.checkPassword(password, "Mật khẩu phải bao gồm 1 chữ hoa, 1 số, 1 ký tự đặc biệt", "tbMatKhau");
    isValid &= validation.checkEmpty(basicSalary, "Lương không được để trống", "tbLuongCB") && validation.checkBasicSalary(basicSalary, "Lương cơ bản từ 1 triệu đến 20 triệu", "tbLuongCB");
    isValid &= validation.checkPosition(position, "Vui lòng chọn chức vụ", "tbChucVu");
    isValid &= validation.checkEmpty(workTime, "Giờ làm không được bỏ trống", "tbGiolam") && validation.checkWorkTime(workTime, "Giờ làm phải từ 80 đến 200 giờ", "tbGiolam");
    if (isValid) {
        var nvMoi = new NhanVien(user, name, email, password, date, Number(basicSalary), position, Number(workTime));
        nvMoi.xepLoai();
        nvMoi.tongLuong();
        dsnv.capNhatNhanVien(nvMoi);
        setLocalStorage();
        getLocalStorage();
    }
}
//Sort by ranking
function locTheoXepLoai() {
    var rank = GetELE('searchName').value;
    if (rank == '') {
        hienThiTable(dsnv.mangNV)
        return;
    }
    var output = dsnv.mangNV.filter(function (nv) {
        return nv.rank == rank;
    })
    hienThiTable(output)
}
//Delete user
function xoaNhanVien(index) {
    dsnv.xoaNhanVien(index)
    // hienThiTable(dsnv.mangNV)
    setLocalStorage()
    getLocalStorage()
}