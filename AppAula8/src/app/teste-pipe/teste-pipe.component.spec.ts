import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePipeComponent } from './teste-pipe.component';

describe('TestePipeComponent', () => {
  let component: TestePipeComponent;
  let fixture: ComponentFixture<TestePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestePipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
