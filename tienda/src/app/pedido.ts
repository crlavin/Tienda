export class Pedido {
    id: string = '';
    nombre: string = '';
    productos: Producto[]=[];
    fecha: Date=new Date;
    total: number = 0;
    estado: string='';
    imagen: string ='';
    cantidad: number = 0;
  }
  export class Producto {
    id: string ='';
    nombre: string ='';
    precio: number =0;
    imageUrl: string='';
    cantidad: number=1;
    total: number = this.precio * this.cantidad;
    
    constructor() {
      this.total = this.precio * this.cantidad;
      
    }
  }