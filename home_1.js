class Todo {
    constructor(title) {
        if (!title) throw new Error('Title cannot be empty');
        this.title = title;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    edit(newTitle) {
        if (!newTitle) throw new Error('New title cannot be empty');
        this.title = newTitle;
        this.updatedAt = new Date();
    }
    toggleComplete() {
        this.completed = !this.completed;
        this.updatedAt = new Date();
    }
}
class TodoList {
    constructor() {
        this.todos = [];
    }
    add(title) {
        const todo = new Todo(title);
        this.todos.push(todo);
    }
    remove(index) {
        if (index < 0 || index >= this.todos.length) throw new Error('Invalid index');
        this.todos.splice(index, 1);
    }
    edit(index, newTitle) {
        if (index < 0 || index >= this.todos.length) throw new Error('Invalid index');
        this.todos[index].edit(newTitle);
    }
    get(index) {
        if (index < 0 || index >= this.todos.length) throw new Error('Invalid index');
        return this.todos[index];
    }
    getAll() {
        return this.todos;
    }
    markComplete(index) {
        if (index < 0 || index >= this.todos.length) throw new Error('Invalid index');
        this.todos[index].toggleComplete();
    }
    getTotalCount() {
        return this.todos.length;
    }
    getIncompleteCount() {
        return this.todos.filter(todo => !todo.completed).length;
    }

    findByName(name) {
        return this.todos.filter(todo => todo.title.includes(name));
    }
    sortByStatus() {
        return [...this.todos].sort((a, b) => a.completed - b.completed);
    }
    sortByDate() {
        return [...this.todos].sort((a, b) => b.createdAt - a.createdAt);
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
const myTodoList = new TodoList();
myTodoList.add('Перша нотатка');
myTodoList.add('Друга нотатка');
myTodoList.add('Третя нотатка');
myTodoList.edit(1, 'Оновлена друга нотатка');
myTodoList.markComplete(0);
console.log('Всі нотатки:', myTodoList.getAll());
console.log('Невиконані нотатки:', myTodoList.getIncompleteCount());
console.log('Пошук по імені "Оновлена":', myTodoList.findByName('Оновлена'));
console.log('Сортування за статусом:', myTodoList.sortByStatus());
console.log('Сортування за датою:', myTodoList.sortByDate());
