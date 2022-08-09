//Author

const topMenu = document.getElementById('fk-top-menu')
const toggleTopMenuIcon = document.getElementById('fk-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        //Click to toggle top menu icon
        topMenu.classList.toggle('fk-topmenu-expanded')
        topMenu.classList.toggle('hidden')

    } else {
        //Click out side top menu icon
        if(topMenu.classList.contains('fk-topmenu-expanded')) {
            topMenu.classList.remove('fk-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
