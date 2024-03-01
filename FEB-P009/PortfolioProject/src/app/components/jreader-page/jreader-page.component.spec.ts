import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JreaderPageComponent } from './jreader-page.component';

describe('JreaderPageComponent', () => {
  let component: JreaderPageComponent;
  let fixture: ComponentFixture<JreaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JreaderPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JreaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
