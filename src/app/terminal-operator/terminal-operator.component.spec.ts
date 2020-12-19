import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalOperatorComponent } from './terminal-operator.component';

describe('TerminalOperatorComponent', () => {
  let component: TerminalOperatorComponent;
  let fixture: ComponentFixture<TerminalOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
