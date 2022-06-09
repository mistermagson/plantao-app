import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiguidadeComponent } from './antiguidade.component';

describe('AntiguidadeComponent', () => {
  let component: AntiguidadeComponent;
  let fixture: ComponentFixture<AntiguidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiguidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiguidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
