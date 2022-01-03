import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserDataService} from "../../../services/user-data.service";
import {NgxSpinnerService} from "ngx-spinner";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-developer-profile-card',
  templateUrl: './developer-profile-card.component.html',
  styleUrls: ['./developer-profile-card.component.scss']
})
export class DeveloperProfileCardComponent implements OnInit {

  @Input() data: User;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

  onNavigate() {
    this.storageService.storeDataToSessionStorage('PORTFOLIO_USER_ID', this.data._id)
    this.router.navigate(['/portfolio'], {queryParams: {user: this.data._id}})
  }

}
