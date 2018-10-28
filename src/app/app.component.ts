import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from './services/app.service';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService) { }

  title: string;
  description: string;
  category: string;
  kategoria: string;
  price: number;
  // img: ;
  url;


  // KUVAN UPLOADAUS JA NÄYTTÄMINEN
  // ===================================================================
  readUrl(event) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

// ===================================================================

submitCategory(cat) {
  console.log(cat);
  const data = [
    {
      title: cat.title,
      description: cat.description
    }

  ];
  this.appService.sendCategory(data)
  .subscribe(
  (response) => console.log(response),
  (error) => console.log(error)
  );
}

  submitItem(tieto) {
    console.log(tieto);
    const data = [
      {
        // title: tieto.title,
        // description: tieto.description,
        // category: tieto.category,
        // price: tieto.price
        // image: tieto.image
      }

    ];

    this.appService.sendItem(data)
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );
  }

}
