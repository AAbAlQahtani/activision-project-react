import React from 'react'

export default function GamesVideo() {
    return (
        <section className="w-full pt-12 bg-black overflow-hidden">
            <video
                className="w-full h-full object-cover"
                src="https://www.activision.com/cdn/videos/game-ap-look.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
        </section>
    )
}
