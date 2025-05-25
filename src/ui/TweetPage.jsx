export default function TweetPage() {
   return (
      <div className="w-full px-4 lg:px-0">
         {/* Header */}
         <div className="text-times pt-5 text-base md:text-lg lg:text-xl">
            9th March 2015
         </div>
         <div className="link-custom text-lg md:text-xl">
            Twitter
         </div>

         {/* Tweet container */}
         <div className="w-full md:w-5/6 lg:w-2/3 font-cousine mx-auto border-b-4 lg:border-b-5 border-t-4 lg:border-t-5 border-black pt-8 md:pt-16 lg:pt-30 pb-8 md:pb-16 lg:pb-30 my-8 md:my-12 lg:my-20">
            {/* Tweet header */}
            <div className="text-lg md:text-2xl lg:text-3xl pb-3 lg:pb-5">
               <a
                  target="_blank"
                  href="https://x.com/onedirection"
                  className="link-hover !text-black border-b border-black pb-0.5"
               >
                  @onedirection
               </a>
               <span className="ml-2">5years</span>
            </div>

            {/* Tweet content */}
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide leading-snug md:leading-relaxed">
               The guys are nominated in the{' '}
               <strong className="border-b border-black pb-0.5 link-hover">
                  #iHeartAwards
               </strong>{' '}
               for{' '}
               <strong className="link-hover border-b border-black pb-0.5">
                  #BestFanArmy
               </strong>.
               Help prove that you are by voting here!

               <a
                  target="_blank"
                  href="https://smarturl.it/1DiHeart"
                  className="link-hover !text-black block mt-4 md:mt-6"
               >
                  <strong className="border-b border-black pb-0.5">
                     smarturl.it/1DiHeart
                  </strong>
               </a>
            </p>
         </div>
      </div>
   )
}