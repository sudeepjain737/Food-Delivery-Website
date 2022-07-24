var arr = [];

if(JSON.parse(localStorage.getItem("details")) != null){
    arr = JSON.parse(localStorage.getItem("details"));
}

save = () => {
    var det = {add : "", flat : "", phone : ""};  
    var x1 = document.getElementById("address").value;
    var x2 = document.getElementById("flat").value;
    var x3 = document.getElementById("phone").value;
    det.add = x1;
    det.flat = x2;
    det.phone = x3;
    arr.push(det) ;
    localStorage.setItem("details", JSON.stringify(arr));
    document.getElementById("address").value = "";
    document.getElementById("flat").value = "";
    document.getElementById("phone").value = "";
}