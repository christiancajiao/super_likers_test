import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinedHeroesComponent } from './pined-heroes.component';

describe('PinedHeroesComponent', () => {
  let component: PinedHeroesComponent;
  let fixture: ComponentFixture<PinedHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinedHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinedHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
