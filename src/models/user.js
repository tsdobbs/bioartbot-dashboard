export default class User {
  constructor(id, username, email, password, role) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
  resetUser() {
    this.id = "";
    this.username = "";
    this.email = "";
    this.password = "";
    this.role = "Printer";
  }
}
