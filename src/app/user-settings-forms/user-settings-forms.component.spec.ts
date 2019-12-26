import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsFormsComponent } from './user-settings-forms.component';

describe('UserSettingsFormsComponent', () => {
  let component: UserSettingsFormsComponent;
  let fixture: ComponentFixture<UserSettingsFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
