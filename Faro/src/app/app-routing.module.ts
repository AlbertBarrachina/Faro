import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
<<<<<<< Updated upstream

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent }
=======
import { PrincipalComponent } from './principal/principal.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: '', component: PrincipalComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
