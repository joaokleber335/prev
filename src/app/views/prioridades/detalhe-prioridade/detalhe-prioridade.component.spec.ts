import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePrioridadeComponent } from './detalhe-prioridade.component';

describe('DetalhePrioridadeComponent', () => {
  let component: DetalhePrioridadeComponent;
  let fixture: ComponentFixture<DetalhePrioridadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePrioridadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePrioridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
