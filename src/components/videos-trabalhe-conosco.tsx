"use client";

export const VideosTrabalheConosco = () => {
  return (
    <div className="absolute -top-10 -right-10 w-full max-w-[648px]">
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <video
            src="/videos/video12.mp4"
            className="hidden h-[300px] w-full rounded-lg border-8 border-white/20 object-cover lg:block"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <video
            src="/videos/video11.mp4"
            className="h-[300px] w-full rounded-lg border-8 border-white/20 object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>

          <video
            src="/videos/video13.mp4"
            className="h-[300px] w-full rounded-lg border-8 border-white/20 object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <video
            src="/videos/video14.mp4"
            className="h-[300px] w-full rounded-lg border-8 border-white/20 object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <video
            src="/videos/video15.mp4"
            className="h-[300px] w-full rounded-lg border-8 border-white/20 object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};
