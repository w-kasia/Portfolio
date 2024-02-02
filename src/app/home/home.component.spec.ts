import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { By } from '@angular/platform-browser';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { StrengthsComponent } from '../strengths/strengths.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, AppRoutingModule, BrowserAnimationsModule],
      declarations: [HomeComponent, routingComponents, NavigationComponent, FooterComponent, ProjectsComponent, SkillsComponent, StrengthsComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation, strengths, skills and footer components', () => {
    const navigation = fixture.nativeElement.querySelector('app-navigation');
    const strengths = fixture.nativeElement.querySelector('app-strengths');
    const skills = fixture.nativeElement.querySelector('app-skills');
    const footer = fixture.nativeElement.querySelector('app-footer');

    expect(navigation).toBeTruthy();
    expect(strengths).toBeTruthy();
    expect(skills).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('should navigate to the contact page when the lets talk button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.contactButton')).nativeElement;
    spyOn(component, 'goToContact');
    button.click();

    expect(component.goToContact).toHaveBeenCalled();
  });
});
