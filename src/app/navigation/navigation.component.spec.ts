import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, AppRoutingModule, BrowserAnimationsModule],
      declarations: [NavigationComponent, routingComponents]
    });
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navigation component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct router links', () => {
    const routerLinks = fixture.debugElement.queryAll(By.css('.menuItem'));
    const expectedLinks = ['/home', '/home', '/about', '/projects', '/contact', null];
    expect(routerLinks.length).toBe(expectedLinks.length);

    routerLinks.forEach((link, index) => {
      expect(link.nativeElement.getAttribute('routerLink')).toBe(expectedLinks[index]);
    });
    });

  it('should have the correct router links on small devices', () => {
    const routerLinksOnSmallDevices = fixture.debugElement.queryAll(By.css('.listItem'));
    const expectedLinksOnSmallDevices = ['/home', '/about', '/projects', '/contact', null];
    expect(routerLinksOnSmallDevices.length).toBe(expectedLinksOnSmallDevices.length);

    routerLinksOnSmallDevices.forEach((link, index) => {
      expect(link.nativeElement.getAttribute('routerLink')).toBe(expectedLinksOnSmallDevices[index]);
    });
    });
});
