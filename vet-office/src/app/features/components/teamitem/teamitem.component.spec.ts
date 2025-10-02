import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamitemComponent } from './teamitem.component';

describe('TeamitemComponent', () => {
  let component: TeamitemComponent;
  let fixture: ComponentFixture<TeamitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
