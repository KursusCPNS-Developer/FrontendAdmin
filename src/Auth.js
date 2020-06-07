class Auth {
  constructor() {
    this.userLogin=false;
  }
  onLogin(cb){
    this.userLogin=true;
    cb();
  }
  onLogout(cb){
    this.userLogin=false;
    localStorage.clear();
    cb();
  }
}

export default new Auth();
