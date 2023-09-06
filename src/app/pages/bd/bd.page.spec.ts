import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BdPage } from './bd.page';

describe('BdPage', () => {
  let component: BdPage;
  let fixture: ComponentFixture<BdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
