import  { Component, Type } from '@angular/core';
import { TodosComponent } from './components/todos.component';
import { TodoService } from './services/todo.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [TodosComponent],
    providers: [HTTP_PROVIDERS, TodoService]
})
export class AppComponent extends Type {}