export default function TweetPage() {
   return (
      <div className="w-full">
         <div className="text-times pt-5">
            9th March 2015
         </div>
         <div className="link-custom">
            Twitter
         </div>
         <div className="w-2/3 font-cousine mx-auto border-b-5 border-t-5 border-black pt-30 pb-30 my-20">
            <div className="text-3xl pb-5"><a target="_blank" href="https://x.com/onedirection" className="!text-black border-b border-black pb-0.5">@onedirection</a> 5years</div>
            <p className="text-5xl tracking-wide leading-snug">
               The guys are nominated in the <strong className="border-b border-black pb-0.5">#iHeartAwards</strong> for <strong className="border-b border-black pb-0.5">#BestFanArmy</strong>.
               Help prove that you are by voting here!
               <a target="_blank" href="https://smarturl.it/1DiHeart" className="!text-black block"><strong className="border-b border-black pb-0.5">smarturl.it/1DiHeart</strong></a>
            </p>
         </div>
      </div>
   )
}