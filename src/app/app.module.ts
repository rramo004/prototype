import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoinputComponent } from './components/noinput/noinput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatToolbarModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { SecuritybarComponent } from './components/securitybar/securitybar.component';
import { TvsmComponent } from './components/tvsm/tvsm.component';

import { JsonService } from './services/json.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route1Component } from './components/navbar/routes/route1/route1.component';
import { Route2Component } from './components/navbar/routes/route2/route2.component';
import { TabviewComponent } from './components/tabview/tabview.component';
import { DropdowninputComponent } from './components/dropdowninput/dropdowninput.component';
import { NumberinputComponent } from './components/numberinput/numberinput.component';
import { MadlComponent } from './components/madl/madl.component';
import { TextinputComponent } from './components/textinput/textinput.component';
import { MadlsublinksComponent } from './components/madlsublinks/madlsublinks.component';

const appRoutes: Routes = [
  { path: 'route1', component: Route1Component },
  { path: 'route2', component: Route2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    NoinputComponent,
    SecuritybarComponent,
    TvsmComponent,
    NavbarComponent,
    Route1Component,
    Route2Component,
    TabviewComponent,
    DropdowninputComponent,
    NumberinputComponent,
    MadlComponent,
    TextinputComponent,
    MadlsublinksComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
