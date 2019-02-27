import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoinputComponent } from './components/noinput/noinput.component';
import { MatTableModule } from '@angular/material';
import { SecuritybarComponent } from './components/securitybar/securitybar.component';
import { TvsmComponent } from './components/tvsm/tvsm.component';

import { JsonService } from './services/json.service';


@NgModule({
  declarations: [
    AppComponent,
    NoinputComponent,
    SecuritybarComponent,
    TvsmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
