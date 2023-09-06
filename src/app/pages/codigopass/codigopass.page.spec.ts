import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigopassPage } from './codigopass.page';

describe('CodigopassPage', () => {
  let component: CodigopassPage;
  let fixture: ComponentFixture<CodigopassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodigopassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
