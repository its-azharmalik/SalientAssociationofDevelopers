let real_front = document.querySelector('.real-front');
let addons = document.querySelector('.addons');

let mainPricingBtn = document.querySelector('.main-btn');
let addonBtn = document.querySelector('.addon-btn');

mainPricingBtn.style.color = " var(--clr-main-dark-) ";


addonBtn.onclick = () =>{
    real_front.style.display ="none";
    addons.style.display = "flex" ;
    addonBtn.style.color = " var(--clr-main-dark-) ";
    mainPricingBtn.style.color = " var(--clr-light-) ";
}

mainPricingBtn.onclick = () =>{
    real_front.style.display ="flex";
    addons.style.display = "none" ;
    mainPricingBtn.style.color = " var(--clr-main-dark-) ";
    addonBtn.style.color = " var(--clr-light-) ";
}