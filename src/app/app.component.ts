import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
<<<<<<< HEAD
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'employeeApp';
=======
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab5_300200464';
>>>>>>> 8632924 (initial commit)
}
