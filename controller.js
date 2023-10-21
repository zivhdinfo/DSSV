
function renderFE(dssv){
    var contentHTML = "";
    for (var i = 0; i < dssv.length; i++) {
      var data = dssv[i];
      trString = `<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.tinhDTB()}</td>
        <td>
          <a onclick = "delData('${data.id}')" class="btn btn-danger text-white">Delete</a>
          <a onclick = "editData('${data.id}')" class="btn btn-warning text-white">Edit</a> 
        </td>
      </tr>`;
      contentHTML = contentHTML + trString;
      }
    
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
  }