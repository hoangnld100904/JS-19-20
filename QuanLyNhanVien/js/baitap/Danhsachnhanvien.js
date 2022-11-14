function DanhSachNhanVien(){
    //thuộc tính
    this.mangNV=[]
    //Phương thức
    this.themNV= function(nv){
        this.mangNV.push(nv)
    }
    this.timViTri=function(user){
        var viTri=-1;
        viTri= this.mangNV.findIndex(function(nv){
            return nv.user== user;
        })
        return viTri;
    }
    this.xoaNhanVien=function(index){
        dsnv.mangNV.splice(index,1)
    }
    this.capNhatNhanVien= function(nhanVienMoi){
        var viTri = this.timViTri(nhanVienMoi.user);
        console.log(viTri)
        if(viTri > -1){
            //tìm thấy
            dsnv.mangNV[viTri] = nhanVienMoi
            return
        }
        alert("Nhân viên không tồn tại");
        return
    }
}
