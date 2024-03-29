import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ManageSeriesComponent } from './admin/manage-series/manage-series.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { SerieFormComponent } from './admin/manage-series/serie-form/serie-form.component';
import { SerieService } from './shared/serie.service';
import { GenreService } from './shared/genre.service';
import { SerieListComponent } from './admin/manage-series/serie-list/serie-list.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './series/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ManageSeriesComponent,
    ManageUsersComponent,
    RegisterComponent,
    SerieFormComponent,
    SerieListComponent,
    MatConfirmDialogComponent,
    SeriesComponent,
    SerieComponent,
    
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module 
    AngularFireDatabaseModule,  // Firebase database module
    AngularFireAuthModule, 
    ],
  providers: [
    AuthGuardService,
    AuthService,
    SerieService,
    GenreService
  ],
  bootstrap: [AppComponent],
// in order to open a component in a dialog window(in serieListComponent for example), we have to add that comopenent in appModule.ts 
  entryComponents:[SerieFormComponent, MatConfirmDialogComponent]
})
export class AppModule { }
