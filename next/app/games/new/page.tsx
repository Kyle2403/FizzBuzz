import React from 'react'
import NavigationBar from '@/app/components/NavigationBar'
import GameForm from '@/app/components/GameForm'
import Footer from '@/app/components/Footer'
const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavigationBar />

        {/* wrapper div controls flex-grow */}
        <main className="flex-grow">
            <GameForm />
        </main>

        <Footer />
    </div>
  )
}


export default Page