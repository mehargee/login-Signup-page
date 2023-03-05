
import styles from '@/styles/Login.module.css'

const Login = () => {
    return ( 
    <>
    <div className={styles.mainDiv}>
        <div className={styles.box}>
            <h2>Login Page</h2>
            <div className={styles.email}>
                <input type="email" placeholder='Enter Email' name='Email'/>
            </div>

            <div className={styles.password}>
                <input type="password" placeholder='Enter Password' name='password'/>
            </div>
            <button className={styles.btn}>Login</button>
        </div>

    </div>
    </> );
}
 
export default Login;