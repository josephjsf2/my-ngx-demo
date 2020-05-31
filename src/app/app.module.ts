import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ContentComponent } from './content/content.component';
import { MyControlComponent } from './my-control/my-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MyControlComponent
  ],
  imports: [
    BrowserModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
