import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { StrengthsComponent } from './strengths/strengths.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DialogAnimationsComponent } from './dialog-animations/dialog-animations.component';

const firebaseConfig = {
  apiKey: "AIzaSyC4jzGUXXB9IvPncdlXc4YxWTAsBZnVT68",
  authDomain: "portfolio-40ee0.firebaseapp.com",
  databaseURL: "https://portfolio-40ee0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-40ee0",
  storageBucket: "portfolio-40ee0.appspot.com",
  messagingSenderId: "678432282919",
  appId: "1:678432282919:web:7e8dd49be8150afedf7102"
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent,
    NavigationComponent,
    ContactComponent,
    ErrorComponent,
    routingComponents,
    StrengthsComponent,
    DialogAnimationsComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
