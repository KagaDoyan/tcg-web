"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data
export interface ImageData {
  src: StaticImageData;
  href: string | null
}

// Props interface with optional slideTimer and required images array
interface BannerSliderProps {
  images: ImageData[];
  slideTimer?: number; // Timer in milliseconds
}

export default function BannerSlider({
  images,
  slideTimer = 3000,
}: BannerSliderProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto slide transition (pause on hover)
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, slideTimer);

      // Cleanup the interval on component unmount or when dependencies change
      return () => clearInterval(interval);
    }
  }, [isHovered, slideTimer]);

  // Mouse event handlers to control auto sliding
  const handleMouseOver = (): void => setIsHovered(true);
  const handleMouseLeave = (): void => setIsHovered(false);

  return (
    <div className="relative w-full mx-auto mt-4">
      {/* Slider Container */}
      <div
        className="relative overflow-hidden group mx-12 rounded-xl"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image Slider */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-[300px] flex-shrink-0">
              <a href={image.href || "#"}>
                <Image
                  src={image.src}
                  alt={`Slider Image ${index + 1}`}
                  fill
                  objectFit="fill"
                  className="rounded-xl"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (appear on hover) */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Slide Indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 rounded-xl transition-all duration-500 ease-in-out ${index === currentIndex ? "bg-[#beff46]" : "bg-gray-300"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
