import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSalarieComponent } from './simple-salarie.component';

describe('SimpleSalarieComponent', () => {
  let component: SimpleSalarieComponent;
  let fixture: ComponentFixture<SimpleSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSalarieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
