import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< Updated upstream
=======
import { PrincipalComponent } from './principal/principal.component';
import { EventosComponent } from './eventos/eventos.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    FooterComponent,
<<<<<<< Updated upstream
    HeaderComponent
=======
    HeaderComponent,
    PrincipalComponent,
    EventosComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
