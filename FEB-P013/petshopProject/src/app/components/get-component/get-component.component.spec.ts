import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComponentComponent } from './get-component.component';

describe('GetComponentComponent', () => {
  let component: GetComponentComponent;
  let fixture: ComponentFixture<GetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
