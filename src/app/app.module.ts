import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {
  MatButtonModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatDividerModule, MatSelectModule,
  MatToolbarModule, MatTooltipModule, MatIconModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobCardComponent } from './components/job-card/job-card/job-card.component';
import { SharedModule } from './shared/shared.module';
import { JobBrowsingComponent } from './components/job-browsing/job-browsing.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    JobCardComponent,
    JobBrowsingComponent,
    LoginFormComponent,
    RegisterFormComponent,
    UserProfileComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
