import { Component } from '@angular/core';

@Component({
  selector: 'lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Student {
  title = 'Thông tin sinh viên';

  information = {
    id: 'PS18698',
    name: 'Nguyễn Thiết Minh Đức',
    birthday: '30/04/2002',
    graduated: '2020-2022',
  };
}


