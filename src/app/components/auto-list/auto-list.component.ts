import { Component, inject, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';
import { AutoItemComponent } from "../auto-item/auto-item.component";

@Component({
  selector: 'app-auto-list',
  imports: [CommonModule, AutoItemComponent],
  templateUrl: './auto-list.component.html',
  styleUrl: './auto-list.component.css'
})
export class AutoListComponent implements OnInit {
  // richiedo il servizio che gestisce le auto
  autoService: AutoService = inject(AutoService);

  autos: Auto[] = [];

  ngOnInit(): void {
    this.autos = this.autoService.getAutos();
  }
}
