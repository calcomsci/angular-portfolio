import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options2 } from '../constant';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  public slidesStore!: any[];
  public genAI!: any[];

  public customOptions2: OwlOptions = options2;
  ngOnInit(): void {
    this.slidesStore = [
      {
        id : 1,
        src: "assets/img/AI-monalisa.png",
        alt: "AI Mona Lisa with a Laptop",
        title: "AI Mona Lisa with a Laptop",
      },
      {
        id : 2,
        src: "assets/img/AI-fizzbuzz.png",
        alt: "AI can solve Leetcode for you",
        title: "AI can solve Leetcode for you",
      },
      {
        id : 3,
        src: "assets/img/ai-resume-compare.png",
        alt: "brand-3",
        title: "Did my resume improve through generative AI? Up to you to decide.",
      },
      {
        id : 4,
        src: "assets/img/AI-mlk-essay.png",
        alt: "brand-4",
        title: "AI-generated essay of Martin Luther King",
      },
      {
        id : 5,
        src: "https://youtu.be/3_GpGbwxuoc?si=N2nmH2KvjpDiDsFy",
        alt: "brand-1",
        title: "AI mimicking the voice of one artist, singing a song by another artist",
      }
    ];
/*
    this.genAI = [
      {
      id : 1,
      src: "assets/img/AI-hector-pro.jpeg",
      alt: "brand-1",
      title: "brand-1",
      },
      {
      id : 2,
      src: "assets/img/EF.jpeg",
      alt: "brand-1",
      title: "brand-1",
      },
      {
      id : 3,
      src: "assets/img/chatgpt-llm.png",
      alt: "brand-1",
      title: "brand-1",
      },
  ];
*/

  }
}
