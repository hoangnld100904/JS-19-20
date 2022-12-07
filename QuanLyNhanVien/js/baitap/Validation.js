function Validation(){
    this.checkEmpty = function (value, msg, spanID){
        if (value.trim()==""){
            document.getElementById(spanID).style.display="block";
            document.getElementById(spanID).innerHTML=msg;
            return false;
        }
        document.getElementById(spanID).innerHTML=""
        return true;
    }
    this.checkExistedUser=function(value, msg, spanID, array){
        var isExist= array.some(function(nv){
            return nv.user == value;
        }); //Kiểm tra xem có user trùng không
        if (isExist){
            document.getElementById(spanID).innerHTML=msg;
            document.getElementById(spanID).style.display="block";
            return false;
        } else{
            return true;
        }
    }
    this.checkUser=function(value, msg, spanID){
        var pattern= /^[A-Za-z]\w{4,6}$/; //User gồm chữ, số, gạch dưới, từ 4-6 kí tự
        if (!(value.match(pattern))){
            document.getElementById(spanID).innerHTML=msg
            document.getElementById(spanID).style.display="block";
            return false;
        } else{
            document.getElementById(spanID).innerHTML=""
            return true;
        }
    }
    this.checkName=function(value,msg, spanID){
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)){
            document.getElementById(spanID).inner=""
            return true;
        }
        document.getElementById(spanID).innerHTML=msg;
        document.getElementById(spanID).style.display="block";
        return false;
    }
    this.checkEmail = function (value, msg, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(pattern)) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msg;
        document.getElementById(spanID).style.display="block";
        return false;
    }
    this.checkPassword= function(value,msg,spanID){
        var pattern=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
        if (value.match(pattern)){
            document.getElementById(spanID).innerHTML=""
            return true;
        }
        document.getElementById(spanID).innerHTML=msg;
        document.getElementById(spanID).style.display="block";
        return false;
    }
    this.checkBasicSalary= function(value, msg, spanID){
        if (value>=1000000 && value<=20000000){
            document.getElementById(spanID).innerHTML=""
            return true;
        }
        document.getElementById(spanID).innerHTML=msg;
        document.getElementById(spanID).style.display="block";
        return false;
    }
    this.checkPosition=function(value, msg, spanID){
        // var value= document.getElementById(inputID).selectedIndex;
        if (value=="Chọn chức vụ"){
            document.getElementById(spanID).innerHTML=msg;
            document.getElementById(spanID).style.display="block";
            return false;    
        }
        document.getElementById(spanID).innerHTML=""
        return true;
    }
    this.checkWorkTime=function(value, msg, spanID){
        if (value>=80 && value<=200){
            document.getElementById(spanID).innerHTML=""
            return true;
        }
        document.getElementById(spanID).innerHTML=msg;
        document.getElementById(spanID).style.display="block";
        return false;    
    }
}