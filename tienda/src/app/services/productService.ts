import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private apiUrl = 'https://api.example.com/products'; // Reemplaza esto con la URL de tu API

    constructor(private http: HttpClient) { }

    getProductById(productId: string): Observable<any> {
        // Realiza una solicitud GET a la API para obtener un producto por su ID
        return this.http.get(`${this.apiUrl}/${productId}`);
    }

    updateProduct(productData: any): Observable<any> {
        // Realiza una solicitud PUT o POST a la API para actualizar el producto
        // Asegúrate de que la API tenga rutas y lógica para actualizar productos
        return this.http.put(`${this.apiUrl}/${productData.id}`, productData);
    }
}
