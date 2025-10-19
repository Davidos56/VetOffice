import { Injectable } from "@angular/core";
import { AppConfig } from "../core/app-config";

@Injectable({providedIn: 'root'})
export class ComunicationService{
 /**
   * Opens the user's default SMS app with a pre-filled message.
   */
  openSMS(phoneNumber: string): void {
    if (!phoneNumber) {
      console.warn('CommunicationService: Both phone number and message are empty.');
      return;
    }
    const smsUrl = this.getSmsUrl(phoneNumber);
    this.navigateToUrl(smsUrl, 'SMS');
  }

  /**
   * Initiates a phone call using the device's dialer.
   */
  makeCall(phoneNumber: string): void {
    if (!phoneNumber) {
      console.warn('CommunicationService: Phone number is missing.');
      return;
    }

    const telUrl = `tel:${phoneNumber}`;
    this.navigateToUrl(telUrl, 'phone call');
  }

  /**
   * Handles navigation to the SMS or tel URL safely.
   */
  private navigateToUrl(url: string, action: string): void {
    try {
      window.location.href = url;
    } catch (error) {
      console.error(`CommunicationService: Failed to open ${action}.`, error);
    }
  }

  /**
   * Builds an SMS URL that is compatible with both Android and iOS.
   */
  private getSmsUrl(phoneNumber: string): string {
    return `sms:${phoneNumber}`;
  }
}