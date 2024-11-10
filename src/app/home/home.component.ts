import { DanhmucService } from './../danhmuc/danhmuc.service';
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Danhmuc } from '../danhmuc/danhmuc';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  url = "../../assets/image/header-object.png";
  constructor(){}
}
