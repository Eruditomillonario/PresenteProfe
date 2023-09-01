import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoasisPage } from './estadoasis.page';

describe('EstadoasisPage', () => {
  let component: EstadoasisPage;
  let fixture: ComponentFixture<EstadoasisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstadoasisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
