import { Component } from '@angular/core';
import { PostsService } from "../services/posts.services";

@Component({
  selector: 'user-comp',
  templateUrl: './user.template.html',
  providers: [ PostsService ]
})
export class UserComponent  { 
  public name:string;
  public email:string;
  public address:address_f;
  public hobbies:string[];
  public show_hobbies:boolean;
  public label_hobbies:string;
  public posts:Posts[];

  constructor( private postService: PostsService){
    this.name = 'Arun Kumar';
    this.email = 'ArunMeansSun@yahoo.com';
    this.address = {
      street: '#59/1, Perumal Street, \n Sagar Flats, CS Duraisamy Colony,',
      area: "Royapettah",
      city: "Chennai",
      state:"Tamil Nadu"
    }
    this.hobbies = ["Browsing", "Movies", "Games", "KB Articles", "Yoga"];
    this.show_hobbies = false;
    this.label_hobbies = "Show Hobbies";

    this.postService.getPosts().subscribe(posts => {            
            this.posts = posts;
        }
    )
  }

  toggleHobbies() {      
      this.show_hobbies = !this.show_hobbies;
      this.show_hobbies == true ? this.label_hobbies = "Hide Hobbies" 
                                : this.label_hobbies = "Show Hobbies";
  }

  addHobby(hobby_in:string){
    this.hobbies.push(hobby_in);
  }

  deleteHobby(i:number){
      this.hobbies.splice(i,1);
  }
}

interface address_f {
    street:string,
    area:string,
    city: string,
    state: string
}

interface Posts {
    body: string;
    id: number;
    userId: number;
    title: string;
}
