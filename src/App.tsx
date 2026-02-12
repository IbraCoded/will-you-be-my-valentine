"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Please nau baby",
      "I will buy you a crate of agbalumo",
      "What about corn?",
      "PLEASE BABYYYYYYYY",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "Okay you're talking to Ibrahim's ghost",
      "please my loaf🍞💞",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getAskingImage = () => {
    if (noCount >= 15) {
      return "/images/01fc7063-a486-4a77-ae78-52dc368f9b13.JPG"; // Replace with your sad bear image
    }
    return "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";
  }

  const getBackgroundImage = () => {
    if (yesPressed) {
      return "url('/images/IMG_2662.jpg')";
    } else if (noCount >= 15) {
      return ; // Replace with your initial background image path
    }
    return null; // No background for noCount > 0
  };

  const backgroundImage = getBackgroundImage();

  return (
    <div className="-mt-16 flex min-h-screen flex-col items-center justify-center relative">
      {backgroundImage && (
        <div
          className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center blur-sm"
          style={{
            backgroundImage: backgroundImage,
          }}
        />
      )}
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-xl md:text-3xl lg:text-4xl font-bold text-center">
            WOOOOOO!!! I love you baby mi!
            <br />
            <img
              src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f618.svg"
              alt="kissing face"
              className="inline w-8 h-8 text-center"
            />
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={getAskingImage()}
          />
          <h1 className="my-2 text-4xl">Mon Coueur!🙃</h1>
          <h1 className="mb-6  text-3xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}