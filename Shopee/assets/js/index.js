const modal = document.querySelector('.js-modal');
const modalOverlay = document.querySelector('.js-modal__overlay');
const modalBtnBack = document.querySelectorAll('#js-modal-btn-back');

const btnLogin = document.querySelector('.js-modal-login');
const btnRegister = document.querySelector('.js-modal-register');

const authForm = document.querySelectorAll('.js-auth-form');

function removeForm() {
    modal.style.display = 'none';
}

// click login show form
btnLogin.addEventListener('click', () => {
    authForm[0].style.display = 'none';
    authForm[1].style.display = 'block';
    modal.style.display = 'block';
});

// click register show form
btnRegister.addEventListener('click', () => {
    authForm[1].style.display = 'none';
    authForm[0].style.display = 'block';
    modal.style.display = 'block';
});

// click back remove form
modalBtnBack.forEach((item) => {
    item.addEventListener('click', removeForm)
})

// click overlay remove form
modalOverlay.addEventListener('click', removeForm);

// for (var i = 0; i < form.length; i++) {

//     if(form[0]) {
//         form[1].style.display = 'none';
//     }
// }

// home-filter__btn
const filterBtn = document.querySelectorAll('.home-filter__btn')

// console.log(filterBtn)
function showFilter() {
    for(var item of filterBtn) {
        item.classList.remove('btn--primary');
        this.classList.add('btn--primary')
    }
}

filterBtn.forEach(item => {
    item.addEventListener('click', showFilter)
})

// action like product
const likeProducts = document.querySelectorAll('.home-product-item__like');
const rateProduct = document.querySelectorAll('.home-product-item__rating');

// console.log(likeProducts)

for (var item of likeProducts) {
    item.addEventListener('click', function() {
        likeProducts.forEach((item) => {
            this.classList.add('home-product-item__liked')
        })
    })
}

// header mobile search
const mobileSearch = document.querySelector('.header__mobile-search');
const headerSearch = document.querySelector('.header__search');

mobileSearch.addEventListener('click', function () {
    if (headerSearch.style.display === "none") {
        headerSearch.style.display = "flex";
    } else {
        headerSearch.style.display = "none";
    }
})

// header__sort-item -- active

const headerItemMb = document.querySelectorAll('.header__sort-item');

function showItemMb() {
    for (var item of headerItemMb) {
        item.classList.remove('header__sort-item--active');
        this.classList.add('header__sort-item--active');
    }
}

headerItemMb.forEach((item) => {
    item.addEventListener('click', showItemMb);
})

// for (var item of headerItemMb) {
//     item.addEventListener('click', showItemMb)
// }