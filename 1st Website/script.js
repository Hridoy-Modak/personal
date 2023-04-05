fetch("header/navbar.html")
.then(res=>res.text())
.then(data=>{
    document.querySelector(".navbar").innerHTML=data;
});
