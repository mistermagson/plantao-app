import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantoesComponent } from './plantoes.component';

describe('PlantoesComponent', () => {
  let component: PlantoesComponent;
  let fixture: ComponentFixture<PlantoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
