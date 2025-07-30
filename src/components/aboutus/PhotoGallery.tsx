"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const galleryData = [
  {
    folder: "Bharatpur Ash Disposal Bund",
    bgImage: "/assets/photogallery/34490.jpg",
    images: [
      "/assets/photogallery/Bharatpur Ash Disposal Bund/133.jpg",
      "/assets/photogallery/Bharatpur Ash Disposal Bund/134.jpg",
      "/assets/photogallery/Bharatpur Ash Disposal Bund/181.jpg",
    ],
  },
  {
    folder: "Construction of Clariflucator",
    bgImage: "/assets/photogallery/salina-turda-salt-mine-romania.jpg",
    images: [
      "/assets/photogallery/Construction of Clariflucator/1.jpg",
      "/assets/photogallery/Construction of Clariflucator/115.jpg",
      "/assets/photogallery/Construction of Clariflucator/116.jpg",
      "/assets/photogallery/Construction of Clariflucator/117.jpg",
      "/assets/photogallery/Construction of Clariflucator/203.jpg",
    ],
  },
  {
    folder: "Inauguration of Usha Office",
    bgImage: "/assets/photogallery/cutting-red-ribbon.jpg",
    images: [
      "/assets/photogallery/Inauguration of Usha Office/118.jpg",
      "/assets/photogallery/Inauguration of Usha Office/119.jpg",
      "/assets/photogallery/Inauguration of Usha Office/120.jpg",
      "/assets/photogallery/Inauguration of Usha Office/121.jpg",
      "/assets/photogallery/Inauguration of Usha Office/216.jpg",
      "/assets/photogallery/Inauguration of Usha Office/217.jpg",
      "/assets/photogallery/Inauguration of Usha Office/219.jpg",
      "/assets/photogallery/Inauguration of Usha Office/220.jpg",
      "/assets/photogallery/Inauguration of Usha Office/221.jpg",
    ],
  },
  {
    folder: "Taping the Existing Ash Line",
    bgImage: "/assets/photogallery/taping.avif",
    images: [
      "/assets/photogallery/Taping the Existing Ash Line/36.jpg",
      "/assets/photogallery/Taping the Existing Ash Line/37.jpg",
      "/assets/photogallery/Taping the Existing Ash Line/38.jpg",
      "/assets/photogallery/Taping the Existing Ash Line/178.jpg",
      "/assets/photogallery/Taping the Existing Ash Line/179.jpg",
      "/assets/photogallery/Taping the Existing Ash Line/180.jpg",
    ],
  },
  {
    folder: "Work Site",
    bgImage: "/assets/photogallery/storehouse.jpg",
    images: [
      "/assets/photogallery/Work Site/4.jpg",
      "/assets/photogallery/Work Site/5.jpg",
      "/assets/photogallery/Work Site/6.jpg",
      "/assets/photogallery/Work Site/7.jpg",
      "/assets/photogallery/Work Site/8.jpg",
      "/assets/photogallery/Work Site/9.jpg",
      "/assets/photogallery/Work Site/10.jpg",
      "/assets/photogallery/Work Site/11.jpg",
      "/assets/photogallery/Work Site/12.jpg",
      "/assets/photogallery/Work Site/13.jpg",
      "/assets/photogallery/Work Site/14.jpg",
      "/assets/photogallery/Work Site/15.jpg",
      "/assets/photogallery/Work Site/16.jpg",
      "/assets/photogallery/Work Site/17.jpg",
      "/assets/photogallery/Work Site/18.jpg",
      "/assets/photogallery/Work Site/19.jpg",
      "/assets/photogallery/Work Site/20.jpg",
      "/assets/photogallery/Work Site/21.jpg",
      "/assets/photogallery/Work Site/22.jpg",
      "/assets/photogallery/Work Site/23.jpg",
      "/assets/photogallery/Work Site/24.jpg",
      "/assets/photogallery/Work Site/25.jpg",
      "/assets/photogallery/Work Site/26.jpg",
      "/assets/photogallery/Work Site/27.jpg",
      "/assets/photogallery/Work Site/28.jpg",
      "/assets/photogallery/Work Site/29.jpg",
      "/assets/photogallery/Work Site/30.jpg",
      "/assets/photogallery/Work Site/31.jpg",
      "/assets/photogallery/Work Site/32.jpg",
      "/assets/photogallery/Work Site/34.jpg",
      "/assets/photogallery/Work Site/39.jpg",
      "/assets/photogallery/Work Site/40.jpg",
      "/assets/photogallery/Work Site/41.jpg",
      "/assets/photogallery/Work Site/42.jpg",
      "/assets/photogallery/Work Site/43.jpg",
      "/assets/photogallery/Work Site/44.jpg",
      "/assets/photogallery/Work Site/45.jpg",
      "/assets/photogallery/Work Site/46.jpg",
      "/assets/photogallery/Work Site/47.jpg",
      "/assets/photogallery/Work Site/48.jpg",
      "/assets/photogallery/Work Site/50.jpg",
      "/assets/photogallery/Work Site/51.jpg",
      "/assets/photogallery/Work Site/52.jpg",
      "/assets/photogallery/Work Site/53.jpg",
      "/assets/photogallery/Work Site/54.jpg",
      "/assets/photogallery/Work Site/55.jpg",
      "/assets/photogallery/Work Site/56.jpg",
      "/assets/photogallery/Work Site/57.jpg",
      "/assets/photogallery/Work Site/58.jpg",
      "/assets/photogallery/Work Site/59.jpg",
      "/assets/photogallery/Work Site/60.jpg",
      "/assets/photogallery/Work Site/61.jpg",
      "/assets/photogallery/Work Site/62.jpg",
      "/assets/photogallery/Work Site/63.jpg",
      "/assets/photogallery/Work Site/64.jpg",
      "/assets/photogallery/Work Site/65.jpg",
      "/assets/photogallery/Work Site/66.jpg",
      "/assets/photogallery/Work Site/67.jpg",
      "/assets/photogallery/Work Site/68.jpg",
      "/assets/photogallery/Work Site/69.jpg",
      "/assets/photogallery/Work Site/70.jpg",
      "/assets/photogallery/Work Site/71.jpg",
      "/assets/photogallery/Work Site/72.jpg",
      "/assets/photogallery/Work Site/73.jpg",
      "/assets/photogallery/Work Site/74.jpg",
      "/assets/photogallery/Work Site/75.jpg",
      "/assets/photogallery/Work Site/76.jpg",
      "/assets/photogallery/Work Site/77.jpg",
      "/assets/photogallery/Work Site/78.jpg",
      "/assets/photogallery/Work Site/79.jpg",
      "/assets/photogallery/Work Site/80.jpg",
      "/assets/photogallery/Work Site/81.jpg",
      "/assets/photogallery/Work Site/82.jpg",
      "/assets/photogallery/Work Site/83.jpg",
      "/assets/photogallery/Work Site/84.jpg",
      "/assets/photogallery/Work Site/85.jpg",
      "/assets/photogallery/Work Site/86.jpg",
      "/assets/photogallery/Work Site/87.jpg",
      "/assets/photogallery/Work Site/88.jpg",
      "/assets/photogallery/Work Site/89.jpg",
      "/assets/photogallery/Work Site/90.jpg",
      "/assets/photogallery/Work Site/91.jpg",
      "/assets/photogallery/Work Site/92.jpg",
      "/assets/photogallery/Work Site/93.jpg",
      "/assets/photogallery/Work Site/94.jpg",
      "/assets/photogallery/Work Site/95.jpg",
      "/assets/photogallery/Work Site/96.jpg",
      "/assets/photogallery/Work Site/97.jpg",
      "/assets/photogallery/Work Site/98.jpg",
      "/assets/photogallery/Work Site/99.jpg",
      "/assets/photogallery/Work Site/100.jpg",
      "/assets/photogallery/Work Site/101.jpg",
      "/assets/photogallery/Work Site/102.jpg",
      "/assets/photogallery/Work Site/103.jpg",
      "/assets/photogallery/Work Site/112.jpg",
      "/assets/photogallery/Work Site/113.jpg",
      "/assets/photogallery/Work Site/115.jpg",
      "/assets/photogallery/Work Site/116.jpg",
      "/assets/photogallery/Work Site/117.jpg",
      "/assets/photogallery/Work Site/122.jpg",
      "/assets/photogallery/Work Site/123.jpg",
      "/assets/photogallery/Work Site/124.jpg",
      "/assets/photogallery/Work Site/125.jpg",
      "/assets/photogallery/Work Site/126.jpg",
      "/assets/photogallery/Work Site/127.jpg",
      "/assets/photogallery/Work Site/128.jpg",
      "/assets/photogallery/Work Site/129.jpg",
      "/assets/photogallery/Work Site/130.jpg",
      "/assets/photogallery/Work Site/131.jpg",
      "/assets/photogallery/Work Site/132.jpg",
      "/assets/photogallery/Work Site/133.jpg",
      "/assets/photogallery/Work Site/134.jpg",
      "/assets/photogallery/Work Site/135.jpg",
      "/assets/photogallery/Work Site/136.jpg",
      "/assets/photogallery/Work Site/137.jpg",
      "/assets/photogallery/Work Site/138.jpg",
      "/assets/photogallery/Work Site/139.jpg",
      "/assets/photogallery/Work Site/140.jpg",
      "/assets/photogallery/Work Site/141.jpg",
      "/assets/photogallery/Work Site/142.jpg",
      "/assets/photogallery/Work Site/143.jpg",
      "/assets/photogallery/Work Site/144.jpg",
      "/assets/photogallery/Work Site/145.jpg",
      "/assets/photogallery/Work Site/146.jpg",
      "/assets/photogallery/Work Site/147.jpg",
      "/assets/photogallery/Work Site/148.jpg",
      "/assets/photogallery/Work Site/149.jpg",
      "/assets/photogallery/Work Site/150.jpg",
      "/assets/photogallery/Work Site/167.jpg",
      "/assets/photogallery/Work Site/168.jpg",
      "/assets/photogallery/Work Site/169.jpg",
      "/assets/photogallery/Work Site/170.jpg",
      "/assets/photogallery/Work Site/171.jpg",
      "/assets/photogallery/Work Site/172.jpg",
      "/assets/photogallery/Work Site/173.jpg",
      "/assets/photogallery/Work Site/174.jpg",
      "/assets/photogallery/Work Site/175.jpg",
      "/assets/photogallery/Work Site/176.jpg",
      "/assets/photogallery/Work Site/177.jpg",
      "/assets/photogallery/Work Site/178.jpg",
      "/assets/photogallery/Work Site/179.jpg",
      "/assets/photogallery/Work Site/180.jpg",
      "/assets/photogallery/Work Site/181.jpg",
      "/assets/photogallery/Work Site/182.jpg",
      "/assets/photogallery/Work Site/183.jpg",
      "/assets/photogallery/Work Site/184.jpg",
      "/assets/photogallery/Work Site/185.jpg",
      "/assets/photogallery/Work Site/186.jpg",
      "/assets/photogallery/Work Site/187.jpg",
      "/assets/photogallery/Work Site/188.jpg",
      "/assets/photogallery/Work Site/189.jpg",
      "/assets/photogallery/Work Site/190.jpg",
      "/assets/photogallery/Work Site/191.jpg",
      "/assets/photogallery/Work Site/192.jpg",
      "/assets/photogallery/Work Site/193.jpg",
      "/assets/photogallery/Work Site/194.jpg",
      "/assets/photogallery/Work Site/196.jpg",
      "/assets/photogallery/Work Site/197.jpg",
      "/assets/photogallery/Work Site/198.jpg",
      "/assets/photogallery/Work Site/199.jpg",
      "/assets/photogallery/Work Site/200.jpg",
      "/assets/photogallery/Work Site/201.jpg",
      "/assets/photogallery/Work Site/202.jpg",
      "/assets/photogallery/Work Site/203.jpg",
      "/assets/photogallery/Work Site/204.jpg",
      "/assets/photogallery/Work Site/205.jpg",
      "/assets/photogallery/Work Site/206.jpg",
      "/assets/photogallery/Work Site/207.jpg",
      "/assets/photogallery/Work Site/208.jpg",
      "/assets/photogallery/Work Site/209.jpg",
      "/assets/photogallery/Work Site/210.jpg",
      "/assets/photogallery/Work Site/211.jpg",
      "/assets/photogallery/Work Site/212.jpg",
      "/assets/photogallery/Work Site/213.jpg",
      "/assets/photogallery/Work Site/214.jpg",
      "/assets/photogallery/Work Site/215.jpg",
      "/assets/photogallery/Work Site/218.jpg",
    ],
  },
  {
    folder: "Erection Pump",
    bgImage: "/assets/photogallery/erection.jpg",
    images: [
      "/assets/photogallery/Erection Pump/151.jpg",
      "/assets/photogallery/Erection Pump/152.jpg",
      "/assets/photogallery/Erection Pump/153.jpg",
      "/assets/photogallery/Erection Pump/154.jpg",
      "/assets/photogallery/Erection Pump/155.jpg",
      "/assets/photogallery/Erection Pump/156.jpg",
      "/assets/photogallery/Erection Pump/157.jpg",
      "/assets/photogallery/Erection Pump/158.jpg",
      "/assets/photogallery/Erection Pump/159.jpg",
      "/assets/photogallery/Erection Pump/160.jpg",
      "/assets/photogallery/Erection Pump/161.jpg",
      "/assets/photogallery/Erection Pump/162.jpg",
      "/assets/photogallery/Erection Pump/163.jpg",
      "/assets/photogallery/Erection Pump/164.jpg",
      "/assets/photogallery/Erection Pump/165.jpg",
      "/assets/photogallery/Erection Pump/166.jpg",
      "/assets/photogallery/Erection Pump/167.jpg",
      "/assets/photogallery/Erection Pump/168.jpg",
    ],
  },
  {
    folder: "Odisha First Iron Ore Slurry Pipeline Puja",
    bgImage: "/assets/photogallery/slurry.avif",
    images: [
      "/assets/photogallery/Odisha First Iron Ore Slurry Pipeline Puja/104.jpg",
      "/assets/photogallery/Odisha First Iron Ore Slurry Pipeline Puja/105.jpg",
      "/assets/photogallery/Odisha First Iron Ore Slurry Pipeline Puja/106.jpg",
      "/assets/photogallery/Odisha First Iron Ore Slurry Pipeline Puja/107.jpg",
      "/assets/photogallery/Odisha First Iron Ore Slurry Pipeline Puja/108.jpg",
      "/assets/photogallery/Odisha First Iron Ore Slurry Pipeline Puja/109.jpg",
      "/assets/photogallery/Odisha First Iron Ore Slurry Pipeline Puja/110.jpg",
      "/assets/photogallery/Odisha First Iron Ore Slurry Pipeline Puja/111.jpg",
    ],
  },
  {
    folder: "Other",
    bgImage: "/assets/photogallery/other.jpg",
    images: [
      "/assets/photogallery/Other/1.jpg",
      "/assets/photogallery/Other/2.jpg",
      "/assets/photogallery/Other/3.jpg",
      "/assets/photogallery/Other/4.jpg",
      "/assets/photogallery/Other/5.jpg",
      "/assets/photogallery/Other/6.jpg",
      "/assets/photogallery/Other/7.jpg",
      "/assets/photogallery/Other/8.jpg",
      "/assets/photogallery/Other/9.jpg",
      "/assets/photogallery/Other/10.jpg",
      "/assets/photogallery/Other/11.jpg",
      "/assets/photogallery/Other/12.jpg",
      "/assets/photogallery/Other/13.jpg",
      "/assets/photogallery/Other/14.jpg",
      "/assets/photogallery/Other/16.jpg",
      "/assets/photogallery/Other/17.jpg",
      "/assets/photogallery/Other/18.jpg",
      "/assets/photogallery/Other/19.jpg",
      "/assets/photogallery/Other/20.jpg",
      "/assets/photogallery/Other/21.jpg",
      "/assets/photogallery/Other/22.jpg",
      "/assets/photogallery/Other/23.jpg",
      "/assets/photogallery/Other/24.jpg",
      "/assets/photogallery/Other/25.jpg",
      "/assets/photogallery/Other/26.jpg",
      "/assets/photogallery/Other/27.jpg",
      "/assets/photogallery/Other/28.jpg",
      "/assets/photogallery/Other/29.jpg",
      "/assets/photogallery/Other/30.jpg",
      "/assets/photogallery/Other/31.jpg",
      "/assets/photogallery/Other/32.jpg",
    ],
  },
]

export default function PhotoGallery() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const openFolder = (folder: string) => setSelectedFolder(folder)
  const goBack = () => setSelectedFolder(null)
  const openImage = (image: string, index: number) => {
    setSelectedImage(image)
    setImageIndex(index)
  }
  const closeImage = () => setSelectedImage(null)

  const handleNext = () => {
    const folderImages = galleryData.find((f) => f.folder === selectedFolder)?.images
    if (!folderImages) return
    setDirection("next")
    const nextIndex = (imageIndex + 1) % folderImages.length
    setSelectedImage(folderImages[nextIndex])
    setImageIndex(nextIndex)
  }

  const handlePrev = () => {
    const folderImages = galleryData.find((f) => f.folder === selectedFolder)?.images
    if (!folderImages) return
    setDirection("prev")
    const prevIndex = (imageIndex - 1 + folderImages.length) % folderImages.length
    setSelectedImage(folderImages[prevIndex])
    setImageIndex(prevIndex)
  }

  const flipVariants = {
    initial: (direction: "next" | "prev") => ({
      rotateY: direction === "next" ? -90 : 90,
      opacity: 0,
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction: "next" | "prev") => ({
      rotateY: direction === "next" ? 90 : -90,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  }

  return (
    <div className="min-h-screen font-lora bg-gradient-to-r  from-green-500 to to-sky-400 p-6">
      {/* Header */}
      <div className="flex  justify-between items-center mb-6">
        <h1 className="text-6xl font-extrabold text-gray-400 bg-gradient-to-r  from-red-700 via-blue-700 to-green-700 bg-clip-text text-transparent animate-gradient">
          Our Gallery
        </h1>

        {selectedFolder && (
          <button
            onClick={goBack}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        )}
      </div>

      {/* Folder View */}
      {!selectedFolder && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {galleryData.map(({ folder, bgImage }) => (
            <motion.div
              key={folder}
              className="p-6 w-full h-40 md:h-56 lg:h-64 shadow-xl rounded-2xl cursor-pointer hover:shadow-2xl transition flex flex-col items-center justify-center border-2 border-transparent hover:border-blue-500 relative overflow-hidden"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => openFolder(folder)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
              <h2 className="relative text-2xl font-bold text-white z-10">{folder}</h2>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Image Grid View */}
      {selectedFolder && !selectedImage && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryData
            .find((folder) => folder.folder === selectedFolder)
            ?.images.map((image, index) => (
              <Image
                width={800}
                height={800}
                key={image}
                src={image || "/placeholder.svg"}
                alt=""
                className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                onClick={() => openImage(image, index)}
              />
            ))}
        </div>
      )}

      {/* Image Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50" onClick={closeImage}>
            <motion.div
              className="relative max-w-5xl w-full p-4"
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white text-xl bg-gray-700 p-2 rounded-full"
              >
                ✕
              </button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt=""
                className="w-full h-auto max-h-[85vh] rounded-lg shadow-lg object-contain"
              />
              <div className="flex justify-between mt-4">
                <button onClick={handlePrev} className="text-white text-xl">
                  ◀
                </button>
                <button onClick={handleNext} className="text-white text-xl">
                  ▶
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
