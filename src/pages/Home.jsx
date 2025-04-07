export default function Home() {
   // You had an incomplete let test = statement that wasn't being used
   return (
      // The for loop needs to be inside the JSX and return a single element
      <div>
         {(() => {
            const elements = [];
            for (let i = 0; i < 50; i++) {
               elements.push(
                  <div key={i}>
                     <h1>Home</h1>
                  </div>
               );
            }
            return elements;
         })()}
      </div>
   );
}