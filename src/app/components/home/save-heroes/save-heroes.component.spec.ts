import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveHeroesComponent } from './save-heroes.component';

describe('SaveHeroesComponent', () => {
  let component: SaveHeroesComponent;
  let fixture: ComponentFixture<SaveHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
