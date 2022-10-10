import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LatMenuComponent } from './components/lat-menu/lat-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LatMenuComponent,
    MainContentComponent,
    DialogFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
