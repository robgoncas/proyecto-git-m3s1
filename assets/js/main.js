// Función para crear un objeto Formulario a partir del formulario HTML
function crearObjetoFormulario() {
    // Seleccionar el formulario
    const formulario = document.getElementById('formulario');

    // Crear objeto formulario
    const formularioActual = new Formulario(
        formulario['nombre'].value,
        formulario['apellidos'].value,
        formulario['genero'].value,
        formulario['rut'].value,
        formulario['dv'].value,
        formulario['fecha_nacimiento'].value,
        formulario['correo_electronico'].value,
        formulario['telefono'].value,
        formulario['pais'].value,
        formulario['ciudad'].value,
        formulario['direccion'].value,
        formulario['puesto'].value,
        formulario['departamento'].value
    );

    console.log(formularioActual);

    return formularioActual;
}

// Constructor del objeto Formulario
function Formulario(nombre, apellidos, genero, rut, dv, fecha_nacimiento,
    correo_electronico, telefono, pais, ciudad, direccion, puesto, departamento) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.genero = genero;
    this.rut = rut;
    this.dv = dv;
    this.fecha_nacimiento = fecha_nacimiento;
    this.correo_electronico = correo_electronico;
    this.telefono = telefono;
    this.pais = pais;
    this.ciudad = ciudad;
    this.direccion = direccion;
    this.puesto = puesto;
    this.departamento = departamento;

    // Verificar y convertir los datos del formulario
    this.verificarDatosFormulario = function () {

        // Verificar si 'nombre' no es un string
        if (typeof this.nombre !== 'string') {
            // Imprimir mensaje si 'nombre' no es un string
            console.log(`El valor "${this.nombre}" no es un string.`);
            // Convertir 'nombre' a string
            this.nombre = String(this.nombre);
            // Imprimir 'nombre' convertido y su tipo
            console.log(`Nombre convertido: ${this.nombre}, tipo: ${typeof this.nombre}`);
        }

        // Verificar si 'rut' no es un número
        if (typeof this.rut !== 'number') {
            // Imprimir mensaje si 'rut' no es un número
            console.log(`El valor "${this.rut}" no es un número.`);
            // Convertir 'rut' a número
            this.rut = Number(this.rut);
            // Verificar si la conversión a número falló
            if (isNaN(this.rut)) {
                console.log(`El valor "${this.rut}" no es convertible a número.`);
                // Pueden definir un valor por defecto si la conversión falla
                this.rut = 0;
            }
            // Imprimir 'rut' convertido y su tipo
            console.log(`Rut convertido: ${this.rut}, tipo: ${typeof this.rut}`);
        }

        // Verificar si 'fecha_nacimiento' no es un objeto Date
        if (!(this.fecha_nacimiento instanceof Date)) {
            // Imprimir mensaje si 'fecha_nacimiento' no es un Date
            console.log(`El valor "${this.fecha_nacimiento}" no es un Date.`);
            // Convertir 'fecha_nacimiento' a Date
            this.fecha_nacimiento = new Date(this.fecha_nacimiento);
            // Verificar si la conversión a Date falló
            if (isNaN(this.fecha_nacimiento.getTime())) {
                console.log(`El valor "${this.fecha_nacimiento}" no es convertible a Date.`);
                // Puedes definir un valor por defecto si la conversión falla
                this.fecha_nacimiento = new Date();
            }
            // Imprimir 'fecha_nacimiento' convertido y su tipo
            console.log(`Fecha de Nacimiento convertida: ${this.fecha_nacimiento}, tipo: ${typeof this.fecha_nacimiento}`);
        }

    };

    // Mostrar los datos del formulario
    this.mostrarDatosFormulario = function () {
        let mensaje = `
        Nombre: ${this.nombre}
        Apellidos: ${this.apellidos}
        Género: ${this.genero}
        RUT: ${this.rut}-${this.dv}
        Fecha de Nacimiento: ${this.fecha_nacimiento.toDateString()}
        Correo Electrónico: ${this.correo_electronico}
        Teléfono: ${this.telefono}
        País: ${this.pais}
        Ciudad: ${this.ciudad}
        Dirección: ${this.direccion}
        Puesto de Trabajo: ${this.puesto}
        Departamento: ${this.departamento}
        `;
        alert(mensaje);
    };
}

// Función para manejar el clic en el botón de verificación del formulario
function clickVerificarFormulario() {
    const currentForm = crearObjetoFormulario();
    currentForm.verificarDatosFormulario();
}
