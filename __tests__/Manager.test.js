const Manager = require('../lib/Manager');

describe("Manager instance creation", () => {
  const manager = new Manager('Boris', 6, 'boris@gmail.com', 200);

  test("getRole should return Manager", () => {      
    expect(manager.getRole()).toEqual('Manager');
  });
});