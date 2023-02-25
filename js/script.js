function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});


// card-product-dropdown

let dropdowns = document.querySelectorAll('.tm-dropdown')

dropdowns.forEach(list => {
	list.onclick = (e) => {
		let thisElem = e.currentTarget

		if (!thisElem.classList.contains('open')) {
			dropdowns.forEach(el => el.classList.remove('open'))
			thisElem.classList.add('open')
		}
		else {
			if (e.target.closest('.tm-dropdown__item')) {
				let selected = e.target.closest('.tm-dropdown__item')
				let header = list.querySelector('.tm-dropdown__header .tm-dropdown__item')
				header.innerHTML = selected.innerHTML
			}
			thisElem.classList.remove('open')
		}
	}
})

window.addEventListener('click', (e) => {
	if (!e.target.closest('.tm-dropdown')) {
		dropdowns.forEach(el => el.classList.remove('open'))
	}
})

// services items

let services = document.querySelectorAll('.tm-services__item')

services.forEach(service => service.addEventListener('click', (e) => {
	services.forEach(item => item.classList.remove('active'))
	e.currentTarget.classList.add('active')
}))


// menu

let menuBtn = document.querySelector('.tm-header-menu__btn-open')
let menuContent = document.querySelector('.tm-header-menu__nav')
let menuCloseBtn = document.querySelector('.tm-header-menu__btn-close')

const addMenu = () => {
	menuContent.classList.add('open')
	document.querySelector('body').style.overflow = 'hidden'
}
const closeMenu = () => {
	menuContent.classList.remove('open')
	document.querySelector('body').style.overflow = 'visible'
}


menuBtn.addEventListener('click', addMenu)
menuCloseBtn.addEventListener('click', closeMenu)
menuContent.onclick = (e) => {
	if (e.target.closest('.tm-header-menu__item')) closeMenu()
}

window.addEventListener('click', (e) => {
	if (!e.target.closest('.tm-header-menu')) {
		closeMenu()
	}
})

// move search in header

let searchDesctopWrap = document.querySelector('.tm-header-content__search')
let searchMobileWrap = document.querySelector('.tm-header-content__search-mobile')
let search = document.querySelector('.tm-header-content__search-form')

window.addEventListener('resize', moveSearch)

function moveSearch() {
	let width = document.body.clientWidth;
	if (width < 1180) {
		searchMobileWrap.append(search)
	} else {
		searchDesctopWrap.prepend(search)
	}
}
moveSearch()