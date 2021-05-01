const Employee = require('../lib/Employee');
describe("Employee instance creation", () => {
    const employee = new Employee('Test name', 100, 'aaa@aaa.com');
    test("getName should return value assigned to name attribute", () => {      
      expect(employee.getName()).toEqual('Test name');
    });

    test("getId should return value assigned to id attribute", () => {      
        expect(employee.getId()).toEqual(100);
    });

    test("getEmail should return value assigned to email attribute", () => {      
        expect(employee.getEmail()).toEqual('aaa@aaa.com');
    });

    test("getRole should return Employee", () => {      
        expect(employee.getRole()).toEqual('Employee');
    });
  });