import { ɵdetectChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports:[FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //1.Testing Parent component loading
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //2.Testing Child component loading
  it('should render child component elements-- product-details', () => {
    const childComponent = fixture.debugElement.queryAll(By.css('app-product-details'));
    expect(childComponent).toBeTruthy();
  });

  //3.Testing Child component loading
  it('should render all child component -- product-details', () => {
    const childComponent = fixture.debugElement.queryAll(By.css('app-product-details'));
    expect(childComponent.length).toBe(component.prodyctListArray.length);
  });

  //4.Testing Child component Properties
  it('testing child compoenent data -- product-details', () => {
    const testObj:any={name:"IQOO",category:"Mobile",id:100,price:12999};
    const childComponent = fixture.debugElement.query(By.css('app-product-details'));
    expect(childComponent.properties["prodObj"]).toEqual(testObj);
  });

  //5.Testing Child component events
  it('testing child compoenent events -- onProductRemove', () => {
    const testObj:any={name:"IQOO",category:"Mobile",id:100,price:12999};
    const childComponent = fixture.debugElement.query(By.css('app-product-details'));
    const id = childComponent.properties["prodObj"].id;
    childComponent.triggerEventHandler('onProdRemoved',id);
    let index = component.prodyctListArray.findIndex((item:any)=>item.id==id);
    expect(index).toEqual(0);
  });

});
