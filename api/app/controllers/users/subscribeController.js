
import validator from 'email-validator';
import UserManager from 'modules/UserManager';
import UserCreateUserContext from 'contexts/user/userCreateUserContext';
import UserSerializer from 'serializers/user/userSerializer';
import UserCreateSessionContext from 'contexts/sessions/userCreateSessionContext';

import {
  ApiForbiddenError,
  ApiBadRequestError
} from 'modules/apiError';

let webpush = require('web-push');
class SubscribeController {


  static async create(req, res, next) {
   console.log("create subscribe");
   let sub = req.body;
   res.set('Content-Type', 'application/json');
   webpush.setVapidDetails(
     'mailto:example@yourdomain.org',
     "BPHZPfD6ibAOEJKIUAhVBuCm7CXisWr0i_pv25fENuJFVmHUNRWY4vSMqdKeLtNltFyuKm-_w1qpL-xOif79u4Y", 
     "Sr_9ZFkmKeZVyB8sXV1VzwrxCqsrduhL2SHhb2I478g"
   );
 
   let payload = JSON.stringify({
     "notification": {
       "title": "Blackbox Tech",
       "body": "Thanks for subscribing to my channel",
       "icon": "https://yt3.ggpht.com/a-/AAuE7mCxr-4W53FAxBRcKR0iDk_vPCSAmW-QKFGaFA=s88-mo-c-c0xffffffff-rj-k-no"
     }
   });
 
   Promise.resolve(webpush.sendNotification(sub, payload))
     .then(() => res.status(200).json({
       message: 'Notification sent'
     }))
     .catch(err => {
       console.error(err);
       res.sendStatus(500);
     })
   return res.json({
    data: {}
  });
  }

}

export default SubscribeController;
