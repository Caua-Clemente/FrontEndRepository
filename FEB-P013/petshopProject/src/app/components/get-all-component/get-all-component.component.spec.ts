import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllComponentComponent } from './get-all-component.component';

describe('GetAllComponentComponent', () => {
  let component: GetAllComponentComponent;
  let fixture: ComponentFixture<GetAllComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
