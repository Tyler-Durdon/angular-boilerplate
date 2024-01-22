import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  public isLoading: boolean = true;

  constructor() { }


  public ngOnInit(): void {
    setTimeout(_ => {
      this.isLoading = false;
    }, 1000);
  }

}
