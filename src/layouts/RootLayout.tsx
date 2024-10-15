
import Footer from '../components/Footer'

const RootLayout = ({children, hearderText}) => {
  return (
    <div>
        <h1>Welcome {hearderText}</h1>

        <div>{children}</div>
      
      <Footer/>
    </div>
  )
}

export default RootLayout
