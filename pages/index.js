import Typed from 'react-typed';
import Link from 'next/link'
export default function Home() {
  return (
    <div className='text-black'>
    <div className="flex text-center flex-col justify-center h-screen gap-10">
      <div className='max-w-[800px] mt-[-96px] w-full mx-auto text-center flex flex-col justify-center'>
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 z-0'
            strings={['Teise', 'and', 'Coffee.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        <p className='pl-3 pr-3 tracking-tight md:tracking-normal md:text-2xl text-xl font-bold text-gray-500 py-3 md:py-10'>We are an <span className="text-black">independant cafe</span> in the heart of the Weald. <br></br>Estd. in Dec 2018.</p>
        <Link href="#more"><button className='transition ease-in-out bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-white hover:bg-[#03ae79]'>Pop in!</button></Link>
      </div>
      <div className="spacer hidden md:block"></div><div className="spacer hidden md:block"></div><div className="spacer"></div><div className="spacer"></div><div className="spacer"></div>
      <button className="animate-bounce flex self-center z-0">
        <Link href="#more">Test</Link>
      </button>
    </div>
    <section className="h-screen flex flex-col items-center bg-[#0D0C11]" id="more">
    <iframe className="p-3 w-[100%] md:w-[50%] h-[35%]"src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJmU7_bZU530cRmdotr1yLTA8&key=AIzaSyBIhlGPoxNRyTqLtFhMQ5wjJ7BD_gMoJBA"></iframe>
    <div className="w-[100%] md:w-[70%] flex flex-col justify-between p-4 leading-normal">
        <h5 className="flex justify-between mb-2 text-2xl font-bold tracking-tight text-[#e0ffff]">Pop in today! <span className="text-gray-500">Or contact us <span className="pl-1 md:pl-5 text-[#00df9a]">↓</span></span></h5>
        <hr/>
        <div className="flex flex-col">
          <div className="flex justify-between tracking-wide">
            <p className="pt-8 mb-3 font-normal text-[#9db3b3] pr-2">Forge House,The Broadway, <br/>Lamberhurst, Tunbridge Wells,<br/><span className="text-[#e0ffff] text-bold tracking-wider underline decoration-inherit underline-offset-4">TN38DA</span></p>
            <p className="pt-8 text-gray-500 text-bold text-right">forgehousecoffee<br className="lg:hidden"/><span className="text-[#00df9a]">@</span>gmail.com</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           width="30" height="30"
           viewBox="0 0 30 30"
           style=" fill:#ffffff;">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path></svg>
        </div>
        
    </div>
    </section>
  </div>
  
  )
}
