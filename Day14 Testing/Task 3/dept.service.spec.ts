import { TestBed } from '@angular/core/testing';

import { DeptService } from './dept.service';

describe('DeptService', () => {
  let service: DeptService;
  let objAdd ={deptno : 103, dname : "Mechanical",  loc :  "Indore"} ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //1. Test default items
  it('Test default items', () => {
    expect(service.deptsArray.length).toBe(3);
   });
 
   //2. Test addDept
   it('Test addDept', () => {
     service.addDept(objAdd) 
     expect(service.deptsArray.length).toBe(4);
    });
 
   // 3. Test Remove Dept -- for valid number
   it('Test Remove Dept -- for valid number', () => { 
     service.removeDept(1) 
     expect(service.deptsArray.length).toBe(2);
    });
 
   // 4. Test Remove Dept -- for invalid     number
   it('Test Remove Dept -- for invalid number', () => { 
    let result  = service.removeDept(999) 
     expect(result).toEqual(service.deptsArray.length);
    });

});
