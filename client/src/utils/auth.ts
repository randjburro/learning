

class AuthService {

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken: any) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
