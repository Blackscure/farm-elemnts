window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-btn')
    const dropdown = document.querySelector('#dropdown')

    menuBtn.addEventListener('click', () => {
        /* if(dropdown.classList.contains('hidden')){
            dropdown.classList.remove('hidden');
            dropdown.classList.add('flex');
        }else{
            dropdown.classList.remove('flex')
            dropdown.classList.add('hidden')
        } */

        dropdown.classList.toggle('hidden')
        dropdown.classList.toggle('flex')
    })

})

function selectItem() {
    const changeColor = document.querySelector('#first');
    const radioBtn = document.querySelector('#check');
    if (radioBtn.checked == true) {
        changeColor.style.backgroundColor = 'lightGray';
    }

}

function checkComplete() {
    const changeColor = document.querySelector('#second');
    const hideText = document.querySelector('#hideAfterMark');
    const radioBtn = document.querySelector('#complete');
    if (radioBtn.checked == true) {
        changeColor.style.backgroundColor = 'lightGray';
        hideText.style.display = 'none';
    }

}