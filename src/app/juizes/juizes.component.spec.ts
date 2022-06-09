import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuizesComponent } from './juizes.component';

describe('JuizesComponent', () => {
  let component: JuizesComponent;
  let fixture: ComponentFixture<JuizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuizesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
