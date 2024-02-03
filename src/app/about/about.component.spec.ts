import { FooterComponent } from './../footer/footer.component';
import { NavigationComponent } from './../navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './../material/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { By } from '@angular/platform-browser';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [MaterialModule, AppRoutingModule, BrowserAnimationsModule],
        declarations: [AboutComponent, NavigationComponent, FooterComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the about component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation and footer components', () => {
    const navigation = fixture.nativeElement.querySelector('app-navigation');
    const footer = fixture.nativeElement.querySelector('app-footer');

    expect(navigation).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('should navigate to the contact page when the lets talk button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.contactMeBtn')).nativeElement;
    spyOn(component, 'goToContactForm');
    button.click();

    expect(component.goToContactForm).toHaveBeenCalled();
  });

  it('should navigate to the projects page when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.projectsBtn')).nativeElement;
    spyOn(component, 'goToProjects');
    button.click();

    expect(component.goToProjects).toHaveBeenCalled();
  });
});
