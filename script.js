function addToCart() {
    alert("تم اضافة الكتاب الى السلة");
}
function filterBooks(eventValue) {
    let books = document.querySelectorAll('.book-card');
    if (eventValue == "التاريخ") {
        books.forEach(book => {
            if (!(book.classList.contains('history'))) {
                book.style.display = 'none';
            } else {
                book.style.display = 'flex';
            }
        });
    }
    else if (eventValue == "أدب كلاسيكي") {
        books.forEach(book => {
            if (!(book.classList.contains('adab'))) {
                book.style.display = 'none';
            } else {
                book.style.display = 'flex';
            }
        });
    }
    else if (eventValue == "خيال علمي") {
        books.forEach(book => {
            if (!(book.classList.contains('khayal'))) {
                book.style.display = 'none';
            } else {
                book.style.display = 'flex';
            }
        });
    }
    else if (eventValue == "تطوير الذات") {
        books.forEach(book => {
            if (!(book.classList.contains('tatwir'))) {
                book.style.display = 'none';
            } else {
                book.style.display = 'flex';
            }
        });
    }
}


let filterItems = document.querySelectorAll('.header-item');
filterItems.forEach(item => {
    item.addEventListener('click', () => filterBooks(item.textContent.trim()));
});
