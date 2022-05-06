import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenDemoComponent } from './model-driven-demo.component';

describe('ModelDrivenDemoComponent', () => {
  let component: ModelDrivenDemoComponent;
  let fixture: ComponentFixture<ModelDrivenDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDrivenDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
