
document.addEventListener('click', (e)=> {
    if(menuOpened){
        if(e.target.id !='menu-button'){
            menuContainer.classList.add('hidden');
            menuOpened = false;
        }
    }
});