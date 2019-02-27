import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoinputComponent } from './components/noinput/noinput.component';
import { MatTableModule } from '@angular/material';
import { SecuritybarComponent } from './components/securitybar/securitybar.component';

@NgModule({
  declarations: [
    AppComponent,
    NoinputComponent,
    SecuritybarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
