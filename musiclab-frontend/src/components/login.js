function LoginForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика для обработки входа
        console.log("Login attempt");
    };

    return ( 
        <div className="login-form"> 
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="form-group">
                         <label htmlFor="email"></label>
                            <input id="email" type="email" placeholder="Логин" />
                                    </div>
                        <div>
                        <label htmlFor="password"></label>
                        <input id="password" type="password" placeholder="Пароль" />
                        </div>
                </div>
                
                <button className="login-btn" type="submit">Войти</button>
                {/* <a href="#">Forgot Password?</a> */}
                <button className="register-btn" type="submit">Зарегистрироваться</button>
            </form>
        </div>
     );
}

export default LoginForm;