const validarCampos = (userData, errors, setErrors) => {
    if (!userData.email){
        setErrors({...errors, email:'Ingrese un email'})
    }
    else {
        if(userData.email){
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
                setErrors({...errors, email:'El usuario debe ser un email'})
            }
            else if (userData.email.length > 35){
                    setErrors({...errors, email:'Debe tener menos de 36 caracteres'})
            }
            else{
                setErrors({...errors, email:''})
                validarPassword(userData, errors, setErrors)
            }
        }
    }
}


const validarPassword = (userData, errors, setErrors) => {
    if(userData.password){
        if (!/\d/.test(userData.password)){
            setErrors({...errors, password:'La contraseña tiene que tener un número'})
        }

        else if (!(userData.password.length >= 6 &&  userData.password.length <= 10)){
            setErrors({...errors, password: 'Tiene que tener entre 6 y 10 caracteres.'})
        }

        else {
            setErrors({...errors, password:''})
            validarCampos(userData, errors, setErrors)
        }
        }
}

export {validarCampos};