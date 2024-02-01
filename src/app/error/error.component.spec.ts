import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { routingComponents } from '../app-routing.module';
import { By } from '@angular/platform-browser';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent, routingComponents]
    });
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the error component', () => {
    expect(component).toBeTruthy();
  });

  it('should call goHome method when the button is clicked', () => {
    spyOn(component, 'goHome');
    const homeButton = fixture.debugElement.query(By.css('button')).nativeElement;
    homeButton.click();

    expect(component.goHome).toHaveBeenCalled();
  });
  
});
