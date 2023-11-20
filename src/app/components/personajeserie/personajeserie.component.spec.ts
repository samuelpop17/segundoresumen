import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeserieComponent } from './personajeserie.component';

describe('PersonajeserieComponent', () => {
  let component: PersonajeserieComponent;
  let fixture: ComponentFixture<PersonajeserieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajeserieComponent]
    });
    fixture = TestBed.createComponent(PersonajeserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
