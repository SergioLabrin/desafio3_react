const Login =() =>{

    const onSubmit =(e) =>{
        e.preventDefault()
        const user =formData.get("user")
        const pass =Formdata.get("pass")
        console.log({user,pass})
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label >
                    Ingresa tu Usuario
                    <input name="user" type="text" />
                </label>
                <label >
                    Contraseña
                    <input name="pass" type="password" />
                </label>
                <button>Ingresar</button>
            </form>
        </div>
    )    
}

export default Login;