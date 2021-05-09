document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion() {
  var sCorreo = '';
  var sContrasena = '';
  var bAcceso = false;

  sCorreo = document.querySelector('#txtCorreo').value;
  sContrasena = document.querySelector('#txtContrasena').value;

  bAcceso = validarCredenciales(sCorreo, sContrasena);

  if (bAcceso == true) {
    ingresar();
  } else if (sCorreo === "" && sContrasena === "") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Porfavor ingresar credenciales!',
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña mal escritas',
    })
  }
}

function ingresar() {
  var rol = sessionStorage.getItem('rolUsuarioActivo');
  switch (rol) {
    case '1':
      window.location.href = 'index.html';
      break;
    case '2':
      window.location.href = 'index.html';
      break;
    case '3':
      window.location.href = 'index.html';
      break;
    case '4':
      window.location.href = 'index.html';
      break;
    default:
      window.location.href = 'index.html';
      break;
  }
}