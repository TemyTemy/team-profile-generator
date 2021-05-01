const Engineer = require('../lib/Engineer');

describe("Engineer instance creation", () => {
  const engineer = new Engineer('Boris', 6, 'boris@gmail.com', 'borisj');
  test("getGithub should return value assigned to github attribute", () => {      
    expect(engineer.getGithub()).toEqual('borisj');
  });

  test("getRole should return Engineer", () => {      
    expect(engineer.getRole()).toEqual('Engineer');
  });
});