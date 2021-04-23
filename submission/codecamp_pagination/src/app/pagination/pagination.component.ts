import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  datas: any = [];
  currentPage = 0;

  constructor() {
    this.datas = [
      {
        title: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Butterfly',
        imageUrl: 'https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Fruits',
        imageUrl: 'https://images.unsplash.com/photo-1539567601-bf304c363f16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Butterfly',
        imageUrl: 'https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Fruits',
        imageUrl: 'https://images.unsplash.com/photo-1539567601-bf304c363f16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Butterfly',
        imageUrl: 'https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Fruits',
        imageUrl: 'https://images.unsplash.com/photo-1539567601-bf304c363f16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      }, {
        title: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Butterfly',
        imageUrl: 'https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Fruits',
        imageUrl: 'https://images.unsplash.com/photo-1539567601-bf304c363f16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      }, {
        title: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Butterfly',
        imageUrl: 'https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Fruits',
        imageUrl: 'https://images.unsplash.com/photo-1539567601-bf304c363f16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      }, {
        title: 'Nature',
        imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Butterfly',
        imageUrl: 'https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: 'Fruits',
        imageUrl: 'https://images.unsplash.com/photo-1539567601-bf304c363f16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
      }
    ];
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
  ngOnInit(): void {
  }

}
