import { Component } from '@angular/core';
// import {  } from "module";
import { Book } from '../types/Book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {


  books =[
    {
      name : 'clean code',
      author :'Robert C Martin',
      image : 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51aSxCKwJEL._SY445_SX342_.jpg',
      amount : 500
    },

    {
      name : 'Software Engineering',
      author : 'Titus Winters',
      image : 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ryLkyTCYL._SY466_.jpg',
      amount : 600
    },

    {
      name: 'pragmatic programmer',
      author:'david thomas',
      image: "https://img.ebook-hunter.org/img/The%20Pragmatic%20Programmer%20(Ephriam%20J%20Daniels'%20Library)%20by%20Dave%20Thomas%20Andy%20Hunt.jpg",
      amount: 700
    },

    
    {
      name: 'art of computer programming',
      author:'donald john fuller',
      image: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81ZF4SE6CJS._SY466_.jpg",
      amount: 800
    }
  ]
  
 

  isShowing = true

  

}
