import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://192.168.1.69:5000', options: {} };

/*if (environment.production) {
  enableProdMode();
}*/

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      SocketIoModule.forRoot(config) // This now includes the SocketIoModule
    )
    // Other imports or configurations if necessary...
  ]
}).catch(err => console.error(err));
