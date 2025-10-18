import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function Trash() {
  const trashItems = [
    { name: "Google offer_letter.pdf", icon: "./themes/filetypes/pdf.png" },
    { name: "love.zip", icon: "./themes/filetypes/zip.png" },
    { name: "password.txt", icon: "./themes/filetypes/txt.png" },
    { name: "VALORANT", icon: "./themes/filetypes/valo.webp" },
    { name: "mrRobot.ova", icon: "./themes/filetypes/mrRobot.png" },
    { name: "project final", icon: "./themes/Yaru/system/folder.png" },
    { name: "Hit Me Hard and Soft", icon: "images/logos/hit.jpg" },
  ];

  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const wasEmpty = localStorage.getItem("trash-empty");
    if (wasEmpty === "true") setEmpty(true);
  }, []);

  const handleEmptyTrash = () => {
    setEmpty(true);
    localStorage.setItem("trash-empty", true);
  };

  const focusFile = (e) => {
    e.currentTarget.classList.toggle("opacity-70");
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#1a1a1d] text-gray-100 select-none rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 shadow-lg">
      
      <div className="flex items-center justify-between w-full bg-[#222224]/70 px-3 py-2 text-sm border-b border-gray-700">
        <span className="font-semibold tracking-wide">🗑️ Trash </span>
        <button
          onClick={handleEmptyTrash}
          className="flex items-center gap-1 bg-red-500/80 hover:bg-red-600 transition px-3 py-1 rounded-md border border-red-700 text-white text-xs shadow-sm"
        >
          <Trash2 size={14} /> Empty
        </button>
      </div>

      
      <div className="flex-grow relative overflow-y-auto px-4 py-4">
        <AnimatePresence>
          {empty ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <img
                className="w-24 mb-4 opacity-80"
                src="./themes/Yaru/status/user-trash-symbolic.svg"
                alt="Ubuntu Trash"
              />
              <span className="text-gray-400 font-medium text-lg">
                Trash is Empty
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="filled"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap gap-6"
            >
              {trashItems.map((item, index) => (
                <motion.div
                  key={index}
                  tabIndex="1"
                  onFocus={focusFile}
                  onBlur={focusFile}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-sm w-24 cursor-pointer"
                >
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 flex items-center justify-center bg-gray-800/60 rounded-xl p-2 shadow-md hover:shadow-lg hover:bg-gray-700/60 transition-all"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                    />
                  </motion.div>
                  
                  <span className="text-center text-xs mt-2 break-words whitespace-normal leading-tight px-1 w-full">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export const displayTrash = () => <Trash />;
