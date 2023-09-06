import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Seccion3Page } from './seccion3.page';

describe('Seccion3Page', () => {
  let component: Seccion3Page;
  let fixture: ComponentFixture<Seccion3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Seccion3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
