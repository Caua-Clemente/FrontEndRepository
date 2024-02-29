import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutComponentComponent } from './put-component.component';

describe('PutComponentComponent', () => {
  let component: PutComponentComponent;
  let fixture: ComponentFixture<PutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
