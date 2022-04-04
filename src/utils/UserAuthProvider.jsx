import Cookies from "js-cookie";

/**
 * This represents some generic auth provider API, like Firebase.
 */
const UserAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    UserAuthProvider.isAuthenticated = true;
    setTimeout(callback, 2000); // fake async
  },
  signout(callback) {
    UserAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { UserAuthProvider };
