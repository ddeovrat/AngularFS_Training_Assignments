import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports:[FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //1. Default Test Case
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //2. Testing Quantity Default Value
  it('Default value of the quantity should be 1', () => {
    expect(component.quantity).toBe(1);
  });

  //2. Testing paragraph Default Value
  it('Default value of the result paragraph ""', () => {
    fixture.detectChanges();
    let obj = fixture.nativeElement.querySelector('p');
    expect(obj.textContent).toBe('');
  });


  //3. Check the result message by calling "getTotalAmount()"  method
  it('Value of the paragraph "Total Amount: 100" after calling getTotalAmount()', () => {
    component.quantity=10;
    component.unitPrice=10;
    component.sum=100;
    component.getTotalAmount();
    fixture.detectChanges();
    let obj = fixture.nativeElement.querySelector('p');
    expect(obj.textContent).toBe('Total Amount: 100');
  });

  //4. Default value after calling getTotalAmount() methods
  it('Value of the paragraph "Total Amount: NaN" after calling getTotalAmount()', () => {
    component.quantity=100;
    component.unitPrice="alpha";
    component.getTotalAmount();
    fixture.detectChanges();
    let obj = fixture.nativeElement.querySelector('p');
    expect(component.result).toBe('Total Amount: NaN');
  });

  //5. Two way binding
  it('Two way binding for price "10"', () => {    
    const inputArray =  fixture.nativeElement.querySelectorAll('input');
		inputArray[1].value = '10';
		inputArray[1].dispatchEvent(new Event('input'));
    expect(component.unitPrice).toBe('10');
  });

  //6. Two way binding
  it('Two way binding for quantity 100', () => {
    
    const inputArray =  fixture.nativeElement.querySelectorAll('input');

		inputArray[2].value= 100;
		inputArray[2].dispatchEvent(new Event('input'));

    //console.log(component.result);  // should modify paragraph
    //console.log(parseInt(component.quantity));
    var data = Number(component.quantity);
    expect(data).toBe(100);
  });

  //7. Butten event
  it('Check the button click event after enter the price and qty', () => {
    
    const inputArray =  fixture.nativeElement.querySelectorAll("input");

		inputArray[0].value = "Nokia";
		inputArray[0].dispatchEvent(new Event('input'));

		inputArray[1].value = 5;
		inputArray[1].dispatchEvent(new Event('input'));

    inputArray[2].value = 5;
		inputArray[2].dispatchEvent(new Event('input'));

    let inputObj = fixture.nativeElement.querySelector('button');
		inputObj.dispatchEvent(new Event('click'));

    //console.log(component.result);  // should modify paragraph
    fixture.detectChanges();
    expect(component.result).toBe('Total Amount: 25');
  });

});
