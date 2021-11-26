


var images = [


"flowershop_imgs/product1.jpg",

"flowershop_imgs/product2.jpg",

"flowershop_imgs/product3.jpg",

"flowershop_imgs/product4.jpg",

"flowershop_imgs/product5.jpg",

"flowershop_imgs/product6.jpg",

"flowershop_imgs/product7.jpg",

"flowershop_imgs/product8.jpg",

"flowershop_imgs/product9.jpg",

"flowershop_imgs/product10.jpg",

"flowershop_imgs/product11.jpg",

"flowershop_imgs/product12.jpg"];

var i=0;

function pag(newvalue){
    if(newvalue =="next"){
        i++;
        if(i >=images.length){
            i=i%images.length;
        }}else{
            i--;
            if(i<0){
                i=images.length-Math.abs(i);
            }
        }
    
   document.getElementById("galleryimg").src =images[i];
   document.getElementById("captiongallery").innerText=(i+1)+"/"+(images.length+1);
}