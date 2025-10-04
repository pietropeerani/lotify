import { useEffect, useRef, useState } from "react";
import type { PlayerPros } from "../types/player";

export default function Player({ externalUrl }: PlayerPros) {
  const playerRef = useRef<YT.Player | null>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100); // Default volume

  const extractVideoId = (url: string): string | null => {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const destroyPlayer = () => {
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
    setIsPlayerReady(false);
    setIsPlaying(false);
  };

  const createPlayer = (videoId: string) => {
    destroyPlayer();
    playerRef.current = new window.YT.Player("yt-player", {
      height: "0",
      width: "0",
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
      },
      events: {
        onReady: (event) => {
          setIsPlayerReady(true);
          event.target.setVolume(volume);
          event.target.playVideo();
          setIsPlaying(true);
        },
        onError: (event) => {
          console.error("YT Player error:", event.data);
          destroyPlayer();
        },
      },
    });
  };

  useEffect(() => {
    const videoId = extractVideoId(externalUrl);

    if (!videoId) {
      destroyPlayer();
      return;
    }

    const loadYTApi = () => {
      if (window.YT && window.YT.Player) {
        createPlayer(videoId);
      } else {
        window._ytApiCallbacks = window._ytApiCallbacks || [];
        window._ytApiCallbacks.push(() => createPlayer(videoId));

        if (!document.getElementById("youtube-iframe-api")) {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          tag.id = "youtube-iframe-api";
          document.body.appendChild(tag);
        }

        window.onYouTubeIframeAPIReady = () => {
          (window._ytApiCallbacks || []).forEach((cb) => cb());
          window._ytApiCallbacks = [];
        };
      }
    };

    loadYTApi();

    return () => {
      destroyPlayer();
    };
  }, [externalUrl]);

  // Play/pause toggle
  const handlePlayPause = () => {
    if (!isPlayerReady || !playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  // Volume change handler
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (isPlayerReady && playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };

  const videoId = extractVideoId(externalUrl);

  if (!videoId) {
    return <div>URL non valido o non supportato per il player audio.</div>;
  }

  return (
    <>
      {/* Invisible YouTube player */}
      <div
        id="yt-player"
        style={{
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: "none",
          position: "absolute",
        }}
      />

      {/* Fixed bottom player UI */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#111",
          color: "#fff",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1000,
        }}
      >
        <button
          onClick={handlePlayPause}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isPlaying ? "⏸️ Pausa" : "▶️ Riproduci"}
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            style={{ width: "150px" }}
          />
        </div>
      </div>
    </>
  );
}
