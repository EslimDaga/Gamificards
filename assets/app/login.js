function obtenerListaUusarios() {
  var listaUsarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));
  if (listaUsarios == null) {
    listaUsarios = [
      ['1', 'Admin', 'Admin', 'admin', 'admin', '1987-10-12', '2'],
      ['2', 'storycard', 'aplicativo web', 'storycard', '*cOPIoo1pfp7', '2020-05-20', '2']
    ]
  }
  return listaUsarios;
}

function validarCredenciales(pCorreo, pConstrasena) {
  var listaUsarios = obtenerListaUusarios();
  var bAcceso = false;

  for (var i = 0; i < listaUsarios.length; i++) {
    if (pCorreo == listaUsarios[i][3] && pConstrasena == listaUsarios[i][4]) {
      bAcceso = true;
      sessionStorage.setItem('usuarioActivo', listaUsarios[i][1] + '' + listaUsarios[i][2]);
      sessionStorage.setItem('rolUsuarioActivo', listaUsarios[i][6]);
    }
  }
  return bAcceso;
}