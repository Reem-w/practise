import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-students',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-students.html',
  styleUrl: './add-students.scss',
})
export class AddStudents {
  requiredName: boolean = true;
  requiredAge: boolean = true;
  validName: boolean = true;
  validAge: boolean = true;
  stName: string = '';
  stAge: number = 0;
  stId: number = 1;
  students: { id: number; name: string; age: number }[] = [];
  // isDisabled: boolean = true;

  // get isDisabled() {
    // console.log(`name :${this.stName} , age:${this.stAge}`);

  //   return !this.stName || !this.stAge;
  // }

  addStudent() {
    // if (this.stName && this.stName.length > 3 && this.stAge && this.stAge > 18)
    //   this.students.push({ id: this.stId++, name: this.stName, age: this.stAge });
    // this.stName = '';
    // this.stAge = 0;
    // console.log(this.students);

    if (this.stName == '') this.requiredName = false;
    else this.requiredName = true;

    if (this.stName.length <= 3) this.validName = false;
    else this.validName = true;

    if (this.stAge == 0) this.requiredAge = false;
    else this.requiredAge = true;

    if (this.stAge <= 18) this.validAge = false;
    else this.validAge = true;

    if (
      this.requiredName &&
      this.requiredAge &&
      this.validAge &&
      this.validName &&
      this.stName &&
      this.stAge
    ) {
      this.students.push({ id: this.stId++, name: this.stName, age: this.stAge });
      this.stName = '';
      this.stAge = 0;

      console.log(this.students);
    }
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
