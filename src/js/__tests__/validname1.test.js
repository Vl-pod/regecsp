import Validator from '../validnamer';

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  it('должен возвращать true для правильных имен пользователя', () => {
    const validUsernames = ['user123', 'user_name', 'username-123'];

    validUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(true);
    });
  });

  it('должен возвращать false для имен пользователя с более чем 3 цифрами подряд', () => {
    const invalidUsernames = ['user1234', 'username-12345', 'user_1234_name'];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(true);
    });
  });

  it('должен возвращать false для имен пользователя, начинающихся или заканчивающихся цифрами, подчеркиванием или тире', () => {
    const invalidUsernames = ['123username', '_user', '-name-', 'user-'];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });

  it('должен возвращать false для имен пользователя с недопустимыми символами', () => {
    const invalidUsernames = ['user@name', 'user.name', 'user*123'];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });

  it('должен возвращать false для имен пользователя, состоящих только из цифр, тире или подчеркиваний', () => {
    const invalidUsernames = ['1234', '----', '____'];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });

  it('должен возвращать false для пустых имен пользователя', () => {
    const invalidUsernames = ['', '   ', '  -  '];

    invalidUsernames.forEach((username) => {
      expect(validator.validateUsername(username)).toBe(false);
    });
  });
});
