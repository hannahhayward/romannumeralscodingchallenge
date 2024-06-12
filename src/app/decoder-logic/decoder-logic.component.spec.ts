import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoderLogicComponent } from './decoder-logic.component';

describe('DecoderLogicComponent', () => {
  let component: DecoderLogicComponent;
  let fixture: ComponentFixture<DecoderLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoderLogicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DecoderLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the numerical value', () => {
    const inputedNumeral = 'xii';
    component.getValue(inputedNumeral);
    expect(component.integer > 0);
  });
  it('should throw error code when not a valid numeral', () => {
    const inputedNumeral = 'o';
    component.getValue(inputedNumeral);
    expect(Number.isNaN(component.integer));
  });
});
