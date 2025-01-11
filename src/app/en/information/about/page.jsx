import AboutUsSection from '@/components/AboutUs/AboutUsSection';
import HoverSidebar from '../HoverSidebar'
import SidebarInfo from  '@/components/SidebarInfo'
export default function AboutPage() {
  return (
    <>
       <div style={{width:'100vw'}} className="min-h-screen  flex bg-white relative overflow-hidden">
      <div className=' bg-[#333333] overflow-visible'>
       
        <pre>       </pre>
                <div className='absolute z-20'>
            {/* <HoverSidebar/> */}
            <SidebarInfo/>
        </div>
       
      </div>
    
        <AboutUsSection />

    </div>
    </>
    
  );
}
