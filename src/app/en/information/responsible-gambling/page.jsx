import React from 'react'
import ContactPage from '@/components/ContactPage';
import SidebarInfo from  '@/components/SidebarInfo'
import ResponsibleGambling from '@/components/Responsible-gambling';

const page = () => {
  return (
    <>
    <div style={{width:'100vw'}} className="min-h-screen  flex bg-white relative overflow-x-hidden">
      <div className=' bg-[#333333] overflow-visible'>
       
        <pre>       </pre>
          <div className='absolute z-20'>
            {/* <HoverSidebar/> */}
            <SidebarInfo/>
        </div>
       
      </div>
    
        {/* <AboutUsSection /> */}
       <ResponsibleGambling/>
    </div>
    {/* <ContactPage/> */}
    </>
  )
}

export default page