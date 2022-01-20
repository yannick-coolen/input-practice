import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';
  numbersOfTeams: number | string = '';
  teams: string[][] = []

  onInput(member: string): void {
    this.newMemberName = member;
  }

  onTeamSizeInput(value: string): void {
    this.numbersOfTeams = +value
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

  generateTeams(): void {
    const allMembers = [...this.members];

    if (!this.numbersOfTeams || this.numbersOfTeams <= 0) {
      this.errorMessage = 'Invalid amount of teams';
      return
    }
    
    this.errorMessage = '';

    if (this.members.length < this.numbersOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    while (allMembers.length) {
      for (let i = 0; i < this.numbersOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        
        if (!member){
          break;
        }
        
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numbersOfTeams = '';
  }
}
