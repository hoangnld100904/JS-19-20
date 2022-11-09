function NhanVien(user, name, email, pass, date, basicSalary, position, workTime) {
    this.user = user;
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.date = date;
    this.basicSalary = basicSalary;
    this.position = position;
    this.workTime = workTime;
    this.rank = ''
    this.totalSalary = 0;
    //Tổng lương
    this.tongLuong= function(){
        switch(this.position){
            case "Sếp": 
            this.totalSalary=basicSalary*3;
            break;
            case "Trưởng phòng":
            this.totalSalary=basicSalary*2;
            break;
            case "Nhân viên":
            this.totalSalary=basicSalary;
            break;
        }
    }
    //Xếp loại
    this.xepLoai = function(){
        if (this.workTime >= 192) {
            this.rank = 'Xuất sắc'
        } else if (this.workTime >= 176) {
            this.rank = 'Giỏi'
        } else if (this.workTime >= 160) {
            this.rank = 'Khá'
        } else {
            this.rank = 'Trung Bình'
        }
    }
}