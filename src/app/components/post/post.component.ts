import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/PostModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() postList : Posts[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
