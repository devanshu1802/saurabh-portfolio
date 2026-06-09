import React, { useRef, useEffect } from 'react'

const Video = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <div className='h-full w-full'>
      <video
        ref={videoRef}
        className='h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/video.mp4"
      ></video>
    </div>
  )
}

export default Video
