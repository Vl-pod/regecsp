export default class Validator {
  constructor() {
    this.userNameRegExp = /^(?![\d_-]{4,})([a-zA-Z]+[\w-]*[a-zA-Z0-9])$/;
  }

  validateUsername(username) {
    return this.userNameRegExp.test(username);
  }
}
