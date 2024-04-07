import {enableProdMode, importProvidersFrom} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
// Importez d'autres configurations ou dépendances globales nécessaires

/*if (environment.production) {
  enableProdMode();
}*/

bootstrapApplication(AppComponent, {
  providers: [
    // Ici, vous pouvez ajouter des fournisseurs qui étaient auparavant dans votre AppModule
    importProvidersFrom(HttpClientModule),
    // Autres imports ou configurations nécessaires...
  ]
}).catch(err => console.error(err));
