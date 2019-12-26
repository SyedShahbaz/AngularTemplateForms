import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {

  // We want to populate the form with this data model. we want to update the model and form if any one changes
  // for that we are using two way data binding.. make sure to use the name attribute to the field inthe form
  // that crosspondes to the UserSettings field. use <input type='text' name=name [(ngModel)] = usersettings.name.
  originalUserSettings: UserSettings = {
    name: 'Syed',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'Some notes...'
  };

  // Copy is always good to work on, when user saves or discard the forms input then only update the original object.
  // else we will get the updated values even if user discards the forms input and decides otherwise.
  userSettings: UserSettings = {...this.originalUserSettings};
  constructor() { }

  ngOnInit() {
  }

}
