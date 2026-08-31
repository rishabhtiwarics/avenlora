import React from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';
import videoSectionVideo from '../../img/VideoSection-video.mp4';

export default function VideoSection() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const togglePlay = () => { const video = ref.current; if (!video) return; video.paused ? video.play() : video.pause(); setPlaying(video.paused === false); };
  const toggleMute = () => { const video = ref.current; if (!video) return; video.muted = !video.muted; setMuted(video.muted); };
  return <section className="video-section"><video ref={ref} src={videoSectionVideo} autoPlay loop muted playsInline /><div className="video-controls"><button className="icon-btn" onClick={togglePlay}>{playing ? <Pause /> : <Play />}</button><button className="icon-btn" onClick={toggleMute}>{muted ? <VolumeX /> : <Volume2 />}</button></div></section>;
}
