
import { Component , OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../../service/application.service';


@Component({
  templateUrl: 'application.edition.component.html'
})
export class ApplicationEditionComponent implements OnInit, OnDestroy {
    public columns: any[];
    public applications: any[];
    public applicationEditions: any[];
    public applicationEdition = {
        id: null,
        displayOrder: 1,
        description: null,
        monthlyRate: 0.0,
        startPayDay: 15,
        trail: true,
        version: 1.0,
        applicationId: 0,
        status: true
    };
    form: FormGroup;

    constructor(private modService: NgbModal ,
      private config: NgbModalConfig ,
      private fb: FormBuilder ,
      private applicationService: ApplicationService) {
    }

   ngOnInit(): void {
     this.applicationEditions = [     ];
     this.form = this.fb.group({
      'applicationId': ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(1)])],
      'id':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(1)])],
      'displayOrder':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      'description':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      'monthlyRate':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      'startPayDay':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      'trail':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      'version':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      'status':  ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])]
      });
      this.columns = [
        { key: 'appRoleId', title: 'App Role Id', orderEnabled: false },
        { key: 'appRoleName', title: 'App Role Name', orderEnabled: false },
        { key: 'appMenuId', title: 'App Menu Id', orderEnabled: false },
        { key: 'applicationId', title: 'Application Id', orderEnabled: false },
        { key: 'status', title: 'App Role status', orderEnabled: false }
      ];
      this.loadApplicationEditions();
      this.loadApplications();
   }

   loadApplications() {
    this.applicationService.getApplicationList().subscribe(
      applicationList => {
        this.applications = applicationList;
      },
    );
  }

   loadApplicationEditions() {
    this.applicationService.getApplicationEditionList().subscribe(
      applicationEditionList => {
        this.applicationEditions = applicationEditionList;
      },
    );
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
  }

  addApplicationEdition( content: any ) {
    this.modService.open(content, { size: 'lg', backdrop: 'static' });
  }

  updateApplicationEdition(content: any, applicationEditionDTO: any) {
    console.log('values=', applicationEditionDTO);
    this.applicationEdition = applicationEditionDTO;
    this.modService.open(content, { size: 'lg', backdrop: 'static' });
  }

  saveApplicationEdition(application: any) {
      if ( application['id'] != null) {
        this.applicationService.editApplicationEdition(application).subscribe(
          success => {
            this.loadApplicationEditions();
            this.modService.dismissAll();
          },
        );
      } else {
        this.applicationService.addApplicationEdition(application).subscribe(
          success => {
            this.loadApplicationEditions();
            this.modService.dismissAll();
          },
        );
      }
  }

  deleteApplicationEdition(values: any) {
    this.applicationService.deleteApplicationEdition(values.id).subscribe(
      success => {
        this.loadApplicationEditions();
        this.modService.dismissAll();
      },
    );
 }

}
