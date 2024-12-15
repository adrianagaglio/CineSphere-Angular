import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowratingComponent } from './showrating.component';

describe('ShowratingComponent', () => {
  let component: ShowratingComponent;
  let fixture: ComponentFixture<ShowratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowratingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
