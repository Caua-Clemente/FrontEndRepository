import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraBuscaComponent } from './barra-busca.component';

describe('BarraBuscaComponent', () => {
  let component: BarraBuscaComponent;
  let fixture: ComponentFixture<BarraBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraBuscaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
