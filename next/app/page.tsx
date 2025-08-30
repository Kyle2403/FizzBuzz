import Link from 'next/link'
import Footer from './components/Footer'
export default function Home() {
  return (
    // flex grow + flex flex col min-h-screen on parent to make the main take up rest of content after footer is set
    <div className="flex flex-col min-h-screen">
      <main className = "flex flex-col flex-grow items-center pt-[20vh]">
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold mb-3'>Good day!</h1>
        <h2 className='text-l sm:text-2xl lg:text-3xl text-gray-700 font-medium mb-4 lg:mb-7'>Welcome to Custom FizzBuzz</h2>
        <div className='flex flex-col sm:flex-row gap-3'>
          <Link href="/games/new" className="btn btn-primary btn-md sm:btn-lg lg:btn-xl">Create a Game</Link>
          <Link href="/games" className="btn btn-secondary btn-md sm:btn-lg lg:btn-xl">Play</Link>
          <Link href="/sessions" className="btn btn-accent btn-md sm:btn-lg lg:btn-xl">View History</Link>
        </div>
      </main>
    
      <Footer/>
        
    </div>
  )
}

// Avoid hardcoded sizes → use relative units (rem, Tailwind scale)
// sm:	640px	Small devices, larger phones, tablets in portrait
// md:	768px	Medium devices, tablets in landscape, small laptops
// lg:	1024px	Large devices, desktops and laptops
// xl:	1280px	Extra-large desktops, big monitors
// 2xl:	1536px	Very large screens, 4K monitors etc.
// since the utility classes default to mobile size (<640), it's best
// that i do lg: (covers my lap and monitor) for all classes and later come back and define a another
// size for smaller ones
// i think i would prefer size defined by class name rather than props