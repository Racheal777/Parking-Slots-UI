import { Link } from "react-router-dom"


const Login = () => {
    return (
      <div>
        
       <section className="flex flex-col justify-center items-center mx-auto h-screen w-3/4">
          <div className="py-4">
              <h2 className="font-bold text-2xl">Login </h2>
          </div>
       <form action="" method="post" className="flex flex-col gap-3 border p-4  shadow-2xl w-[30vw] h-[30vh]">
          <label htmlFor="" className="underline py-3">Phone</label>
          <input type="text" name="" id="" placeholder="Enter your number" className="border p-3  "/>
          <Link to='/home' className="border text-white text-center font-bold bg-emerald-800 p-3"> <button type="button" className=" ">Submit</button></Link>
         
          <p>Dont have an account? <Link to='/signup' className="text-orange-600"> Signup</Link> </p>
        </form>
       </section>
      </div>
    )
  }
  
  export default Login
  