import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UescPageComponent } from './uesc-page.component';

describe('UescPageComponent', () => {
  let component: UescPageComponent;
  let fixture: ComponentFixture<UescPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UescPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UescPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
