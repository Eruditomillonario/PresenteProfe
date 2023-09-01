import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioprofePage } from './inicioprofe.page';

describe('InicioprofePage', () => {
  let component: InicioprofePage;
  let fixture: ComponentFixture<InicioprofePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
