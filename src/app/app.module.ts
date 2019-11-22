import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {VoyagesListComponent} from './voyage-list/voyage-list.component'
import { SingleVoyageComponent } from './voyage-list/single-voyage/single-voyage.component';
import { VoyageFormComponent } from './voyage-list/voyage-form/voyage-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { VoyagesService } from './services/voyages.service';
import { AuthGuardService } from './services/auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';
import { config, from } from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { CardComponent } from './card/card.component';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialModule } from './material.module';


const appRoutes: Routes =[
  {path:'auth/signup', component: SignupComponent},
  {path:'auth/signin', component:SigninComponent},
  {path:'voyages', canActivate: [AuthGuardService],component: VoyagesListComponent},
  {path:'voyages/new', canActivate: [AuthGuardService],component:VoyageFormComponent},
  {path:'voyages/view/:id', canActivate: [AuthGuardService],component:SingleVoyageComponent},
  { path: '', redirectTo: 'voyages', pathMatch: 'full' },
  {path:'profile',canActivate: [AuthGuardService] ,component: ProfileComponent},
  {path:'card',canActivate:[AuthGuardService],component:CardComponent},
  { path: '**', redirectTo: 'voyages' }
  

]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    VoyagesListComponent,
    SingleVoyageComponent,
    VoyageFormComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    VoyagesService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
