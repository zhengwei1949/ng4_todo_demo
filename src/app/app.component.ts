import { Component } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    //类似vue.js中的el属性 挂载点
    selector: 'app-root',
    //指定模板路径
    templateUrl: './app.component.html',
    //指定样式路径
    styleUrls: ['./app.component.css'],
    //指定需要的服务
    providers: [TodoService],
})

export class AppComponent {

    title = 'todolist';
    initTodo: Todo = new Todo();

    constructor(
        private todoService: TodoService,
    ) {}

    addItem() {
        console.log(this.initTodo);
        this.todoService.addItem(this.initTodo);
        this.initTodo = new Todo();
    }

    deleteItem(todo) {
        this.todoService.deleteItem(todo.id);
    }

    toggleItemState(todo) {
        this.todoService.toggleItemState(todo);
    }

    get todos() {
        return this.todoService.getTodos();
    }

    editItem(todo) {
        if (todo.checked) {
            return;
        }
        this.todoService.editItem(todo);
    }

    commitItem(todo) {
        console.log(todo.title);
        this.todoService.commitItem(todo);
    }

    cancelItem(todo) {
        this.todoService.cancelItem(todo);
    }
}