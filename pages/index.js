import Typed from 'react-typed';
import Link from 'next/link'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='text-black'>
      <Head>
        <meta name="google-site-verification" content="FyxBVTR1k8gAMB_MbYKBtRU8s3zzPiFAmAsjWVJ7aDU"/>
        <meta name="description" content="Teise and Coffee is an Indepenant cafe in the heart of the Weald. TeiseAndCoffee Lamberhurst"/>
      </Head>
    <div className="flex text-center flex-col justify-center h-screen gap-10">
      <div className='max-w-[800px] mt-[-96px] w-full mx-auto text-center flex flex-col justify-center'>
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 z-0'
            strings={['Teise', 'and', 'Coffee.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        <p className='md:text-2xl text-xl font-bold text-gray-500 py-3 md:py-10'>We are an <span className="text-black">independant cafe</span> in the heart of the Weald. <br></br>Estd. in Dec 2018.</p>
        <Link href="#more"><button className='transition ease-in-out bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-white hover:bg-[#03ae79]'>Pop in!</button></Link>
      </div>
      <div className="spacer hidden md:block"></div><div className="spacer hidden md:block"></div><div className="spacer"></div><div className="spacer"></div><div className="spacer"></div>
      <a className="flex self-center z-0" href="#more"><HiOutlineChevronDoubleDown className="animate-pulse h-7 w-7" color="black"/></a>
    </div>
    <section className="h-screen flex flex-col items-center bg-[#0D0C11]" id="more">
    <iframe className="p-3 w-[100%] md:w-[50%] h-[35%]"src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJmU7_bZU530cRmdotr1yLTA8&key=AIzaSyBIhlGPoxNRyTqLtFhMQ5wjJ7BD_gMoJBA"></iframe>
    <div className="w-[100%] md:w-[50%] flex flex-col justify-between p-4 leading-normal">
        <h5 className="flex justify-between mb-2 text-2xl font-bold tracking-tight text-[#e0ffff]">Pop in today! <span className="text-gray-500">Or contact us <span className="pl-2 md:pl-5 text-[#00df9a]">↓</span></span></h5>
        <hr/>
        <div className="flex justify-between tracking-wide">
          <p className="pt-8 mb-3 font-normal text-[#9db3b3]">Forge⠀House,<br className="md:hidden"/> The⠀Broadway, <br/>Lamberhurst, Tunbridge⠀Wells,<br/><span className="text-[#e0ffff] text-bold tracking-wider underline decoration-inherit underline-offset-4">TN38DA</span></p>
          <p className="pt-8 text-gray-500 text-bold"><span className="text-[#e0ffff]">forgehouse<wbr/>coffee<wbr/></span><span className="text-[#00df9a]">@</span>gmail<wbr/><span className="text-[#00df9a]">.</span>com</p>
        </div>
        
    </div>
    </section>
  </div>
  
  )
}
