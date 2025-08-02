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
  const goBack = () => {
    setSelectedFolder(null)
    setSelectedImage(null) // Close image modal if open when going back to folders
  }

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

  const fadeScaleVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-gray-800">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Our Gallery</h1>
        {selectedFolder && (
          <button
            onClick={goBack}
            className="group rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
          >
            <span className="mr-2 inline-block transition-transform group-hover:-translate-x-1">◀</span>
            Go Back
          </button>
        )}
      </div>

      {/* Folder View */}
      {!selectedFolder && (
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {galleryData.map(({ folder, images }) => (
            <motion.div
              key={folder}
              className="relative h-48 cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl md:h-56 lg:h-64"
              onClick={() => openFolder(folder)}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={images[0] || "/placeholder.svg"} // Use the first image in the folder as cover
                alt={`Cover for ${folder} folder`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={false} // Only load when visible
              />
              <div className="absolute inset-0 flex items-end rounded-xl bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-xl font-semibold text-white md:text-2xl">{folder}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Image Grid View */}
      {selectedFolder && !selectedImage && (
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {galleryData
            .find((folder) => folder.folder === selectedFolder)
            ?.images.map((image, index) => (
              <motion.div
                key={image}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                onClick={() => openImage(image, index)}
              >
                <Image
                  src={image || "/placeholder.svg?height=800&width=800&query=gallery image"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  priority={false} // Only load when visible
                />
              </motion.div>
            ))}
        </motion.div>
      )}

      {/* Image Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <motion.div
              className="relative w-full max-w-6xl rounded-lg bg-white p-4 shadow-lg"
              variants={fadeScaleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            >
              <button
                onClick={closeImage}
                className="absolute right-4 top-4 z-10 rounded-full bg-gray-700 p-2 text-white transition-colors hover:bg-gray-800"
                aria-label="Close image"
              >
                ✕
              </button>
              <div className="relative h-[80vh] w-full">
                <Image
                  src={selectedImage || "/placeholder.svg?height=800&width=800&query=selected gallery image"}
                  alt="Selected gallery image"
                  fill
                  className="rounded-lg object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handlePrev}
                  className="rounded-full bg-gray-700 p-2 text-white transition-colors hover:bg-gray-800"
                  aria-label="Previous image"
                >
                  ◀
                </button>
                <button
                  onClick={handleNext}
                  className="rounded-full bg-gray-700 p-2 text-white transition-colors hover:bg-gray-800"
                  aria-label="Next image"
                >
                  ▶
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
