import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ImportTeisComponent } from '../import-teis/import-teis.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-teis',
  templateUrl: './teis.component.html',
  styleUrls: ['./teis.component.scss']
})
export class TEISComponent {
  data!: [][]
  displayedColumns: string[] = ['id', 'Billing_Org', 'Billing_Dept', 'Charged_Org',
    'Charged_Org_Name', 'Charged_Dep', 'Fiscal_Month', 'Charge_Type', 'Charge_Unit',
    'Charge_Amount', 'Billable_Amount','Hyperion_Profit_Center','SAP_Profit_Center',
    'Charge_Category','Revenue_Type','Charged_entity','Year','Month'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ImportTeisComponent, {
      width:'50%',
      height:'65%'
    }).afterClosed().subscribe(result => {
      this.data = result
      console.log(this.data);
    });;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
