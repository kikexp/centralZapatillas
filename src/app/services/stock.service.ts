import { Injectable } from '@angular/core';
import { Ruta} from '../globalRoute';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Respuesta {
  datos: any[];

}
@Injectable({
  providedIn: 'root'
})
export class StockService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;

   }

  getStockSucursal(): Observable<any> {
    return this.http.get('https://holanosoynada222.000webhostapp.com/Zapat/Productos/ObtenerStockDeUnaSucursal.php?idLocal=1');
  }

  altaProducto(prod) {
    let prodSend = JSON.stringify(prod);
    return this.http.post(this.url + 'Productos/insertarProductoNuevoEnStockGralYSucursal.php', prodSend);
  }

 getMarcas(): Observable<any> {
   return this.http.get('https://holanosoynada222.000webhostapp.com/Zapat/Marcas/GETALLL.php');
 }

 getCategorias(): Observable<any> {
   return this.http.get('https://holanosoynada222.000webhostapp.com/Zapat/Categorias/GETALLL.php');
 }

 updateProduct(prodToUpdate){
   let prodToSend = JSON.stringify(prodToUpdate);
  //  return this.http.put('https://holanosoynada222.000webhostapp.com/Zapat/Productos/InsertarOActualizarTalleYCantidadAProductoExistente.php');
 }

}
