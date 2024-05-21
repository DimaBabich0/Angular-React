import { Component } from '@angular/core';
import { HttpRequestService } from "../http-request.service";
import { HttpClientModule} from "@angular/common/http";
import { User } from '../user';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
  providers: [HttpRequestService]
})

export class RequestComponent
{
  users: User[] = [];

  constructor(private HttpRequestService: HttpRequestService)
  { }

  ngOnInit()
  {
    this.HttpRequestService.getData().subscribe({next: (data: any) => this.users = data["userList"]});
  }
}
