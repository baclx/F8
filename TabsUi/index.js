const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const tabPanes = $$('.tab-pane');

const line = $('.line');

tabItems.forEach((tab, index) => {
    const pane = tabPanes[index]

    tab.onclick = function () {
        $('.tab-pane.active').classList.remove('active');
        $('.tab-item.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');

    }
})