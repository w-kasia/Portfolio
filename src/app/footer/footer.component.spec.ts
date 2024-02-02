import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [FooterComponent, routingComponents]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the contact page when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.contactBtn')).nativeElement;
    spyOn(component, 'goToContact');
    button.click();

    expect(component.goToContact).toHaveBeenCalled();
  });

  it('should navigate to the about page when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.aboutBtn')).nativeElement;
    spyOn(component, 'goToAbout');
    button.click();

    expect(component.goToAbout).toHaveBeenCalled();
  });

  it('should navigate to the projects page when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.projectsBtn')).nativeElement;
    spyOn(component, 'goToProjects');
    button.click();

    expect(component.goToProjects).toHaveBeenCalled();
  });

  it('should display the correct email address', () => {
    const emailLink = fixture.debugElement.query(By.css('.emailLink')).nativeElement;

    expect(emailLink.href).toContain('mailto:kwaszczuk.contact@gmail.com');
    expect(emailLink.textContent).toBe('kwaszczuk.contact@gmail.com');
  });

  it('should render the linkedin link with the correct href attribute', () => {
    const linkedinLink = fixture.debugElement.query(By.css('.link[href="https://www.linkedin.com/in/katarzyna-waszczuk-4176201b0/"]'));

    expect(linkedinLink).toBeTruthy();
  });

  it('should render the github link with the correct href attribute', () => {
    const githubLink = fixture.debugElement.query(By.css('.link[href="https://github.com/w-kasia"]'));

    expect(githubLink).toBeTruthy();
  });

});
