import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';

// export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    InputComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
