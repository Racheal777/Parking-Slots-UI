import { Link } from "react-router-dom"


const Signup = () => {
  return (
    <div>
      
     <section className="flex flex-col justify-center items-center mx-auto h-screen w-3/4">
        <div className="py-4">
            <h2 className="font-bold text-2xl">Signup </h2>
        </div>
     <form action="" method="post" className="flex flex-col gap-3 border p-4  shadow-2xl w-[30vw] h-[30vh]">
        <label htmlFor="" className="underline py-3">Phone</label>
        <input type="text" name="" id="" placeholder="Enter your number" className="border p-3  "/>
        <button type="button" className="border font-bold bg-orange-500 text-white p-3 ">Submit</button>
        <p>Have an account Already? <Link to='/' className="text-orange-600"> Login</Link> </p>
      </form>
     </section>
    </div>
  )
}

export default Signup
