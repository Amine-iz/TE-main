import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ImportTeisComponent } from '../import-teis/import-teis.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';



interface teisInvoices {
  ID: number;
  Billing_Org: string;
  Billing_Dept: string;
  Charged_Org: string;
  Charged_Org_Name:  string;
   Charged_Dep :  string;
    Fiscal_Month :  string;
  Charge_Type :  string;
    Charge_Unit :  string;
  Charge_Amount:  number;
   Billable_Amount:  string;
   Hyperion_Profit_Center :  string;
   SAP_Profit_Center:  string;
    Charge_Category :  string;
    Revenue_Type :  string;
    Charged_entity :  string;
    Year :  number;
    Month :  String ;
}

@Component({
  selector: 'app-teis',
  templateUrl: './teis.component.html',
  styleUrls: ['./teis.component.scss']
})
export class TEISComponent implements OnInit {
  data!: [][]
  displayedColumns: string[] = ['ID', 'Billing_Org', 'Billing_Dept', 'Charged_Org',
  'Charged_Org_Name', 'Charged_Dep', 'Fiscal_Month', 'Charged_Type', 'Charged_Unit',
  'Charged_Amount', 'Billable_Amount','Hyperion_Profit_Center','SAP_Profit_Center',
  'Charged_Category','Revenue_Type','Charged_entity','Year','Month'];

    teisInvoices: teisInvoices[] = [];
    ///Connect to DB Data
    constructor(public dialog: MatDialog,private http: HttpClient) { }
    

    ngOnInit(): void {
      // make HTTP request to server to retrieve data
      this.http.get<teisInvoices[]>('http://localhost:3000/api/Invoices')
      .subscribe(
      ((data:any[])=> {
          // format data as array of objects
          this.teisInvoices = data;
          console.log(data);
  
      })
      )}

  dataSource!: MatTableDataSource<[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  openDialog() {
    this.dialog.open(ImportTeisComponent, {
      width:'50%',
      height:'65%'
    }).afterClosed().subscribe(result => {
      this.data = result
      console.log(this.data);
      this.dataSource = new MatTableDataSource(this.data);
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
