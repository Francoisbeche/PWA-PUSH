import express from 'express';
import ApiAuthentication from 'middlewares/apiAuthentication';
import UserController from 'controllers/users/userController';
import SubscribeController from 'controllers/users/subscribeController';

class Routes {
  constructor() {
    this.router = express.Router();
    this._setRoutes();
  }

  getRouter() {
    return this.router;
  }

  _setRoutes() {
    this.router
      .route('/user')
      .post(UserController.create)
      .get(
        ApiAuthentication.validJwt,
        ApiAuthentication.retrieveUser,
        UserController.me
      );

    this.router.route('/subscribe').post(
      ApiAuthentication.validJwt,
      ApiAuthentication.retrieveUser,
      SubscribeController.create);
  }
}

export default Routes;
