import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { AgePipe } from './pipes/age.pipe';
import { LmpPipe } from './pipes/lmp.pipe';

@NgModule({
  declarations: [AppComponent, RecordsComponent, AgePipe, LmpPipe],
  imports: [BrowserModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
