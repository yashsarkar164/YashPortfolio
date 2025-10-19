import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import $ from "jquery";
import { Palette, Image as ImageIcon } from "lucide-react";

export default function Settings(props) {
  const wallpapers = {
    "wall-1": "./images/wallpapers/wall-1.webp",
    "wall-2": "./images/wallpapers/wall-2.webp",
    "wall-3": "./images/wallpapers/wall-3.webp",
    "wall-4": "./images/wallpapers/wall-4.webp",
    "wall-5": "./images/wallpapers/wall-5.webp",
    "wall-6": "./images/wallpapers/wall-6.webp",
    "wall-7": "./images/wallpapers/wall-7.webp",
    "wall-8": "./images/wallpapers/wall-8.webp",
    "wall-9": "./images/wallpapers/wall-9.jpg",
    "wall-10": "./images/wallpapers/wall-10.png",
    "wall-11": "./images/wallpapers/wall-11.jpg",
  };

  const [preview, setPreview] = useState(props.currBgImgName);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreview(props.currBgImgName);
    }, 300);
    return () => clearTimeout(timeout);
  }, [props.currBgImgName]);

  const changeBackgroundImage = (e) => {
    const selected = $(e.target).data("path");
    props.changeBackgroundImage(selected);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full flex-col flex-grow z-20 max-h-full overflow-y-auto bg-ub-cool-grey backdrop-blur-md select-none"
    >
      {/* HEADER */}
      <div className="flex items-center justify-center gap-3 mt-6 mb-2">
        <Palette className="text-yellow-400 w-6 h-6" />
        <h1 className="text-xl font-semibold text-gray-100 tracking-wide">
          Personalize
        </h1>
      </div>

      {/* WALLPAPER PREVIEW */}
      <div className="relative w-3/4 md:w-2/5 h-48 md:h-56 m-auto my-6 rounded-2xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={preview}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${wallpapers[preview]})`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center">
          <div className="flex items-center gap-2 text-gray-100 text-sm">
            <ImageIcon className="w-4 h-4" />
            <span>Live Preview</span>
          </div>
        </div>
      </div>

      {/* WALLPAPER GRID */}
      <div className="flex flex-wrap justify-center items-center border-t border-gray-800 pt-4 pb-6">
        {Object.keys(wallpapers).map((name, index) => {
          const isActive = name === props.currBgImgName;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              onClick={changeBackgroundImage}
              data-path={name}
              className={`relative cursor-pointer outline-none border-4 transition-all duration-300 ease-in-out rounded-2xl shadow-md m-2
                ${
                  isActive
                    ? "border-yellow-500 ring-2 ring-yellow-300 ring-offset-2"
                    : "border-transparent hover:ring-1 hover:ring-white/40"
                }
              `}
              style={{
                backgroundImage: `url(${wallpapers[name]})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                width: "110px",
                height: "70px",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeOverlay"
                  className="absolute inset-0 bg-yellow-400/20 rounded-xl border border-yellow-300"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export const displaySettings = () => {
  return <Settings />;
};
