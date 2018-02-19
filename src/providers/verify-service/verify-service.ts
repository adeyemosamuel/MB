import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VerifyServiceProvider {

  errorMessage: string;

  constructor(public http: HttpClient) {
    console.log('Hello VerifyServiceProvider Provider');
  }

  verifyNext(name, address, town, countries, states, phone,email,postcode, airline,ticket, route, identification, idnumber, comments): boolean {
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

    if (email == '' || email == null) {
      this.errorMessage = 'Enter Valid Email Address';
      return false;
    }

  
    if (identification == '' || identification == null) {
      this.errorMessage = 'Mode of identification is required';
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

    return true;
  }

  verifyNext2(bname,baddress,bphone,baccount,bcountries,bpostcode): boolean{
    if (bname == null || bname == '') {
      this.errorMessage = 'Beneficiary name is required'; 
      return false;
    }

    if (baddress == null || baddress == '') {
      this.errorMessage = 'Fill in the address'; 
      return false;
    }
    return true;
  }

  verifyNext3(payment,amount,charge,applied,info,valid,transfer,estimated): boolean{
    if (payment == null || payment == '') {
      this.errorMessage = 'Select Purpose of Payment'; 
      return false;
    }

    if (amount == null || amount == '') {
      this.errorMessage = 'Select Amount'; 
      return false;
    }

    if (charge == null || charge == '') {
      this.errorMessage = 'Select Charge Amount'; 
      return false;
    }

    if (applied == null || applied == '') {
      this.errorMessage = 'Enter amount applied in words'; 
      return false;
    }


    if (valid == null || valid == '') {
      this.errorMessage = 'Select Valid for Forex'; 
      return false;
    }

    if (transfer == null || transfer == '') {
      this.errorMessage = 'Select Transfer Account'; 
      return false;
    }

    if (estimated == null || estimated == '') {
      this.errorMessage = 'Enter Estimated Debit Amount'; 
      return false;
    }
    return true;
  }

}
