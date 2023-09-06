import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatePage } from './mate.page';

describe('MatePage', () => {
  let component: MatePage;
  let fixture: ComponentFixture<MatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
