// 
function toast({ title = '', message = '', type = 'info', duration = 3000}) {
    const main = document.querySelector('#toast');
    if (main) {
        const toast = document.createElement('div');

        // auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000)

        // remove toast when click
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`); //
        toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">${title}</div>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);

    }
}

function showSuccessToast() {
    toast({
        title: 'Welcome to my show',
        message: 'nice try',
        type: 'success',
        duration: 5000
    });
}

function showErrorToast() {
    toast({
        title: 'failedddddd',
        message: 'ops vozder',
        type: 'error',
        duration: 5000
    });
}
