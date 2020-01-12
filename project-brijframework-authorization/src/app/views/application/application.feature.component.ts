
import { Component , OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from '../../service/application.service';


@Component({
  templateUrl: 'application.feature.component.html'
})
export class ApplicationFeatureComponent implements OnInit, OnDestroy {
    public columns: any[];
    public applicationFeatures: any[];
    public applicationFeature = {
      id : null,
      description: null,
      viewDetail: null,
      appEditionId: null,
      status: false
    };
    form: FormGroup;

    constructor(private modService: NgbModal ,
      private config: NgbModalConfig ,
      private fb: FormBuilder ,
      private applicationService: ApplicationService) {
    }

   ngOnInit(): void {
     this.applicationFeatures = [     ];
     this.form = this.fb.group({
        id: [0],
        description: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        viewDetail: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        appEditionId: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
        status: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])]
      });
      this.columns = [
        { key: 'appRoleId', title: 'App Role Id', orderEnabled: false },
        { key: 'appRoleName', title: 'App Role Name', orderEnabled: false },
        { key: 'appMenuId', title: 'App Menu Id', orderEnabled: false },
        { key: 'applicationId', title: 'Application Id', orderEnabled: false },
        { key: 'status', title: 'App Role status', orderEnabled: false }
      ];
      this.loadApplicationFeatures();
   }

   loadApplicationFeatures() {
    this.applicationService.getApplicationFeatureList().subscribe(
      applicationFeatureList => {
        this.applicationFeatures = applicationFeatureList;
      },
    );
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
  }

  addApplicationFeature( content: any ) {
    this.modService.open(content, { size: 'lg', backdrop: 'static' });
  }

  updateApplicationFeature(content: any, applicationFeatureDTO: any) {
    console.log('values=', applicationFeatureDTO);
    this.applicationFeature = applicationFeatureDTO;
    this.modService.open(content, { size: 'lg', backdrop: 'static' });
  }

  saveApplicationFeature(application: any) {
      if ( application['id'] != null) {
        this.applicationService.editApplicationFeature(application).subscribe(
          success => {
            this.loadApplicationFeatures();
            this.modService.dismissAll();
          },
        );
      } else {
        this.applicationService.addApplicationFeature(application).subscribe(
          success => {
            this.loadApplicationFeatures();
            this.modService.dismissAll();
          },
        );
      }
  }

  deleteApplicationFeature(values: any) {
    this.applicationService.deleteApplicationFeature(values.id).subscribe(
      success => {
        this.loadApplicationFeatures();
        this.modService.dismissAll();
      },
    );
 }

}
