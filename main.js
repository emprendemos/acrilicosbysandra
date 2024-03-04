const productosContenedor = document.getElementById("productos-contenedor");

// Obtener los datos de los productos
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en una variable global
        window.productos = data.productos;
        // Mostrar los productos en la página
        mostrarProductos();
    })
    .catch(error => console.error(error));

// Función para mostrar las arreglos en la página
function mostrarProductos() {
    const productosContenedor = document.getElementById("productos-contenedor");
    productosContenedor.innerHTML = "";

    // Obtener los valores seleccionados en los filtros
    const filtroModelo = document.getElementById("filtro-modelo").value;
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);

    console.log(filtroPrecio);

    // Recorrer cada arreglo
    window.productos.forEach(function (producto) {
        // Comprobar si el producto cumple con los criterios de los filtros
        if ((filtroModelo === "" || producto.modelo === filtroModelo) && (filtroPrecio === 0 || producto.precio <= filtroPrecio)
        ) {
            // Crear un elemento div para el producto
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("producto");
            // Crear una imagen para el producto
            const productoImg = document.createElement("img");
            productoImg.src = producto.img;
            productoImg.alt = producto.modelo;
            productoDiv.appendChild(productoImg);

            // Crear un h3 para el nombre de el producto
            const productoNombre = document.createElement("h3");
            productoNombre.innerHTML = producto.nombre;
            productoDiv.appendChild(productoNombre);

            // Crear un p para la descripcion del producto
            const productoDescripcion = document.createElement("p");
            productoDescripcion.innerHTML = producto.descripcion;
            productoDiv.appendChild(productoDescripcion);

            // Crear un p para el modelo del producto
            const productoModel = document.createElement("p");
            productoModel.innerHTML = producto.modelo;
            productoDiv.appendChild(productoModel);

            // Crear un p para el precio del producto
            const productoPrice = document.createElement("p");
            productoPrice.innerHTML = "$"+producto.precio;            
            productoDiv.appendChild(productoPrice);

            // Agregar el elemento div a la página
            productosContenedor.appendChild(productoDiv);
        }
    });
}

// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar los productos
document.getElementById("filtro-modelo").addEventListener("change", mostrarProductos);
document.getElementById("filtro-precio").addEventListener("change", mostrarProductos);