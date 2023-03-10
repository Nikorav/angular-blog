import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLayoutComponent {

  constructor(private router: Router) {
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['/admin', 'login'])
  }
}
