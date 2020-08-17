import { Component, OnInit } from '@angular/core';
import { VendorsService } from 'src/app/services/vendors.service';
import { IVendor } from 'src/app/models/vendors';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  vendors: IVendor[] = [];
  constructor(
    private vendorsService: VendorsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /** ActivatedRoute "queryParams" stores all query params in route,
     * which can be accessed like this
     */
    this.route.queryParams
      .pipe(map((params) => this.fetchVendors(params.supplies)))
      .subscribe();
  }

  /** makes api request based on supply filter present in URL */
  fetchVendors(type: string): void {
    const filter = type ?? 'all';

    if (filter === 'all') {
      this.vendorsService.getAllVendors().subscribe((data) => {
        this.vendors = data;
      });
    } else {
      this.vendorsService.filterVendors(filter).subscribe((data) => {
        this.vendors = data;
      });
    }
  }

  /** Navigates to route with query parameters */
  navigate(type: string): void {
    this.router.navigate(['/vendors'], { queryParams: { supplies: type } });
  }
}
