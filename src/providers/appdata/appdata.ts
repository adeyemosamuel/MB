
import { Injectable } from '@angular/core';


@Injectable()
export class AppdataProvider {

    constructor() {
        console.log('Hello AppdataProvider Provider');
    }

    getCountry(): any {
        let data = [
            { "country": "Nigeria" },
            { "country": "Afghanistan" },
            { "country": "Albania" },
            { "country": "Algeria" },
            { "country": "American Samoa" },
            { "country": "Andorra" },
            { "country": "Angola" },
            { "country": "Anguilla" },
            { "country": "Antarctica" },
            { "country": "Antigua and Barbuda" },
            { "country": "Argentina" },
            { "country": "Armenia" },
            { "country": "Aruba" },
            { "country": "Australia" },
            { "country": "Austria" },
            { "country": "Azerbaijan" },
            { "country": "Bahamas" },
            { "country": "Bahrain" },
            { "country": "Bangladesh" },
            { "country": "Barbados" },
            { "country": "Belarus" },
            { "country": "Belgium" },
            { "country": "Belize" },
            { "country": "Benin" },
            { "country": "Bermuda" },
            { "country": "Bhutan" },
            { "country": "Bolivia" },
            { "country": "Bosnia and Herzegovina" },
            { "country": "Botswana" },
            { "country": "Bouvet Island" },
            { "country": "Brazil" },
            { "country": "British Indian Ocean Territory" },
            { "country": "Brunei" },
            { "country": "Bulgaria" },
            { "country": "Burkina Faso" },
            { "country": "Burundi" },
            { "country": "Cambodia" },
            { "country": "Cameroon" },
            { "country": "Canada" },
            { "country": "Cape Verde" },
            { "country": "Cayman Islands" },
            { "country": "Central African Republic" },
            { "country": "Chad" },
            { "country": "Chile" },
            { "country": "China" },
            { "country": "Christmas Island" },
            { "country": "Cocos (Keeling) Islands" },
            { "country": "Colombia" },
            { "country": "Comoros" },
            { "country": "Congo" },
            { "country": "The Democratic Republic of Congo" },
            { "country": "Cook Islands" },
            { "country": "Costa Rica" },
            { "country": "Ivory Coast" },
            { "country": "Croatia" },
            { "country": "Cuba" },
            { "country": "Cyprus" },
            { "country": "Czech Republic" },
            { "country": "Denmark" },
            { "country": "Djibouti" },
            { "country": "Dominica" },
            { "country": "Dominican Republic" },
            { "country": "East Timor" },
            { "country": "Ecuador" },
            { "country": "Egypt" },
            { "country": "England" },
            { "country": "El Salvador" },
            { "country": "Equatorial Guinea" },
            { "country": "Eritrea" },
            { "country": "Estonia" },
            { "country": "Ethiopia" },
            { "country": "Falkland Islands" },
            { "country": "Faroe Islands" },
            { "country": "Fiji Islands" },
            { "country": "Finland" },
            { "country": "France" },
            { "country": "French Guiana" },
            { "country": "French Polynesia" },
            { "country": "French Southern territories" },
            { "country": "Gabon" },
            { "country": "Gambia" },
            { "country": "Georgia" },
            { "country": "Germany" },
            { "country": "Ghana" },
            { "country": "Gibraltar" },
            { "country": "Greece" },
            { "country": "Greenland" },
            { "country": "Grenada" },
            { "country": "Guadeloupe" },
            { "country": "Guam" },
            { "country": "Guatemala" },
            { "country": "Guinea" },
            { "country": "Guinea-Bissau" },
            { "country": "Guyana" },
            { "country": "Haiti" },
            { "country": "Heard Island and McDonald Islands" },
            { "country": "Holy See (Vatican City State)" },
            { "country": "Honduras" },
            { "country": "Hong Kong" },
            { "country": "Hungary" },
            { "country": "Iceland" },
            { "country": "India" },
            { "country": "Indonesia" },
            { "country": "Iran" },
            { "country": "Iraq" },
            { "country": "Ireland" },
            { "country": "Israel" },
            { "country": "Italy" },
            { "country": "Jamaica" },
            { "country": "Japan" },
            { "country": "Jordan" },
            { "country": "Kazakstan" },
            { "country": "Kenya" },
            { "country": "Kiribati" },
            { "country": "Kuwait" },
            { "country": "Kyrgyzstan" },
            { "country": "Laos" },
            { "country": "Latvia" },
            { "country": "Lebanon" },
            { "country": "Lesotho" },
            { "country": "Liberia" },
            { "country": "Libyan Arab Jamahiriya" },
            { "country": "Liechtenstein" },
            { "country": "Lithuania" },
            { "country": "Luxembourg" },
            { "country": "Macao" },
            { "country": "Macedonia" },
            { "country": "Madagascar" },
            { "country": "Malawi" },
            { "country": "Malaysia" },
            { "country": "Maldives" },
            { "country": "Mali" },
            { "country": "Malta" },
            { "country": "Marshall Islands" },
            { "country": "Martinique" },
            { "country": "Mauritania" },
            { "country": "Mauritius" },
            { "country": "Mayotte" },
            { "country": "Mexico" },
            { "country": "Micronesia, Federated States of" },
            { "country": "Moldova" },
            { "country": "Monaco" },
            { "country": "Mongolia" },
            { "country": "Montserrat" },
            { "country": "Morocco" },
            { "country": "Mozambique" },
            { "country": "Myanmar" },
            { "country": "Namibia" },
            { "country": "Nauru" },
            { "country": "Nepal" },
            { "country": "Netherlands" },
            { "country": "Netherlands Antilles" },
            { "country": "New Caledonia" },
            { "country": "New Zealand" },
            { "country": "Nicaragua" },
            { "country": "Niger" },
            { "country": "Niue" },
            { "country": "Norfolk Island" },
            { "country": "North Korea" },
            { "country": "Northern Ireland" },
            { "country": "Northern Mariana Islands" },
            { "country": "Norway" },
            { "country": "Oman" },
            { "country": "Pakistan" },
            { "country": "Palau" },
            { "country": "Palestine" },
            { "country": "Panama" },
            { "country": "Papua New Guinea" },
            { "country": "Paraguay" },
            { "country": "Peru" },
            { "country": "Philippines" },
            { "country": "Pitcairn" },
            { "country": "Poland" },
            { "country": "Portugal" },
            { "country": "Puerto Rico" },
            { "country": "Qatar" },
            { "country": "Reunion" },
            { "country": "Romania" },
            { "country": "Russian Federation" },
            { "country": "Rwanda" },
            { "country": "Saint Helena" },
            { "country": "Saint Kitts and Nevis" },
            { "country": "Saint Lucia" },
            { "country": "Saint Pierre and Miquelon" },
            { "country": "Saint Vincent and the Grenadines" },
            { "country": "Samoa" },
            { "country": "San Marino" },
            { "country": "Sao Tome and Principe" },
            { "country": "Saudi Arabia" },
            { "country": "Scotland" },
            { "country": "Senegal" },
            { "country": "Seychelles" },
            { "country": "Sierra Leone" },
            { "country": "Singapore" },
            { "country": "Slovakia" },
            { "country": "Slovenia" },
            { "country": "Solomon Islands" },
            { "country": "Somalia" },
            { "country": "South Africa" },
            { "country": "South Georgia and the South Sandwich Islands" },
            { "country": "South Korea" },
            { "country": "South Sudan" },
            { "country": "Spain" },
            { "country": "SriLanka" },
            { "country": "Sudan" },
            { "country": "Suriname" },
            { "country": "Svalbard and Jan Mayen" },
            { "country": "Swaziland" },
            { "country": "Sweden" },
            { "country": "Switzerland" },
            { "country": "Syria" },
            { "country": "Tajikistan" },
            { "country": "Tanzania" },
            { "country": "Thailand" },
            { "country": "Togo" },
            { "country": "Tokelau" },
            { "country": "Tonga" },
            { "country": "Trinidad and Tobago" },
            { "country": "Tunisia" },
            { "country": "Turkey" },
            { "country": "Turkmenistan" },
            { "country": "Turks and Caicos Islands" },
            { "country": "Tuvalu" },
            { "country": "Uganda" },
            { "country": "Ukraine" },
            { "country": "United Arab Emirates" },
            { "country": "United Kingdom" },
            { "country": "United States" },
            { "country": "United States Minor Outlying Islands" },
            { "country": "Uruguay" },
            { "country": "Uzbekistan" },
            { "country": "Vanuatu" },
            { "country": "Venezuela" },
            { "country": "Vietnam" },
            { "country": "Virgin Islands, British" },
            { "country": "Virgin Islands, U.S." },
            { "country": "Wales" },
            { "country": "Wallis and Futuna" },
            { "country": "Western Sahara" },
            { "country": "Yemen" },
            { "country": "Yugoslavia" },
            { "country": "Zambia" },
            { "country": "Zimbabwe" }
        ];
        return data;

    }

    // State
    getState(): any {
        let data = [
            {
                "label": "LAGOS",
                "value": "15",
                "checked": false
            },
            {
                "label": "ABUJA",
                "value": "08",
                "checked": false
            },
            {
                "label": "ABIA",
                "value": "23",
                "checked": false
            },
            {
                "label": "ADAMAWA",
                "value": "04",
                "checked": false
            },
            {
                "label": "ANAMBRA",
                "value": "02",
                "checked": false
            },
            {
                "label": "AKWA IBOM",
                "value": "01",
                "checked": false
            },
            {
                "label": "BAUCHI",
                "value": "03",
                "checked": false
            },
            {
                "label": "BAYELSA",
                "value": "32",
                "checked": false
            },
            {
                "label": "BENUE",
                "value": "05",
                "checked": false
            },
            {
                "label": "BORNO",
                "value": "06",
                "checked": false
            },
            {
                "label": "CROSS RIVER",
                "value": "07",
                "checked": false
            },
            {
                "label": "DELTA",
                "value": "09",
                "checked": false
            },
            {
                "label": "EBONYI",
                "value": "33",
                "checked": false
            },
            {
                "label": "ENUGU",
                "value": "25",
                "checked": false
            },
            {
                "label": "EDO",
                "value": "24",
                "checked": false
            },
            {
                "label": "EKITI",
                "value": "34",
                "checked": false
            },
            {
                "label": "GOMBE",
                "value": "35",
                "checked": false
            },
            {
                "label": "IMO",
                "value": "10",
                "checked": false
            },
            {
                "label": "JIGAWA",
                "value": "26",
                "checked": false
            },
            {
                "label": "KADUNA",
                "value": "11",
                "checked": false
            },
            {
                "label": "KANO",
                "value": "12",
                "checked": false
            },
            {
                "label": "KATSINA",
                "value": "13",
                "checked": false
            },
            {
                "label": "KEBBI",
                "value": "27",
                "checked": false
            },
            {
                "label": "KOGI",
                "value": "28",
                "checked": false
            },
            {
                "label": "KWARA",
                "value": "14",
                "checked": false
            },
            {
                "label": "NASARAWA",
                "value": "36",
                "checked": false
            },
            {
                "label": "NIGER",
                "value": "16",
                "checked": false
            },
            {
                "label": "OGUN",
                "value": "17",
                "checked": false
            },
            {
                "label": "ONDO",
                "value": "18",
                "checked": false
            },
            {
                "label": "OSUN",
                "value": "29",
                "checked": false
            },
            {
                "label": "OYO",
                "value": "19",
                "checked": false
            },
            {
                "label": "PLATEAU",
                "value": "20",
                "checked": false
            },
            {
                "label": "RIVERS",
                "value": "21",
                "checked": false
            },
            {
                "label": "SOKOTO",
                "value": "22",
                "checked": false
            },
            {
                "label": "TARABA",
                "value": "30",
                "checked": false
            },
            {
                "label": "YOBE",
                "value": "31",
                "checked": false
            },
            {
                "label": "ZAMFARA",
                "value": "37",
                "checked": false
            }
        ];
        return data;
    }

    getInfo(): any {

        let data = [
            {
                "id":"1",
                "name": "Adeyemo Samuel O.",
                "address": "7, Onitsha Street, off Agege Road",
                "town": "Oshodi",
                "phone": "08170087989",
                "email": "trade@fcmb.com",
                "postcode": "101011",
                "airline": "British Airways",
                "ticket": "BA-260218-123456",
                "route": "Off Agege road",
                "idnumber": "A234567890",
                "comments": "I love this app",
                "bname": "Mike Olawale",
                "baddress":"5, Joel Ogunsola, Ikeja",
                "bphone":"07032453245",
                "baccount": "0017674230",
                "bcountries": "Canada",
                "bpostcode": "5012843",
                "payment":"Shipment of A",
                "amount":"$5,000",
                "charge": "$1,045",
                "applied": "Five thousand US Dollars",
                "info": "FCMB International Trade. Tell me more",
                "valid":"null",
                "transfer": "null",
                "estimated": "$1,200",
                "formnumber": "321456789320",
                "status":"Approved",
                "date":"26/02/18"

            },

            {
                "id":"2",
                "name": "Iyanu Adebayo Hakeem",
                "address": "7, Onitsha Street, off Agege Road",
                "town": "Oshodi",
                "phone": "08170087989",
                "email": "trade@fcmb.com",
                "postcode": "101011",
                "airline": "British Airways",
                "ticket": "BA-260218-123456",
                "route": "Off Agege road",
                "idnumber": "A234567890",
                "comments": "I love this app",
                "bname": "Mike Olawale",
                "baddress":"5, Joel Ogunsola, Ikeja",
                "bphone":"07032453245",
                "baccount": "0017674230",
                "bcountries": "Canada",
                "bpostcode": "5012843",
                "payment":"Shipment of A",
                "amount":"$5,000",
                "charge": "$1,045",
                "applied": "Five thousand US Dollars",
                "info": "FCMB International Trade. Tell me more",
                "valid":"null",
                "transfer": "null",
                "estimated": "$1,200",
                "formnumber": "321456789321",
                "status":"Submitted",
                "date":"25/02/18"

            },

            {
                "id":"3",
                "name": "Mike Ayodeji Olawale",
                "address": "7, Onitsha Street, off Agege Road",
                "town": "Oshodi",
                "phone": "08062820179",
                "email": "trade@fcmb.com",
                "postcode": "101011",
                "airline": "British Airways",
                "ticket": "BA-260218-123456",
                "route": "Off Agege road",
                "idnumber": "A234567890",
                "comments": "I love this app",
                "bname": "Mike Ayodeji Olawale",
                "baddress":"5, Joel Ogunsola, Ikeja",
                "bphone":"07032453245",
                "baccount": "0017674230",
                "bcountries": "Canada",
                "bpostcode": "5012843",
                "payment":"Shipment of A",
                "amount":"$5,000",
                "charge": "$1,045",
                "applied": "Five thousand US Dollars",
                "info": "FCMB International Trade. Tell me more",
                "valid":"null",
                "transfer": "null",
                "estimated": "$1,200",
                "formnumber": "321456789322",
                "status":"Saved",
                "date":"24/02/18"

            },

            {
                "id":"4",
                "name": "Yakubu Dogara George",
                "address": "7, Onitsha Street, off Agege Road",
                "town": "Oshodi",
                "phone": "08062820179",
                "email": "trade@fcmb.com",
                "postcode": "101011",
                "airline": "British Airways",
                "ticket": "BA-260218-123456",
                "route": "Off Agege road",
                "idnumber": "A234567890",
                "comments": "I love this app",
                "bname": "Mike Ayodeji Olawale",
                "baddress":"5, Joel Ogunsola, Ikeja",
                "bphone":"07032453245",
                "baccount": "0017674230",
                "bcountries": "Canada",
                "bpostcode": "5012843",
                "payment":"Shipment of A",
                "amount":"$5,000",
                "charge": "$1,045",
                "applied": "Five thousand US Dollars",
                "info": "FCMB International Trade. Tell me more",
                "valid":"null",
                "transfer": "null",
                "estimated": "$1,200",
                "formnumber": "321456789323",
                "status":"Submitted",
                "date":"23/02/18"

            },
            {
                "id":"5",
                "name": "Francis Finish Futa",
                "address": "7, Onitsha Street, off Agege Road",
                "town": "Oshodi",
                "phone": "08062820179",
                "email": "trade@fcmb.com",
                "postcode": "101011",
                "airline": "British Airways",
                "ticket": "BA-260218-123456",
                "route": "Off Agege road",
                "idnumber": "A234567890",
                "comments": "I love this app",
                "bname": "Mike Ayodeji Olawale",
                "baddress":"5, Joel Ogunsola, Ikeja",
                "bphone":"07032453245",
                "baccount": "0017674230",
                "bcountries": "Canada",
                "bpostcode": "5012843",
                "payment":"Shipment of A",
                "amount":"$5,000",
                "charge": "$1,045",
                "applied": "Five thousand US Dollars",
                "info": "FCMB International Trade. Tell me more",
                "valid":"null",
                "transfer": "null",
                "estimated": "$1,200",
                "formnumber": "321456789324",
                "status":"Approved",
                "date":"22/02/18"

            },

            {
                "id":"6",
                "name": "Emmanuel Martins Olajide",
                "address": "7, Onitsha Street, off Agege Road",
                "town": "Oshodi",
                "phone": "08062820179",
                "email": "trade@fcmb.com",
                "postcode": "101011",
                "airline": "British Airways",
                "ticket": "BA-260218-123456",
                "route": "Off Agege road",
                "idnumber": "A234567890",
                "comments": "I love this app",
                "bname": "Mike Ayodeji Olawale",
                "baddress":"5, Joel Ogunsola, Ikeja",
                "bphone":"07032453245",
                "baccount": "0017674230",
                "bcountries": "Canada",
                "bpostcode": "5012843",
                "payment":"Shipment of A",
                "amount":"$5,000",
                "charge": "$1,045",
                "applied": "Five thousand US Dollars",
                "info": "FCMB International Trade. Tell me more",
                "valid":"null",
                "transfer": "null",
                "estimated": "$1,200",
                "formnumber": "321456789325",
                "status":"Submitted",
                "date":"21/02/18"

            }




        ];

        return data;

    }

}
