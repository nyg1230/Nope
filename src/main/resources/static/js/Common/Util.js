const modal = ($target, frame) => {

    if(!$target || !frame) return;

    let $modal      = document.createElement('modal');
    $modal.classList.add('modal-overlay');

    let $stylesheet = document.createElement('style');
    $stylesheet.innerHTML    = `@import url(/css/Common/modal.css)`
    
    let $modalWindow    = document.createElement(frame);
    $modalWindow.classList.add('modal-window');
    
    $modal.appendChild($stylesheet);
    $modal.appendChild($modalWindow);
    $target.appendChild($modal);

    $modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-overlay')) {
            $target.removeChild($modal)
        }
    })
}

const jwt   = {
    name    : `nope-jwt-token`,
    get     : function() {
        return sessionStorage.getItem(this.name);
    },
    test    : function() {
        if(!this.get()) return false;
    }
}

export {
    modal,
    jwt
}