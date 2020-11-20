/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const actions = {
        3: (root,td) => {
            if (td.dataset.available === 'true'){
                root.classList.add('available');
            } else if (td.dataset.available === 'false') {
                root.classList.add('unavailable');
            } else if(!td.hasattribute('data-available')) {
                root.hidden = true; /*?????понимаю, что делает строка, но не понимаю как она это делает */
            }
    },

    2: (root,td) => {
        if (td.textContent === 'm') {
            root.classList.add('male');
        } else if (td.textContent === 'f') {
            root.classList.add('female');
        }
    },

    1: (root, td) => {
        const age = parseInt(td.textContent, 10);
        if (age < 18) {
            root.style.textDecoration = 'line-through';
        }
    },
};



for (let tr of table.rows) {
    Array.from(tr.cells).forEach((td, index) => {        /*Array.from здесь нужен потому, что tr.cells- это ПСЕВДОмассив.для того, чтобы с ним работал метод forEach, нам надо сделать из него настоящий массив */
        let fn = actions[index];       /*отправляет к объекту actions с индексом ячейки (по сути столбцом)*/

        if (typeof fn === 'function') {      /*если в actions есть свойство, соответствующее индексу ячейки, то выполняется записанная в нём функция */
            fn(tr, td);
        }
    });
}


}
