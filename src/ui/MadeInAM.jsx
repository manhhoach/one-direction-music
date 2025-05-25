import CheckoutLink from './../components/CheckoutLink'

export default function MadeInAM() {
   return (
      <div className="w-full !bg-white">
         <div className="w-full h-full flex flex-col lg:flex-row">
            {/* Left section - Album info */}
            <div className="w-full lg:w-1/2 relative container-div-faded order-1 lg:order-1">
               <div className="time-faded text-times text-base md:text-lg lg:text-xl">
                  23rd Sep 2015
               </div>

               <div className='div-faded'>
                  <div className='child-div-faded font-codystar uppercase flex items-center justify-center w-full h-full text-center text-3xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight'>
                     Buy made<br />
                     in the <br />
                     a.m.
                  </div>
               </div>

               <img
                  className="object-contain w-full h-auto"
                  src="/images/madeinam.jpg"
                  alt="Made in the A.M. album cover"
               />
            </div>

            {/* Right section - Newsletter signup */}
            <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-2 lg:min-h-auto">
               {/* Header */}
               <div className="flex flex-col items-center pt-5 pb-6 lg:pb-10">
                  <span className="text-lg md:text-xl">Subscribe</span>
                  <span className="link-custom text-lg md:text-xl">Newsletter</span>
               </div>

               {/* Main content */}
               <div className='flex flex-col justify-around items-center flex-grow px-4 lg:px-0 py-8 lg:py-0'>
                  {/* Title */}
                  <div className="w-full lg:w-5/6 font-oswald uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] text-center leading-none mb-8 lg:mb-0">
                     Get the 1D <br />
                     <span className='inline-block border-b-2 lg:border-b-4 border-black pb-2 lg:pb-4'>
                        Newsletter!
                     </span>
                  </div>

                  {/* Description and CTA */}
                  <div className='flex flex-col items-center'>
                     <p className='pb-6 lg:pb-10 font-source-code-pro text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-relaxed px-4 lg:px-0'>
                        Sign up for the 1D newsletter <br className="hidden md:block" />
                        <span className="md:hidden"> </span>
                        to get the latest news first!
                     </p>

                     <CheckoutLink
                        target="_blank"
                        href="https://forms.sonymusicfans.com/campaign/syco_onedirection_website_signup_2020/"
                     >
                        Subscribe now
                     </CheckoutLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}