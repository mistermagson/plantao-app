import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortariasComponent } from './portarias.component';

describe('PortariasComponent', () => {
  let component: PortariasComponent;
  let fixture: ComponentFixture<PortariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
