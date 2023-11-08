import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonsteraPage } from './monstera.page';

describe('MonsteraPage', () => {
  let component: MonsteraPage;
  let fixture: ComponentFixture<MonsteraPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MonsteraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
