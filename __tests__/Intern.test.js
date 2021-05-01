const Intern = require('../lib/Intern');

describe("Intern instance creation", () => {
  const intern = new Intern('Boris', 6, 'boris@gmail.com', 'Oxford University');
  test("getSchool should return value assigned to school attribute", () => {      
    expect(intern.getSchool()).toEqual('Oxford University');
  });

  test("getRole should return Intern", () => {      
    expect(intern.getRole()).toEqual('Intern');
  });
});