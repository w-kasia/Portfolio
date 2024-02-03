import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrengthsComponent } from './strengths.component';
import { By } from '@angular/platform-browser';

describe('StrengthsComponent', () => {
  let component: StrengthsComponent;
  let fixture: ComponentFixture<StrengthsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrengthsComponent]
    });
    fixture = TestBed.createComponent(StrengthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the strengths component', () => {
    expect(component).toBeTruthy();
  });

  it('should display 6 strength containers', () => {
    const strengthContainers = fixture.debugElement.queryAll(By.css('.strengthContainer'));
    expect(strengthContainers.length).toBe(6);
  })
});
