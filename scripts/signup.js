window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   const form = document.querySelector('form')
   const inputName = document.querySelector ('#inputNombre');
   const inputLastName = document.querySelector ('#inputApellido');
   const inputMail = document.querySelector ('#inputEmail');
   const inputPassword = document.querySelector ('#inputPassword');
   const inputDontRepeatPassword = document.querySelector ('#inputPasswordRepetida');



    

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()
       console.log('Login data')
        
       //Values if two passwords are the same 
        //JSON with de data from de API
       const userData  = {
            "firstName": inputName.value,
            "lastName": inputLastName.value,
            "email": inputMail.value,
            "password": inputPassword.value
        }
        if(inputDontRepeatPassword.value == inputPassword.value) { //conditional if two passwords matches
            realizarRegister(userData)
            console.log('its match')
        }else {
            alert('the password dont match, idiot');
        }
    
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(userData) {
        const url = 'https://ctd-todo-api.herokuapp.com/v1/users';

        const config = {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-type': 'application/json',
            }
        }
        //We started the api consultation
        fetch(url, config ). then( (response) => {
            console.log(response);
            return response.json();

        })
        .then((data) => {
            console.log(data);

            //Save the token
            if(data.jwt) {
                localStorage.setItem('jwt', data.jwt);
                location.replace('index.html');
            } 

        }).catch ((response) => {
            console.error(response);
        })
   
    }

});