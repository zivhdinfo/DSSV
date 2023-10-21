// check id 
function checkID(id,dssv){
    var location = dssv.findIndex(function(item){
        return item.id == id;
      })
      if (location != -1){
        document.getElementById("spanMaSV").innerText = `Mã Sinh Viên Đã Tồn Tại`
        return false
        
      } else {
        document.getElementById("spanMaSV").innerText = ""
        return true 
      };
}

function checkLength(value,min,max,noti){
    var length = value.length;
    if(min <  length && length < max) {
        document.getElementById(noti).innerText = ""
        return true;
    }else{
        document.getElementById(noti).innerText = `Độ dài phải từ ${min} đến  ${max}`;
        return false;
    }
}
function checkEmail (email){
    re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    var isValid = re.test(email);
    if (isValid){
        document.getElementById("spanEmailSV").innerText =""
        return true;
    }
    document.getElementById("spanEmailSV").innerText ="Email Không Hợp Lệ"
    return false;

}

