import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import banner2 from '../../img/bnner2.jpeg';
import banner3 from '../../img/bnner3.jpeg';
import productPoster from '../../img/productimg1.jpeg';
import heroVideo from '../../img/VideoSection-video.mp4';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    className: 'story-hero-card-left',
    image: banner2,
    title: 'A sun-kissed woody trail',
    eyebrow: 'Avenlora Signature'
  },
  {
    className: 'story-hero-card-center',
    poster: productPoster,
    video: heroVideo,
    title: 'Avenlora, crafted beyond reason',
    eyebrow: 'New Fragrance Story',
    isCenter: true
  },
  {
    className: 'story-hero-card-right',
    image: banner3,
    title: 'A bittersweet amber fragrance',
    eyebrow: 'Premium Perfume'
  }
];

function StoryHeroMedia({ card, decorative = false }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!card.video) {
    return <img src={card.image} alt={decorative ? '' : card.title} className="story-hero-card-image" />;
  }

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="story-hero-card-image story-hero-card-video"
        src={card.video}
        poster={card.poster}
        autoPlay
        muted
        loop
        playsInline
        aria-label={decorative ? undefined : card.title}
      />
      <button
        type="button"
        className="story-hero-video-play"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
        onClick={togglePlayback}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </>
  );
}

export default function StoryHero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(max-width: 768px)', () => {
        gsap.set('.story-hero-cinematic,.story-hero-card,.story-hero-card-image,.story-hero-center-copy', {
          clearProps: 'all'
        });
        gsap.from('.story-hero-card', {
          scrollTrigger: {
            trigger: hero,
            start: 'top 72%'
          },
          autoAlpha: 0,
          y: 28,
          stagger: 0.12,
          duration: 0.72,
          ease: 'power2.out'
        });
      });

      return () => mm.revert();
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section className="story-hero" ref={heroRef}>
      <div className="story-hero-stage">
        <div className="story-hero-grid" aria-hidden="false">
          {cards.map((card) => (
            <article className={`story-hero-card ${card.className}${card.isCenter ? ' story-hero-center-card' : ''}`} key={card.className}>
              <StoryHeroMedia card={card} />
              <div className="story-hero-card-shade" />
              <div className={card.isCenter ? 'story-hero-center-copy' : 'story-hero-card-caption'}>
                <div className="story-hero-eyebrow">{card.eyebrow}</div>
                {card.isCenter ? <h2 className="story-hero-title">{card.title}</h2> : <h3>{card.title}</h3>}
                <Link to="/shop" className="story-hero-cta">Discover</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
