import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Seccion2Page } from './seccion2.page';

describe('Seccion2Page', () => {
  let component: Seccion2Page;
  let fixture: ComponentFixture<Seccion2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Seccion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
