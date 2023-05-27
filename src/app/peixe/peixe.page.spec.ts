import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeixePage } from './peixe.page';

describe('PeixePage', () => {
  let component: PeixePage;
  let fixture: ComponentFixture<PeixePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeixePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
