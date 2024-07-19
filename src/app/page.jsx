
// import { useSession, signIn  , signOut } from "next-auth/react";

import Image from "next/image";



// shadcn-ui card import

import ContentChange from "../components/contentChange/ContentChange";
import SuggestButton from '../components/suggestButton/SuggestButton';


export default function Home() {
 
  return(
   <div>
   <div className='indexContent'>
      <ContentChange/>
   </div>
      
      <SuggestButton/>
      <div>
     
      </div>
   </div>
   
  )
}
