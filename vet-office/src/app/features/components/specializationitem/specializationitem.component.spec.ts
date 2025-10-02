import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationitemComponent } from './specializationitem.component';

describe('SpecializationitemComponent', () => {
  let component: SpecializationitemComponent;
  let fixture: ComponentFixture<SpecializationitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecializationitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
