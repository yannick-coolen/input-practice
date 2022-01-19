import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = ''

  onInput(member: string): void {
    this.newMemberName = member;
  }

  addMember(): void {
    if (!this.newMemberName) {
      this.errorMessage = "Name field can't be empty."
      return;
    } 

    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }

}
