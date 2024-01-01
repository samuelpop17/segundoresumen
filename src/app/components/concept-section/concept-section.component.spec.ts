import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptSectionComponent } from './concept-section.component';

describe('ConceptSectionComponent', () => {
  let component: ConceptSectionComponent;
  let fixture: ComponentFixture<ConceptSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConceptSectionComponent]
    });
    fixture = TestBed.createComponent(ConceptSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
