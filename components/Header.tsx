import Image from 'next/image'
import React from 'react'
import { HomeIcon,ChevronDownIcon, SearchIcon,MenuIcon } from '@heroicons/react/solid'
import { SparklesIcon, GlobeAltIcon, VideoCameraIcon, SpeakerphoneIcon, PlusIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'


function Header() {
  const {data:session}= useSession()
  console.log(session)
  return (
    <div className='sticky top-0 z-50 flex space px-4'>
        <div className='relative h-10 w-20 flex-shrink-0'>
            <Image 
            className='flex items-center '
            objectFit='contain' 
            src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png" 
            layout="fill"/>


        </div>
        <div className='flex text-sm items-center mx-7 space-x-1 xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'/>
            <p className='ml-2 flex-1 hidden lg:inline '>Home</p>
            <ChevronDownIcon className='h-5 w-5'/>
            
            {/* <p>Away</p> */}
        </div>
        {/* Search Box */}
        <form className='flex flex-1 items-center border
        rounded-sm border-gray-200 bg-gray-100 px-3 my-1'>
          <SearchIcon className='h-6 w-6 text-gray-300'/>
          <input className="flex-1 bg-transparent outline-none" type='text' placeholder='Search Reddit'/>
          <button type='submit' hidden/>
        </form>
        <div className='flex items-center space-x-2 px-2'>

          <SparklesIcon className='icon ' />
          <GlobeAltIcon className='icon '/>
          <VideoCameraIcon className='icon '/>
          <hr className='hidden lg:block h-10 border border-gray-600'/>
          <SpeakerphoneIcon className='icon'/>
          <PlusIcon className='icon'/>
        </div>
        <div><MenuIcon className='h-8 w-8 lg:hidden my-1 cursor-pointer'/></div>
        {/* Sign in and sign out button */}

        {!session?.user?(<div onClick={()=>signIn()} className='hidden lg:inline-flex cursor-pointer border border-gray-200 rounded-md my-1 p-1'>
            <p className='text-gray-500'>Sign In</p>
        </div>):
        (<p onClick={()=>signOut()} className='lg:inline hidden flex-shrink-0 cursor-pointer my-1 py-1 px-3 border border-gray-500 rounded-full hover:bg-orange-500 hover:text-white'>{session.user.name}</p>)
        }
    </div>
  )
}

export default Header