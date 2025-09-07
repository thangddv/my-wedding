import { useState, useEffect, useRef } from 'react';

// Add your image filenames here
const images = [
  "/images/308f8b0625d2ae8cf7c311.jpg",
  "/images/04402cc9821d0943500c10.jpg",
  "/images/aaf00679a8ad23f37abc14.jpg"
  // Add more image paths as needed
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const startX = useRef(null);
  const isDragging = useRef(false);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  // Touch and mouse swipe handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevSlide();
      else nextSlide();
      isDragging.current = false;
    }
  };
  const handleTouchEnd = () => {
    isDragging.current = false;
  };
  // Mouse drag for desktop
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevSlide();
      else nextSlide();
      isDragging.current = false;
    }
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (<>
    <section id="image" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Love Story Section */}
        <div className="max-w-md mx-auto mb-8 text-center">
          <h2 className="text-2xl font-serif text-rose-600 mb-2">Chuyện tình của chúng tôi</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Chuyện tình của chúng tôi bắt đầu từ những điều giản dị nhất. Trải qua bao thăng trầm, chúng tôi đã cùng nhau trưởng thành và giờ đây cùng nhau bước vào một hành trình mới – hành trình của hạnh phúc trọn vẹn.
          </p>
        </div>
        <div
          className="relative w-full max-w-md aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ touchAction: 'pan-y' }}
        >
          <img
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            className="object-cover w-full h-full transition-all duration-500"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-rose-500' : 'bg-white/70 border border-rose-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>);
}
