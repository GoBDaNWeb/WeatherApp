import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
