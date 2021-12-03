import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {UiService} from "../../../../services/ui.service";
import {UtilsService} from "../../../../services/utils.service";
import {UserDataService} from "../../../../services/user-data.service";
import {ReloadService} from "../../../../services/reload.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Select} from "../../../../interfaces/select";

@Component({
  selector: 'app-edit-app-user',
  templateUrl: './edit-app-user.component.html',
  styleUrls: ['./edit-app-user.component.scss']
})
export class EditAppUserComponent implements OnInit {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm?: FormGroup;
  private sub: Subscription;

  userStatus: any[] = [
    {value: false, viewValue: 'Block'},
    {value: true, viewValue: 'Unblock'},
  ];

  userDeveloperAccess: Select[] = [
    {value: false, viewValue: 'No'},
    {value: true, viewValue: 'Yes'},
  ];


  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    private utilsService: UtilsService,
    private userDataService: UserDataService,
    private reloadService: ReloadService,
    public dialogRef: MatDialogRef<EditAppUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      hasAccess: [null, Validators.required],
      isDeveloperAccess: [false],
    });

    if (this.data) {
      this.dataForm.patchValue({hasAccess: this.data.hasAccess, isDeveloperAccess: this.data.isDeveloperAccess});
    }
  }

  onSubmit() {
    const hasAccess = this.dataForm.value.hasAccess;
    const isDeveloperAccess = this.dataForm.value.isDeveloperAccess;

    const data = {hasAccess: hasAccess, isDeveloperAccess: isDeveloperAccess ? isDeveloperAccess: false}
    this.editUserAccess(this.data._id, data);
  }

  private editUserAccess(userId: string, data: any) {
    this.userDataService.editUserAccess(userId, data).subscribe(res => {
      this.uiService.success(res.message);
      this.reloadService.needRefreshUser$();
      this.dialogRef.close();
    }, error => {
      console.log(error);
      this.uiService.warn('Something went wrong!');
    });
  }

}
