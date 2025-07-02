import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillDataService {
  url = 'datas/skills.json';

  constructor(private http: HttpClient) {
    console.log('start ngOninit');
    this.http.get(this.url).subscribe((res) => {
      console.log(res);
    });

    console.log();
  }

  logUrl() {
    console.log(this.url);
  }
}
