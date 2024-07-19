

import styles from './links.module.css'
import NavLink from './navLink/navLink';



const Links = () => {

    const links =[
        
        {
            title:"عنّا",
            path : "/aboutUs",
        },
            // {
            //     title:"تقييمات",
            //     path : "/reviews",
            // },
        {
            title: "اقترح",
            path : "/chooseRegion",
        },
    ];

    // -----
    // const session  = false;
    // const isAdmid = true;
    // -----
  return (
   <div className={styles.links}>
        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}
       
        {/* {
            
            session ? (
                <>
                {isAdmid && <NavLink item={{title :"المدير" , path:"/admin"}}></NavLink>}

                    <button className={styles.logout}>الخروج</button>
                </>
            ) :(
                <NavLink className={styles.login} item={{title :"الدخول" , path:"/login"}}></NavLink>
            )
        } */}
        {/* <div>
          <button onClick={()=>signIn('google')}>sign in </button>
          <button onClick={()=>signOut('google')}>sign out</button>
        </div> */}
     
       
   </div>
  )
}

export default Links;