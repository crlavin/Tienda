import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChefleraPage } from './cheflera.page';

describe('ChefleraPage', () => {
  let component: ChefleraPage;
  let fixture: ComponentFixture<ChefleraPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ChefleraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
