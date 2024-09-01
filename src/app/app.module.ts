import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: 'http://obvault.duckdns.org:31400',
  options: {},
};

@NgModule({
  imports: [BrowserModule, HttpClientModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [], // No component to bootstrap because AppComponent is standalone
})
export class AppModule {}
