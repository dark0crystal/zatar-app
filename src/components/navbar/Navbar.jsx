
import styles from './navbar.module.css'
import Link from 'next/link';

// import localFont from 'next/font/local';

// const myFont = localFont({
//     src:"./ALLEXP01Nihaya.ttf",
//     display :'swap' ,
// })


const Navbar = () => {

    
    
  return (
    // we use module to avoid the conflict that will happen when we have same class name in global and local files
    <div className= {styles.navContainer}>
        <div className={styles.logo}  >
        <Link href='/'>زعتر <span className={styles.beta}>beta</span></Link>
            

        </div>
        
       
    </div>
  )
}

export default Navbar;
