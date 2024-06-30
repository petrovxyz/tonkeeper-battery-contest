"use client";
import React, { useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvasreveal";

const Steps = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
  
    const mouseDownHandler = (e: React.MouseEvent) => {
      isDown.current = true;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.classList.add('activecursor');
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
      }
    };
  
    const mouseLeaveHandler = () => {
      isDown.current = false;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.classList.remove('activecursor');
      }
    };
  
    const mouseUpHandler = () => {
      isDown.current = false;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.classList.remove('activecursor');
      }
    };
  
    const mouseMoveHandler = (e: React.MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      if (scrollContainerRef.current) {
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX.current) * 3;
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
      }
    };
  return (
    <section className="w-full py-10">
      <h1 className="heading">
        How to <span className="underline underline-offset-4">charge</span> your <span className="text-[#0fb5f6]">Battery</span>?
      </h1>
      <div className="my-10 flex gap-4 overflow-x-auto hide-scrollbar cursor-grab"
      ref={scrollContainerRef}
      onMouseDown={mouseDownHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
      >
        <div className="border-[#242e3b] border rounded-[24px] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto pt-4 relative h-[480px] min-w-[350px] overflow-hidden">
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#1d2633]"
                colors={[
                  [125, 211, 252],
                  [118, 163, 255],
                ]}
                dotSize={2}
              />
              <div className="rounded-[24px] absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
            </div>
          </AnimatePresence>
          <div className="relative z-20 flex flex-col items-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors cursor-grab">
                Step 1
            </button>
            <h2 className="text-xl opacity-100 relative z-10 mt-4 font-bold text-white">
              Open Tonkeeper, go to settings
            </h2>
            <img src="/phone1.webp" className="w-full h-full object-cover object-center relative top-3"/>
          </div>
        </div>
        <div className="border-[#242e3b] border rounded-[24px] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto pt-4 relative h-[480px] min-w-[350px] overflow-hidden">
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#1d2633]"
                colors={[
                  [125, 211, 252],
                  [118, 163, 255],
                ]}
                dotSize={2}
              />
              <div className="rounded-[24px] absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
            </div>
          </AnimatePresence>
          <div className="relative z-20 flex flex-col items-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors cursor-grab">
                Step 2
            </button>
            <h2 className="text-xl opacity-100 relative z-10 mt-4 font-bold text-white">
              Find and select «Battery»
            </h2>
            <img src="/phone2.webp" className="w-full h-full object-cover object-center relative top-3"/>
          </div>
        </div>
        <div className="border-[#242e3b] border rounded-[24px] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto pt-4 relative h-[480px] min-w-[350px] overflow-hidden">
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#1d2633]"
                colors={[
                  [125, 211, 252],
                  [118, 163, 255],
                ]}
                dotSize={2}
              />
              <div className="rounded-[24px] absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
            </div>
          </AnimatePresence>
          <div className="relative z-20 flex flex-col items-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors cursor-grab">
                Step 3
            </button>
            <h2 className="text-xl opacity-100 relative z-10 mt-4 font-bold text-white">
              Confirm payment method
            </h2>
            <img src="/phone3.webp" className="w-full h-full object-cover object-center relative top-3"/>
          </div>
        </div>
        <div className="border-[#242e3b] border rounded-[24px] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto pt-4 relative h-[480px] min-w-[350px] overflow-hidden">
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#1d2633]"
                colors={[
                  [125, 211, 252],
                  [118, 163, 255],
                ]}
                dotSize={2}
              />
              <div className="rounded-[24px] absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
            </div>
          </AnimatePresence>
          <div className="relative z-20 flex flex-col items-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors cursor-grab">
                Step 4
            </button>
            <h2 className="text-xl opacity-100 relative z-10 mt-4 font-bold text-white">
              Select amount of charges
            </h2>
            <img src="/phone4.webp" className="w-full h-full object-cover object-center relative top-3"/>
          </div>
        </div>
        <div className="border-[#242e3b] border rounded-[24px] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto pt-4 relative h-[480px] min-w-[350px] overflow-hidden">
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#1d2633]"
                colors={[
                  [125, 211, 252],
                  [118, 163, 255],
                ]}
                dotSize={2}
              />
              <div className="rounded-[24px] absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
            </div>
          </AnimatePresence>
          <div className="relative z-20 flex flex-col items-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors cursor-grab">
                Step 5
            </button>
            <h2 className="text-xl opacity-100 relative z-10 mt-4 font-bold text-white">
              Confirm transaction
            </h2>
            <img src="/phone5.webp" className="w-full h-full object-cover object-center relative top-3"/>
          </div>
        </div>
        <div className="border-[#242e3b] border rounded-[24px] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto pt-4 relative h-[480px] min-w-[350px] overflow-hidden">
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#1d2633]"
                colors={[
                  [125, 211, 252],
                  [118, 163, 255],
                ]}
                dotSize={2}
              />
              <div className="rounded-[24px] absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
            </div>
          </AnimatePresence>
          <div className="relative z-20 flex flex-col items-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors cursor-grab">
                Step 6
            </button>
            <h2 className="text-xl opacity-100 relative z-10 mt-4 font-bold text-white">
              Battery indicator will appear
            </h2>
            <img src="/phone6.webp" className="w-full h-full object-cover object-center relative top-3"/>
          </div>
        </div>
        <div className="border-[#242e3b] border rounded-[24px] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto pt-4 relative h-[480px] min-w-[350px] overflow-hidden">
          <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#1d2633]"
                colors={[
                  [125, 211, 252],
                  [118, 163, 255],
                ]}
                dotSize={2}
              />
              <div className="rounded-[24px] absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
            </div>
          </AnimatePresence>
          <div className="relative z-20 flex flex-col items-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors cursor-grab">
                Step 7
            </button>
            <h2 className="text-xl opacity-100 relative z-10 mt-4 font-bold text-white">
              Check out your charges! 🎉
            </h2>
            <img src="/phone7.webp" className="w-full h-full object-cover object-center relative top-3"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;