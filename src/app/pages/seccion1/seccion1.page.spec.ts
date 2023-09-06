import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Seccion1Page } from './seccion1.page';

describe('Seccion1Page', () => {
  let component: Seccion1Page;
  let fixture: ComponentFixture<Seccion1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Seccion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
