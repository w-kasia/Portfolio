import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsComponent } from '../dialog-animations/dialog-animations.component';
import { MaterialModule } from '../material/material.module';

const firebaseConfig = {
  apiKey: "AIzaSyC4jzGUXXB9IvPncdlXc4YxWTAsBZnVT68",
  authDomain: "portfolio-40ee0.firebaseapp.com",
  databaseURL: "https://portfolio-40ee0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-40ee0",
  storageBucket: "portfolio-40ee0.appspot.com",
  messagingSenderId: "678432282919",
  appId: "1:678432282919:web:7e8dd49be8150afedf7102"
};

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, ReactiveFormsModule, provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())],
      declarations: [ContactComponent, NavigationComponent, FooterComponent, DialogAnimationsComponent],
      providers: [MatDialog]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation and footer components', () => {
    const navigation = fixture.nativeElement.querySelector('app-navigation');
    const footer = fixture.nativeElement.querySelector('app-footer');

    expect(navigation).toBeTruthy();
    expect(footer).toBeTruthy();
  });


  it('should save the data and reset the form on submit', () => {
    const saveDataSpy = spyOn(component, 'saveData');
    const resetSpy = spyOn(component.contactForm, 'reset');

    component.onSubmit();

    expect(saveDataSpy).toHaveBeenCalled();
    expect(resetSpy).toHaveBeenCalled();
  });
});
