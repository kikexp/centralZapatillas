import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AltaProductoComponent } from '../alta-producto/alta-producto.component';
import { StockService } from 'src/app/services/stock.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-stock-control',
  templateUrl: './stock-control.component.html',
  styleUrls: ['./stock-control.component.scss'],
  providers: [StockService]
})
export class StockControlComponent implements OnInit {

  constructor(private dialog: MatDialog, private _stockservice: StockService) { }

  displayedColumns = ['position', 'name', 'weight'];
  dataSource: any;
  res = {
    datos: []
  }
  ngOnInit() {
    this._stockservice.getStockSucursal().subscribe(
      res => {
        console.log(res);
        this.dataSource = res.datos;
      },
      err => {
        console.log(err);
      }
    )
  }

  nuevoProducto() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef =  this.dialog.open(AltaProductoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
			this._stockservice.getStockSucursal().subscribe(
				res => {
				console.log(res);

					this.dataSource = res.datos;
					

				},
				err => {
					var msj = <any>err;
				});
		});
	}

}
