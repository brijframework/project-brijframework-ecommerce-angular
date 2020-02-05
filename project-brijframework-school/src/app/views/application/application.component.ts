
import { Component , OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../../service/application.service';


@Component({
  templateUrl: 'application.component.html'
})
export class ApplicationComponent implements OnInit, OnDestroy {
    public applications: any[];
    public modelData = {
      id: null,
      firstName: null,
      middleName: null,
      lastName: null,
      dateOfBirth: null,
      gender: null,
      active : null,
      address : {
       id : null,
       addressLine1: null,
       addressLine2: null,
       landMark: null,
       zipcode: null,
       cityId: null
      }
    };
    form: FormGroup;
    columns: { key: string; title: string; orderEnabled: boolean; }[];

    constructor(private modService: NgbModal ,
      private config: NgbModalConfig ,
      private fb: FormBuilder ,
      private applicationService: ApplicationService) {
    }

   ngOnInit(): void {
     this.applications = [];
     this.form = this.fb.group({
        id: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        firstName: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        middleName: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        lastName: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        gender: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        dateOfBirth: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        active: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        'address.id':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(1)])],
        'address.addressLine1':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        'address.addressLine2': ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        'address.landMark': ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        'address.zipcode': ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        'address.cityId': ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])]
      });
      this.columns = [
        { key: 'appLogo', title: 'App Logo', orderEnabled: false },
        { key: 'appId', title: 'App Id', orderEnabled: false },
        { key: 'appName', title: 'App Name', orderEnabled: false },
        { key: 'appURL', title: 'App URL', orderEnabled: false },
        { key: 'status', title: 'App status', orderEnabled: false }
      ];
      this.loadApplications();
   }
  loadApplications() {
    this.applicationService.getApplicationList().subscribe(
      applicationList => {
        this.applications = applicationList;
      },
    );
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
  }

  addApplication( content: any ) {
    this.modService.open(content, { size: 'lg', backdrop: 'static' });
  }

  updateApplication(content: any, application: any) {
    if ( application['address'] == null) {
      application['address'] = this.modelData.address;
    }
    console.log('values=', application);
    this.modelData = application;
    this.modService.open(content, { size: 'lg', backdrop: 'static' });
  }

  saveApplication(values: any) {
      const application = this.buildRequest(values);
      if ( application['id'] != null) {
        this.applicationService.editApplication(application).subscribe(
          success => {
            this.loadApplications();
            this.modService.dismissAll();
          },
        );
      } else {
        this.applicationService.addApplication(application).subscribe(
          success => {
            this.loadApplications();
            this.modService.dismissAll();
          },
        );
      }
  }

  deleteApplication(values: any) {
    this.applicationService.deleteApplication(values.id).subscribe(
      success => {
        this.loadApplications();
        this.modService.dismissAll();
      },
    );
 }


  buildRequest(values){
    console.log('values=', values);
    const requstJson = {};
    requstJson['id'] = values.id;
    requstJson['firstName'] = values.firstName;
    requstJson['middleName'] = values.middleName;
    requstJson['lastName'] = values.lastName;
    requstJson['dateOfBirth'] = values.dateOfBirth;
    requstJson['gender'] = values.gender;
    requstJson['address'] = {};
    requstJson['address']['id'] = values['address.id'];
    requstJson['address']['addressLine1'] = values['address.addressLine1'];
    requstJson['address']['addressLine2'] = values['address.addressLine2'];
    requstJson['address']['landMark'] = values['address.landMark'];
    requstJson['address']['zipcode'] = values['address.zipcode'];
    requstJson['address']['cityId'] = values['address.cityId'];
    console.log('requstJson=', requstJson);
    return requstJson;
  }

}
