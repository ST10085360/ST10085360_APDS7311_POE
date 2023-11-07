import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './Posts/post-create/post-create.component';
import { PostDisplayComponent } from './Posts/post-display/post-display.component';
import { LoginComponent } from './auth/login/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './error/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostDisplayComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
              {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }


// REFERENCES:
// I used the Lab Guide provided by varsity to help me develop my frontend

// The Independent Institute of Education (Pty) Ltd. (2021). APDS7311 LAB GUIDE 2023. (1st). Retrieved October 8, 2023


