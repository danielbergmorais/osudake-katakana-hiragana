import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessionPage } from './lession.page';

describe('LessionPage', () => {
  let component: LessionPage;
  let fixture: ComponentFixture<LessionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
