document.addEventListener('click', e => {
    if( e.target.classList.contains('tasks__add') ) {
        e.preventDefault();
    }

    const tasksList = document.querySelector('.tasks__list'),
        input = document.querySelector('.tasks__input');

    if ( e.target.classList.contains('tasks__add') ) {
        let divTask = document.createElement('div'),
            divTaskTitle = document.createElement('div'),
            aTaskRemove = document.createElement('a');

        divTask.className = 'task';

        divTaskTitle.className = 'task__title';
        divTaskTitle.innerHTML = input.value;

        aTaskRemove.className = 'task__remove';
        aTaskRemove.innerHTML = '&times';
        aTaskRemove.href = '#';

        tasksList.append(divTask);
        divTask.append(divTaskTitle);
        divTaskTitle.append(aTaskRemove);
    }

    const close = e.target.closest('.task__remove');

    if(close) {
        e.target.closest('.task__title').remove();
    }
})






