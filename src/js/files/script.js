// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
import { bodyLockStatus, bodyLockToggle } from "./functions.js";

// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

// Скрипт будет срабатывать, когда весь контент на странице загрузится
// window.onload = function () {

// Input file
function getFileName() {
	var file = document.getElementById('myfile').value;
	file = file.replace(/\\/g, '/').split('/').pop();
	document.getElementById('file-name').innerHTML = '' + file;

	var file = document.getElementById('myfiles').value;
	file = file.replace(/\\/g, '/').split('/').pop();
	document.getElementById('file-names').innerHTML = '' + file;
}
// Переключение корзины в карточке товаров ======================================================================================================================================================================
// const interAddingBascetBtn = document.querySelectorAll('.interactive-adding-bascet__button');

// interAddingBascetBtn.forEach((btn, index) => {
// 	btn.addEventListener('click', () => {

// 		if (btn) {
// 			let interAddingBascet = btn.closest('.interactive-adding-bascet');

// 			if (!!interAddingBascet) {
// 				interAddingBascet.classList.add('none');
// 			}

// 			let interContainer = btn.closest('.card-product__interactive-adding');

// 			if (!!interContainer) {
// 				let interAddingQuantity = interContainer.querySelector('.interactive-adding-quantity');

// 				if (interAddingQuantity) {
// 					interAddingQuantity.classList.add('active');
// 				}
// 			}
// 		}
// 	})
// })
// Переключение вида списка товаров ======================================================================================================================================================================
const productsViewToggle = document.querySelectorAll('.swith-control__btn');

if (productsViewToggle.length > 0) {
	productsViewToggle.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			let btns = document.querySelectorAll('.swith-control__btn');

			btns.forEach((b) => {
				if (b == btn) {
					b.classList.add('active');
				} else {
					b.classList.remove('active');
				}
			});

			let catalogEntity = document.querySelectorAll('.catEntity');
			let view = btn.getAttribute('data-view');

			if (catalogEntity.length > 0) {
				catalogEntity.forEach((ce) => {
					if (view == ce.getAttribute('data-view')) {
						ce.classList.add('active');
					} else {
						ce.classList.remove('active');
					}
				});
			}
		});
	});
}
// Открытие/закрытие сайдбара ======================================================================================================================================================================
const ManagementFiltersBtn = document.querySelector('.directory-management__filters-btn');
const pageSidebar = document.querySelector('.page__sidebar');
const pageMain = document.querySelector('.page__main');

if (ManagementFiltersBtn) {
	ManagementFiltersBtn.addEventListener('click', function () {
		// ManagementFiltersBtn.classList.togle('active');
		pageSidebar.classList.toggle('hide');
		pageMain.classList.toggle('width');
	});
}
// // Open multicorzine ======================================================================================================================================================================================
// const headerLegalBascetIcon = document.querySelector('.header-legal-bascet-icon');
// const multicorzineLegalEntity = document.querySelector('.multicorzine-legal-entity');
// const multicorClose = document.querySelector('.multicorzine-legal-entity__btn-close');

// if (headerLegalBascetIcon) {
// 	headerLegalBascetIcon.addEventListener('click', function () {
// 		multicorzineLegalEntity.classList.add('_active');
// 		shadow.classList.toggle('_active');
// 		bodyLockToggle()
// 	});
// }
// if (multicorClose) {
// 	multicorClose.addEventListener('click', function () {
// 		multicorzineLegalEntity.classList.remove('_active');
// 		shadow.classList.toggle('_active');
// 		bodyLockToggle()
// 	});
// }
// Range ================================================================================================================================================================================================
const rangeInput = document.querySelectorAll(".range-input input"),
	priceInput = document.querySelectorAll(".price-input input"),
	range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input => {
	input.addEventListener("input", e => {
		let minPrice = parseInt(priceInput[0].value),
			maxPrice = parseInt(priceInput[1].value);

		if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
			if (e.target.className === "input-min") {
				rangeInput[0].value = minPrice;
				range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
			} else {
				rangeInput[1].value = maxPrice;
				range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
			}
		}
	});
});
rangeInput.forEach(input => {
	input.addEventListener("input", e => {
		let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value);
		if ((maxVal - minVal) < priceGap) {
			if (e.target.className === "range-min") {
				rangeInput[0].value = maxVal - priceGap
			} else {
				rangeInput[1].value = minVal + priceGap;
			}
		} else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
			range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
		}
	});
});
// Лайки ================================================================================================================================================================================================
// const likeButtons = Array.from(document.querySelectorAll("._like-icon-btn"));
// const likeCounts = Array.from(document.querySelectorAll("._like-icon-count"));

// likeButtons.forEach((button, index) => {
// 	button.addEventListener("click", () => {
// 		button.classList.toggle("is-active");
// 		const current = Number(likeCounts[index].innerHTML);
// 		const inc = button.classList.contains("is-active") ? 1 : -1;
// 		likeCounts[index].innerHTML = current + inc;
// 	});
// });

// function hasTouch() {
// 	return 'ontouchstart' in document.documentElement
// 		|| navigator.maxTouchPoints > 0
// 		|| navigator.msMaxTouchPoints > 0;
// }
// Отключаем hover на мобилках ==========================================================================================================================================================================
// if (hasTouch()) {
// 	try {
// 		for (var si in document.styleSheets) {
// 			var styleSheet = document.styleSheets[si];
// 			if (!styleSheet.rules) continue;

// 			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
// 				if (!styleSheet.rules[ri].selectorText) continue;

// 				if (styleSheet.rules[ri].selectorText.match(':hover')) {
// 					styleSheet.deleteRule(ri);
// 				}
// 			}
// 		}
// 	} catch (ex) { }
// }
// Кнопка Наверх =========================================================================================================================================================================================
const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
		// удалим у кнопки класс btn-up_hide
		this.el.classList.remove('btn-up_hide');
	},
	hide() {
		// добавим к кнопке класс btn-up_hide
		this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
		// при прокрутке содержимого страницы
		window.addEventListener('scroll', () => {
			// определяем величину прокрутки
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
			scrollY > 400 ? this.show() : this.hide();
		});
		// при нажатии на кнопку .btn-up
		document.querySelector('.btn-up').onclick = () => {
			// переместим в начало страницы
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}
btnUp.addEventListener();
// Открытие карточки товара в таблице юрлицо ============================================================================================================================================================================================
const menuTabOp = document.querySelectorAll('.menuTabOp');
const menuTable = document.querySelectorAll('.menuTable');

menuTabOp.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		if (!btn.classList.contains('sidebar__menu-icon_active')) {
			menuTable.forEach((menuTable) => {
				menuTable.classList.remove('_active')
				// Закрытие моб меню при клике вне области меню
				window.addEventListener('click', e => { // при клике в любом месте окна браузера
					const target = e.target // находим элемент, на котором был клик
					if (!target.closest('.table')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
						menuTable.classList.remove('_active');
					}
				})
			});
			menuTable[index].classList.add('_active')
		} else {
			menuTable[index].classList.remove('_active')
		}
	})
})
//========================================================================================================================================================

// Увеличение таблицы Юр.Лицо
let zoomBtn = document.querySelector('.catalog-entity-table__icon-zoom');
let catalogEntityTable = document.querySelector('.catalog-entity-table');

if (zoomBtn) {
	zoomBtn.addEventListener("click", function (e) {
		catalogEntityTable.classList.toggle('fullScreen');
		bodyLockToggle()
	});
}


