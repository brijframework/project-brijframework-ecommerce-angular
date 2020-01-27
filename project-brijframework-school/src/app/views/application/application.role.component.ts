
import { Component , OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../../service/application.service';


@Component({
  templateUrl: 'application.role.component.html'
})
export class ApplicationRoleComponent implements OnInit, OnDestroy {
    public columns: any[];
    public applicationRoles: any[];
    public applicationRole = {
      id : null,
      appRoleId: null,
      appRoleName: null,
      appMenuId: null,
      applicationId: null,
      status: false
    };
    form: FormGroup;
    public applications: any[];

    constructor(private modService: NgbModal ,
      private config: NgbModalConfig ,
      private fb: FormBuilder ,
      private applicationService: ApplicationService) {
    }

   ngOnInit(): void {
     this.applicationRoles = [     ];
     this.form = this.fb.group({
        id: [0],
        appRoleId: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        appRoleName: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        appMenuId: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        appLogo: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        applicationId: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        status: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])]
      });
      this.columns = [
        { key: 'appRoleId', title: 'App Role Id', orderEnabled: false },
        { key: 'appRoleName', title: 'App Role Name', orderEnabled: false },
        { key: 'appMenuId', title: 'App Menu Id', orderEnabled: false },
        { key: 'applicationId', title: 'Application Id', orderEnabled: false },
        { key: 'status', title: 'App Role status', orderEnabled: false }
      ];
      this.loadApplicationRoles();
      this.loadApplications();
   }
   
   loadApplications() {
    this.applicationService.getApplicationList().subscribe(
      applicationList => {
        this.applications = applicationList;
      },
    )
   }

   loadApplicationRoles() {
    this.applicationService.getApplicationRoleList().subscribe(
      applicationRolesList => {
        this.applicationRoles = applicationRolesList;
      },
    );
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
  }

  addApplicationRole( content: any ) {
    this.modService.open(content, { size: 'lg', backdrop: 'static' });
  }

  updateApplicationRole(content: any, applicationRoleDTO: any) {
    console.log('values=', applicationRoleDTO);
    this.applicationRole = applicationRoleDTO;
    this.modService.open(content, { size: 'lg', backdrop: 'static' });
  }

  saveApplicationRole(application: any) {
      if ( application['id'] != null) {
        this.applicationService.editApplicationRole(application).subscribe(
          success => {
            this.loadApplicationRoles();
            this.modService.dismissAll();
          },
        );
      } else {
        this.applicationService.addApplicationRole(application).subscribe(
          success => {
            this.loadApplicationRoles();
            this.modService.dismissAll();
          },
        );
      }
  }

  deleteApplicationRole(values: any) {
    this.applicationService.deleteApplicationRole(values.id).subscribe(
      success => {
        this.loadApplicationRoles();
        this.modService.dismissAll();
      },
    );
 }

}
