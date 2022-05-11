import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {

  let pipe:GradePipe;

  beforeEach(()=>{
    pipe = new GradePipe();
  });

  //1. Test Pipe class instance
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  //2. Test Pipe Class Method
  it('Should return Outstanding when input is 1', () => {
    const result:string = pipe.transform(1);
    expect(result).toBe("Outstanding");
  });

  //3. Test Pipe Class Method
  it('Should return Excellent when input is 2', () => {
    const result:string = pipe.transform(2);
    expect(result).toBe("Excellent");
  });

  //4. Test Pipe Class Method
  it('Should return Good when input is 3', () => {
    const result:string = pipe.transform(3);
    expect(result).toBe("Good");
  });

  //5. Test Pipe Class Method
  it('Should return Invalid when input is -7', () => {
    const result:string = pipe.transform(-7);
    expect(result).toBe("Invalid");
  });

  //6. Test Pipe Class Method
  it('Should return Invalid when input is invalid number 6', () => {
    const result:string = pipe.transform(6);
    expect(result).toBe("Invalid");
  });

  //7. Test Pipe Class Method
  it('Should return Invalid when input is inavlid number: 0', () => {
    const result:string = pipe.transform(0);
    expect(result).toBe("Invalid");
  });

});
