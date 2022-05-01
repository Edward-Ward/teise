import Typed from 'react-typed';
import Link from 'next/link'
const about = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Teise', '&', 'Coffee']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Local coffee shop in Lamberhurst.</p>
        <Link href="/menu"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>View Menu</button></Link>
      </div>
    </div>
  )
}

export default about