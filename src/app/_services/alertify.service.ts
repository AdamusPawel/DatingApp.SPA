import { Injectable } from '@angular/core';
// Declaring the variable allows us to use a library with a global namespace, that does not have a TypeScript declaration file
declare let alertify: any;

@Injectable()
export class AlertifyService {
  constructor() {}

  confirm (title: string, message: string, okCallback: () => any) {
    alertify.confirm(title, message, function(e) {
        if (e) {
            okCallback();
        }
     }, null);
}

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
