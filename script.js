let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active')
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick =() =>{
	searchForm.classList.toggle('active')
}

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next(){
	slides[index].classList.remove('active');
	index = (index + 1) % slides.length;
	slides[index].classList.add('active');
}

function prev(){
	slides[index].classList.remove('active');
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add('active');
}


var swiper = new Swiper(".best-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });
 
 let previewContainer = document.querySelector('.best-preview-container');
 let previewBox = previewContainer.querySelectorAll('.best-preview');
 
 document.querySelectorAll('.best .slide').forEach(best =>{
    best.onclick = () =>{
       previewContainer.style.display = 'flex';
       let name =best.getAttribute('data-name');
       previewBox.forEach(preveiw =>{
          let target = preveiw.getAttribute('data-target');
          if(name == target){
             preveiw.classList.add('active');
          }
       });
    };
 });
 
 previewContainer.querySelector('#close-preview').onclick = () =>{
    previewContainer.style.display = 'none';
    previewBox.forEach(close =>{
       close.classList.remove('active');
    });
 };
 

$(document).ready(function(){

    $('.controls .buttons').click(function(){

        $(this).addClass('button-active').siblings().removeClass('button-active');

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.shop .image').show(400);
        }else{
            $('.shop .image').not('.'+filter).hide(200);
            $('.shop .image').filter('.'+filter).show(400);
        }
    });
});

function hitungtotal() {
    var namastr = document.fform.inama.value;
    var jumlahInt = parseFloat(document.fform.ijumlah.value);
    var hb = 0.0;
    var total = 0.0;
    if (namastr == "Luura Jacket Black") {
      hb = 166000;
    } else if (namastr == "Aretha Top") {
      hb = 209000;
    } else if (namastr == "Heart Straight Jeans") {
      hb = 179900;
    } else if (namastr == "Elsie Swarovki Sandals") {
        hb = 379000;
    } else if (namastr == "Binna Bags White"){
        hb = 219000;
    } else if(namastr == "Huyen Blazer"){
        hb = 110000;
    } else if(namastr =="Quibelle Top"){
        hb = 105000;
    } else if(namastr == "Genesis Corduroy Crop"){
        hb = 299000;
    } else if(namastr =="Qaima Leather Blazer"){
        hb = 215000;
    } else if(namastr == "Loire Knited Vest "){
        hb = 100000;
    } else if(namastr == "Chelonia Flanel Longsleeve"){
        hb = 110000;
    } else if(namastr =="Loose Baggy High Waist Jeans"){
        hb = 137000;
    } else if(namastr =="Alexis Cargo Pants"){
        hb = 150000;
    } else if(namastr =="Loose Baggy Unfinished Jeans"){
        hb = 150000;
    } else if(namastr =="Maselle Cullote Pants"){
        hb = 99000;
    } else if(namastr =="Iveria Pants"){
        hb = 95000;
    } else if(namastr =="Zehra Cullote Pants"){
        hb = 99000;
    } else if(namastr =="Shopia "){
        hb = 249000;
    } else if(namestr  =="ODI "){
        hb = 212000 ;
    } else if(namestr  =="Xavier Cream "){
        hb = 209000;
    } else if(namestr  =="Hara White"){
        hb = 194000 ;
    } else if(namestr  =="Wilona Cream"){
        hb = 189000;
    } else if(namestr  =="Vanya"){
        hb = 170000 ;
    } else if(namastr =="Kim Soo Bag"){
        hb = 459000 ;
    } else if(namastr =="Tokyo Oval Bag"){
        hb = 450000;
    } else if(namastr =="Bajo Padded Bag"){
        hb = 479000;
    }

    total = hb*jumlahInt ;
  
    document.fform.oharga.value = eval(hb);
    document.fform.ototal.value = eval(total);
 }


 $(document).ready(function () {
    $("#btn").click(function () {
        alert("Thank you for purchasing! enjoy your food, hope that it will suits your sweet tooth:)");
    });
});