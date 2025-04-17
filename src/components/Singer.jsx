import NetworkButton from "./NetworkButton"
import SocialIcon from './SocialIcon'


export default function Singer({ singer }) {
   console.log(singer)
   return (
      <div className="w-full">
         <div className="w-1/2 inline-block">
            <img width={'10%'} height={'100px'} src={singer.images[0]} alt="" />
         </div>
         <div className="w-1/2 inline-block font-source-code-pro">
            <div className="flex flex-col justify-center items-center gap-10">
               <h2 className="text-9xl">{singer.name}</h2>
               <p className="w-5/6 text-2xl text-center leading-normal">{singer.description}</p>
               <div className="flex justify-center items-center gap-10">
                  {
                     singer?.networks.map(network =>
                        <NetworkButton key={network.icon} href={network.link}><SocialIcon size={40} icon={network.icon} /></NetworkButton>
                     )
                  }

               </div>
            </div>

         </div>
      </div>)
}