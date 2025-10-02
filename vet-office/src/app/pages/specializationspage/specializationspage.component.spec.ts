import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationspageComponent } from './specializationspage.component';

describe('SpecializationspageComponent', () => {
  let component: SpecializationspageComponent;
  let fixture: ComponentFixture<SpecializationspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecializationspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
