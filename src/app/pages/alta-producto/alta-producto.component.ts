import { Component, OnInit } from '@angular/core';

// servicios
import { StockService } from 'src/app/services/stock.service';
import { MatDialogRef } from '@angular/material/dialog';

export interface Respuesta {
  datos: any[];
}
export interface Producto {
  codProducto: string,
  numDia: string, 
  numMes: string,
  numAnio: string ,
  idLocal: number;
  nombre: string;
  idCategoria: number;
  idMarca: number;
  cantidad: number;
  talle: number;
  precioVenta: number;
  precioCompra: number;
  imagen: string;
}



@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss'],
  providers: [StockService]
})
export class AltaProductoComponent implements OnInit {

  constructor(private stockService: StockService,public dialogRef: MatDialogRef<AltaProductoComponent>) {
    this.producto = {
      codProducto : '',
      numDia : '' ,
      numMes : '' ,
      numAnio : '' ,
      idLocal: null,
      nombre: '',
      idCategoria: null,
      idMarca: null,
      cantidad: null,
      talle: null,
      precioVenta: null,
      precioCompra: null,
      imagen: ''
    }
  }

  producto: Producto;
  categorias: any[];
  marcas: any[];

  ngOnInit() {
    this.getMarcas();
    this.getCategorias();
  }

  altaStock() {
    
    console.log(this.producto);
    this.producto.codProducto = '';
    this.producto.idCategoria = +this.producto.idCategoria;
    this.producto.idMarca = +this.producto.idMarca;
    this.stockService.altaProducto(this.producto).subscribe(
      res => {
        alert('Articulo guardado');
        this.dialogRef.close();
      },
      err =>{
        console.log('error al guardar: ', err);
      }
    );
  }

  getCategorias(){
    this.stockService.getCategorias().subscribe(
      res => {
        this.categorias = res.datos;
      },
      err => {
        console.log(err);
      }
    )
  }
  
  getMarcas(){
    this.stockService.getMarcas().subscribe(
      res => {
        this.marcas = res.datos;
      }
    )
  }

  // updateProduct(){
  //   this.stockService.updateProduct().subscribe({
  //     res => {
  //       alert("Producto modificado");
  //       this.dialogRef.close();
  //     };
  //   })
  // }



}
