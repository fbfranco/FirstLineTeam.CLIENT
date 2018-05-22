// Config 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

//Components
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClienteComponent } from './components/clients/cliente/cliente.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';

//Services
import { ClientService} from './services/client.service'

const routes: Routes = [
  { path: 'client', component: ClientsComponent },
  //{ path: 'login', component: LoginComponent },
  // {path : '', component : LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClienteComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( routes),
    FormsModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
