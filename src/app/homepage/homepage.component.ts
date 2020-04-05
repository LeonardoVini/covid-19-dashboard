import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CountryModel } from '../models/country.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public countries: CountryModel[]

  public displayedColumns: string[] = ['country', 'cases', 'recovered', 'deaths', 'active', 'updated'];
  public dataSource

  constructor(
    private activeRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCountries()
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getCountries(): void {
    this.activeRoute.data.subscribe((data: Data) => {
      this.countries = data['countries']

      this.sortCountries()

      this.dataSource = new MatTableDataSource(this.countries);
    })
  }

  private sortCountries(): void {
    this.countries = [...this.countries.sort((a, b) => a.country > b.country ? 1 : -1 )]
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public openSnackBar({ country }) {
    this._snackBar.open(`redirecting to ${country}'s dashboard`, 'Bye', {
      duration: 1000,
    });

    let _snackBarRef = this._snackBar._openedSnackBarRef

    _snackBarRef.afterDismissed().subscribe(() => {
      this.router.navigate(['/dashboard', country])
    })
  }
}
