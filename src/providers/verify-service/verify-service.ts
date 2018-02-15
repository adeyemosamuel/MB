import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VerifyServiceProvider {

  errorMessage: string;

  constructor(public http: HttpClient) {
    console.log('Hello VerifyServiceProvider Provider');
  }

  verifyBeforeSubmit(name, address, town, countries, states, phone, route, identification, idnumber, comments): boolean {
    if (name == null || name == '') {
      this.errorMessage = 'Name is required'; 
      return false;
    }

    if (address == null || address == '') {
      this.errorMessage = 'Fill in the address';
      return false;
    }

    if (phone == '' || phone == null) {
      this.errorMessage = 'Enter phone number';
      return false;
    }

    if (identification == '' || identification == null) {
      this.errorMessage = 'Mode of identification is required';
      return false;
    }

    if (route == '' || route == null) {
      this.errorMessage = 'Fill in the route';
      return false;
    }

    if (states == '' || states == null) {
      this.errorMessage = 'Select a state';
      return false;
    }

    if (countries == '' || countries == null) {
      this.errorMessage = 'Select a country';
      return false;
    }

    if (town == '' || town == null) {
      this.errorMessage = 'Fill in the town';
      return false;
    }

    if (idnumber == '' || idnumber == null) {
      this.errorMessage = 'Enter Valid ID Number';
      return false;
    }

    if (comments == '' || comments == null) {
      this.errorMessage = 'Enter Comments';
      return false;
    }
    return true;
  }




}
