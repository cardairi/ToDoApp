// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const jwt = localStorage.getItem('jwt');

if(!jwt) {
  location.replace('index.html')
}



/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const logOutButton = document.querySelector('#closeApp');
  const formCreateTask = document.querySelector('form.nueva-tarea')
  const userName = document.querySelector('.user-info p')


  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

 logOutButton.addEventListener('click', function () {

    console.log('Log Out');

    const confirmation = confirm('Do you like to logout?');

    if(confirmation) {
      localStorage.clear()
      location.replace('index.html')
    }


  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function getUserData() {
  
   const url = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';
   const config = {
            method: 'GET',
            headers: {
              authorization: jwt
            }
   }

   fetch(url, config).then(response => response.json()  )
      .then((data) => {
        userName.textContent = data.firstName 
      })

  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultTasks() {
    
    



  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCreateTask.addEventListener('submit', function (event) {
    




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };


getUserData()
});