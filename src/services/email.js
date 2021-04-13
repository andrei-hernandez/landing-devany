import { init, send } from 'emailjs-com';

init("user_ydFG3Q6SGPNGg04jWgc4b");


export const SendEmailContact = (EmailContact = {}) => {

  const service_ID = 'service_4tcim0z';
  const template_ID = 'template_bh7273u';

  send(service_ID, template_ID, EmailContact)
    .then(function (response) {
      console.log('Success!', response.status, response.text);
    }, function (error) {
      console.log('Failed', error);
    });
}