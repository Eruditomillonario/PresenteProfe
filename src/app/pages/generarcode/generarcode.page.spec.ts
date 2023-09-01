import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerarcodePage } from './generarcode.page';

describe('GenerarcodePage', () => {
  let component: GenerarcodePage;
  let fixture: ComponentFixture<GenerarcodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GenerarcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
