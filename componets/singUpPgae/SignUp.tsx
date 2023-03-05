
import styles from '@/styles/SignUp.module.css'

const SignUp = () => {
    return ( 
    <>
    <div className={styles.mainDiv}>
        <div className={styles.box}>
            <h2>SignUp Page</h2>

            <div className={styles.userName}>
                <input type="text" placeholder='Enter Name' name='UserName'/>
            </div>

            <div className={styles.email}>
                <input type="email" placeholder='Enter Email' name='Email'/>
            </div>

            <div className={styles.password}>
                <input type="password" placeholder='Enter Password' name='password'/>
            </div>
            <button className={styles.btn}>SignUP</button>
        </div>

    </div>
    </> );
}
 
export default SignUp;