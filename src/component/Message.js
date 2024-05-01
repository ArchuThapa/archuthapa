


// import { IonIcon } from "@ionic/react";
// import { chatbubbleEllipsesOutline } from 'ionicons/icons';

// import React from "react";

// const Meassage = () => {
//   return (
//     <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-green-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
//     <IonIcon icon={chatbubbleEllipsesOutline} />
//     </div>
//   );
// };

// export default Meassage ;




// import { IonIcon } from "@ionic/react";
// import { chatbubbleEllipsesOutline } from 'ionicons/icons';

// import React from "react";

// const Message = () => {
//   const facebookLink = "https://www.facebook.com/profile.php?id=100077255962580";

//   return (
//     <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer">
//       <div className="text-white bg-green-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
//         <IonIcon icon={chatbubbleEllipsesOutline} className="text-4xl" />
//       </div>
//     </a>
//   );
// };

// export default Message;






// import { useEffect } from "react";

// const Message = () => {
//   useEffect(() => {
//     const tidioScript = document.createElement('script');
//     tidioScript.src = '//code.tidio.co/2vqzvehib3fn0tmrg8m6gtnam2ifkixv.js';
//     tidioScript.async = true;
//     document.body.appendChild(tidioScript);

//     return () => {
//       document.body.removeChild(tidioScript);
//     };
//   }, []);

//   return null; // We don't need to render anything here, as Tidio chat widget will be added dynamically
// };

// export default Message;




import React, { useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline } from 'ionicons/icons';

const Message = () => {
  useEffect(() => {
    const tidioScript = document.createElement('script');
    tidioScript.src = '//code.tidio.co/2vqzvehib3fn0tmrg8m6gtnam2ifkixv.js';
    tidioScript.async = true;
    document.body.appendChild(tidioScript);

    return () => {
      document.body.removeChild(tidioScript);
    };
  }, []);

  const handleChatIconClick = () => {
    // Trigger Tidio chat widget to open
    if (window.tidioChatApi) {
      window.tidioChatApi.open();
    }
  };

  console.log('hiii', handleChatIconClick);
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-green-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce" onClick={handleChatIconClick}>
      <IonIcon icon={chatbubbleEllipsesOutline} />
    </div>
  );
};

export default Message;
