var dssv = [];

var dataJson = localStorage.getItem('DSSV_LOCAL');
if (dataJson != null){
  
  var result = JSON.parse(dataJson) // Lưu dataJson vào result
  //  Chuyển đổi từ data localStore về data gốc để sử dụng function
  dssv = result.map(function(item){
    return new SinhVien(item.id,item.name,item.email,item.pass,item.math_scores,item.literature_score)
  })
  console.log('dssv > ', dssv)
  renderFE(dssv);
}


function addData(){
  var _id = document.getElementById("txtMaSV").value;
  var _name = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _pass = document.getElementById("txtPass").value;
  var _math_scores = document.getElementById("txtDiemToan").value*1;
  var _literature_score = document.getElementById("txtDiemVan").value*1;

  var sv = new SinhVien (_id,_name,_email,_pass,_math_scores,_literature_score);

  // validate 
  var isValid; 
  isValid =  checkID(sv.id,dssv) && checkLength(sv.pass,6,15,"spanMatKhau") && checkEmail (sv.email)
  if (isValid){
    dssv.push(sv);
    //  lưu vào localstore
    var dataJson = JSON.stringify(dssv)
    localStorage.setItem('DSSV_LOCAL',dataJson)
    renderFE(dssv)
  }
 
}

function delData(id) {
  
  var location = dssv.findIndex(function(item){
    return item.id == id;
  })
  dssv.splice(location,1);
  var dataJson = JSON.stringify(dssv)
  // update localStorage
  localStorage.setItem('DSSV_LOCAL',dataJson)
  // update font end 
  renderFE(dssv);
  
  
};
function editData(id) {
  var location = dssv.findIndex(function(item){
    return item.id == id;
  })
  var sv = dssv[location];

  document.getElementById("txtMaSV").readOnly = true; // dont edit
  document.getElementById("txtMaSV").value= sv.id;
  document.getElementById("txtTenSV").value= sv.name;
  document.getElementById("txtEmail").value= sv.email;
  document.getElementById("txtPass").value= sv.pass;
  document.getElementById("txtDiemToan").value= sv.math_scores;
  document.getElementById("txtDiemVan").value= sv.literature_score;
  
}

function Update(){
  
}
