import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {

  startDate: Date;
  postError = false;
  postErrorMessage = '';

  singleModel = 'On';

  subscriptionTypes: Observable<string[]>;

  // We want to populate the form with this data model. we want to update the model and form if any one changes
  // for that we are using two way data binding.. make sure to use the name attribute to the field inthe form
  // that crosspondes to the UserSettings field. use <input type='text' name=name [(ngModel)] = usersettings.name.
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  // Copy is always good to work on, when user saves or discard the forms input then only update the original object.
  // else we will get the updated values even if user discards the forms input and decides otherwise.
  userSettings: UserSettings = {...this.originalUserSettings};
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
  }

  onHttpError(errorResponse: any) {
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = 'BackEnd error';
  }

  // https://putsreq.com/VpfOoFdWMezuOCVHdodB/inspect
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if (form.valid) {
      this.dataService.postUserSettingsForms(this.userSettings).subscribe(
        result => console.log('Success ', result),
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Fix above errors';
    }
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }
}
