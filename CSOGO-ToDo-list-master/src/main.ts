import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { TodoComponent } from './app/todo/todo.component';

const routes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
