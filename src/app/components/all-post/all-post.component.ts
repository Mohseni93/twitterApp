import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
 posts =[
  {
    id : 1,
    userName : "John Ramesry",
    userId : "john_res",
    imgProfile : "./../assets/image/profile.png",
    time : "35mins",
    caption : "Very good words...",
    reTweet : [
      {
        id : 5,
        userName : "Theodore Roosevelt",
        userId : "president_roosevelt",
        imgProfile : "./../assets/image/profile.png",
        Time : "Hour",
        comment : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem pariatur expedita odit similique explicabo necessitatibus ipsam mollitia ex laborum, dolor voluptate, obcaecati repellendus",
      }
    ],
    numberComment : 5,
    numberForward : 10,
    numberLike : 50,
  },
  {
    id : 2,
    userName : "John Ramesry",
    userId : "john_res",
    imgProfile : "./../assets/image/profile.png",
    Time : "35mins",
    caption : "Best view from the vacations.",
    imgPost : ["./assets/image/Winter1.png" , "./assets/image/winter2.jpg" , "./assets/image/winter3.jpg"] 
  },
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
