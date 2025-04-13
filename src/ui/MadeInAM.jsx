import CheckoutLink from './../components/CheckoutLink'

export default function MadeInAM() {
   return (
      <div className="w-full !bg-white">

         <div className="w-full h-full flex">
            <div className="w-1/2 relative container-div-faded">
               <div className="time-faded text-times">
                  23rd Sep 2015
               </div>
               <div className='div-faded'>
                  <div className='child-div-faded font-codystar uppercase flex items-center justify-center w-full h-full text-center text-9xl'>
                     Buy made<br />
                     in the <br />
                     a.m.
                  </div>

               </div>
               <img className="object-contain" width={'100%'} src="/images/madeinam.jpg" alt="" />

            </div>
            <div className="w-1/2 flex flex-col">
               <div className="flex flex-col items-center pt-5 pb-10">
                  <span className="text-xl">Subscribe</span>
                  <span className="link-custom">Newsletter</span>
               </div>
               <div className='flex flex-col justify-around items-center flex-grow-1'>
                  <div className="w-5/6 font-oswald uppercase text-5xl sm:text-[6rem] text-center leading-none ">
                     Get the 1D <br />
                     <span className='inline-block border-b-4 border-black pb-4'>
                        Newsletter!
                     </span>

                  </div>


                  <div className='flex flex-col items-center'>
                     <p className='pb-10 font-source-code-pro text-3xl'>
                        Sign up for the 1D newsletter <br />
                        to get the latest news first!
                     </p>
                     <CheckoutLink target="_blank" href="https://forms.sonymusicfans.com/campaign/syco_onedirection_website_signup_2020/">
                        Subscribe now
                     </CheckoutLink>
                  </div>
               </div>

            </div>
         </div>

      </div>
   )
}