import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-dom',
  templateUrl: './form-dom.component.html',
  styleUrls: ['./form-dom.component.css']
})
export class FormDomComponent implements OnInit {
  // property
  public peopleInfo: any = {
    userName: '',
    sex: '2',
    cityList: ['BeiJing', 'ShangHai', 'TianJin'],
    city: 'TianJin',
    hobby: [
      {
        title: 'Reading',
        checked: false
      },
      {
        title: 'Travel',
        checked: false
      },
      {
        title: 'Coding',
        checked: true
      }
    ],
    mark: ''
  };

  constructor() {}

  ngOnInit() {}

  doSubmit() {
    /*
    jquery  dom

      <input type="text" id="username" />
      let usernameDom:any=document.getElementById('username');
      console.log(usernameDom.value);
    */

    console.log(this.peopleInfo);
  }
}
