import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatMenuComponent } from './lat-menu.component';

describe('LatMenuComponent', () => {
  let component: LatMenuComponent;
  let fixture: ComponentFixture<LatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
