import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsComponent]
    });
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the skills component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all images', () => {
    let images = fixture.nativeElement.querySelectorAll('img');

    expect(images.length).toBe(12);
  });

});
