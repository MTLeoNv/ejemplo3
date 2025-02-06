import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejemplo3';

  //propiedades
  producto = {
    id: 0,
    descripcion: '',
    precio: 0,
  };
  listaProductos = [
    { id: 1, descripcion: 'Chocolate ferrero', precio: 100 },
    { id: 2, descripcion: 'Jugo Fresa', precio: 20 },
    { id: 3, descripcion: 'Chicle', precio: 1 },
    { id: 4, descripcion: 'Galletas Fruits', precio: 18.78 },
    { id: 5, descripcion: 'Doritos', precio: 19 },
  ];
  // funcion para agregar un produto al arreglo

  agregarProducto() {
    if (this.producto.id == 0) {
      alert('El id del producto no puede ser cero');
      return;
    }
    //verificar que el id no exista

    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.producto.id == this.listaProductos[i].id) {
        alert('Ya existe. Agrega otro');
        return;
      }
    }

    //damos de alta el producto

    this.listaProductos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio,
    });

    //resetear el objeto producto
    this.producto = {
      id: 0,
      descripcion: '',
      precio: 0,
    };
  }

  //funcion para seleccionar un producto de la tabla

  seleccionarProducto(productoSeleccionado: {
    id: number;
    descripcion: string;
    precio: number;
  }) {
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;
  } 

  //funcion para modificar producto existente
  modificarProducto() {
    for(let i=0; i<this.listaProductos.length; i++){
      if(this.producto.id == this.listaProductos[i].id){
        this.listaProductos[i].descripcion = this.producto.descripcion;
        this.listaProductos[i].precio = this.producto.precio;


        this.producto.id=0;
        this.producto.descripcion='';
        this.producto.precio=0;
        return;
      }
    }
    alert('No existe.');
  }

  //funcion para eliminar un producto existente

  eliminarProducto(id: number){
    for(let i=0; i<this.listaProductos.length; i++){
      if(id == this.listaProductos[i].id){
        this.listaProductos.splice(i,1);
        return;
      }
    }
    alert('No existe.');
  }

}