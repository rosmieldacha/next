import { useSession } from "next-auth/react";
import { useRouter } from "next/router"


function HomePage(){

  const {data: session, status} = useSession()
  const router = useRouter()

  if(status ==='loading'){
   return<p>Loading...</p>
}

if(status ==='unauthenticated'){
  router.push('/login')
}
return (
  <div>
  <h1>{session.user.name}</h1>
  <p>{session.user.email}</p>
  <img src={session.user.image} alt=""/>
  </div>
);

}
export default HomePage;