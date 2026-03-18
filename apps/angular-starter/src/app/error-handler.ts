import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    console.error('Angular error:', error);
    
    // You can add additional error handling here:
    // - Send to error tracking service (e.g., Sentry)
    // - Show user-friendly notification
    // - Log to server
  }
}
