import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoublePage } from './double.page';

describe('DoublePage', () => {
  let component: DoublePage;
  let fixture: ComponentFixture<DoublePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
