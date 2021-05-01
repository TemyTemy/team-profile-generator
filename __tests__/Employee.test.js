const Employee = require('../lib/Employee');
describe("Employee instance creation", () => {
    test("getName should return name attribute", () => {
      const employee = new Employee('Test name', 100, 'aaa@aaa.com');
      expect(employee.getName()).toEqual('Test name');
    });
  });