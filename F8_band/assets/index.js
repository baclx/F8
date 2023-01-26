const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

// ham hien thi modal mua ve ( add class open vao modal )
function showBuyTickets() {
    modal.classList.add('open');
}

// ham an modal mua ve ( go bo class open khoi modal)
function hideBuyTickets() {
    modal.classList.remove('open');
}

// lap qua tung the button va nghe hanh vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

// nghe hanh vi click vao nut close
modalClose.addEventListener('click', hideBuyTickets);

// nghe hanh vi click ngoai modal
modal.addEventListener('click', hideBuyTickets);


modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

// responsive
const header = document.querySelector('#header');
const mobileMenu = document.querySelector('.mobile-menu-btn');
const headerHeight = header.clientHeight;

// dong/mo mobile menu
function showMenu() {
    var isClosed = header.clientHeight === headerHeight;
    //console.log(isClosed)
    if(isClosed) { //true
        header.style.height = 'auto';
    } else { //false
        header.style.height = null;
    }
}

mobileMenu.addEventListener('click', showMenu);

// tu dong dong khi chon menu (mobile)
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems)
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    // && kiem tra ace sau co class la subnav hay k
    
    menuItem.onclick = function(e) {
        // this: 
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu) {
            header.style.height = null;
        } else {
            e.preventDefault();
        }

    }
}
