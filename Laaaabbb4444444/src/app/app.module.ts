import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [BrowserModule, AppRoutingModule, AppComponent], // Import instead of declaring
  providers: [],
  bootstrap: [AppComponent]  // Keep this line
})
export class AppModule { }
