import { Link } from 'react-router-dom';

const SignIn = (props) => {
    return (
        <section className = "sign flex">
            <div className = "sign__header flex">
                <div className = "sign__img"></div>
                <h3>Sing in</h3>
            </div>
            <div className = "sign__inputs-block flex">
                <input type = "text" placeholder = "Email Adres*"/>
                <input type = "password" placeholder = "Password*"/>
            </div>
            <div className = "sign__checkbox-block flex">
                <input type = "checkbox" id = "custom-checkbox" className = "sign__checkbox"/>
                <label for = "custom-checkbox">Remember me</label>
            </div>
            <div className = "sign__button-block flex">
                <button className = "sign__button">Sing in</button>                
            </div>
            <div className = "sign__links-block flex">
                <Link to = "/adv-hw-22-OlehMykolaichuk/">
                    <p>Forgot password?</p>
                </Link>
                <Link to = "/adv-hw-22-OlehMykolaichuk/sign-up">
                    <p>Don't have an account? Sing Up</p>
                </Link>
            </div>
            <div className = "sign__copyright flex">Copyright &#169; Your Website 2021</div>
        </section>
    )
}

export default SignIn;