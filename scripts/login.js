/* //If there ar a jwt
const jwt = localStorage.getItem('jwt'); 

if( jwt ) {
    location.replace('mis-tareas.html')
}
 */

window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const inputMail = document.querySelector('#inputEmail');    
    const inputPassword = document.querySelector('#inputPassword');



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
       event.preventDefault()
       console.log('Login data')
        
       //Values for login 

       const userData  = {
            "email": inputMail.value,
            "password": inputPassword.value

       }

       console.log(userData);
       logIn(userData)
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function logIn(userData) {
        const url = 'https://ctd-todo-api.herokuapp.com/v1/users/login'; 

        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(userData)
        }


        fetch(url, config).then((response) => response.json() )
        .then((data) => {
            console.log(data);

            //Save the token
            if(data.jwt) {
                localStorage.setItem('jwt', data.jwt);
                location.replace('mis-tareas.html') //login button redirects to 'mis-tareas' page
                console.log(data.jwt)
            }

        }).catch ((response) => {
            console.error(response);
        })
   
    }

});