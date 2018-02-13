
import { Injectable } from '@angular/core';


@Injectable()
export class AppdataProvider {

  constructor() {
    console.log('Hello AppdataProvider Provider');
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

}
