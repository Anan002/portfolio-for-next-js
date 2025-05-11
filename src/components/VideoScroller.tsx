"use client";

import React, { useRef } from "react";

const videoIds = ["BIhRJbaPA6U"]; // Replace with your video IDs

export function VideoScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 300; // Adjust this if you want more/less scroll per click
      container.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        marginLeft: "-1rem",
        padding: "1rem 0",
        overflowX: "auto", // Enables horizontal scrolling
        scrollBehavior: "smooth",
        display: "flex",
        gap: "1rem", // Space between videos
        scrollbarWidth: "thin", // Customizes the scrollbar width for modern browsers
        scrollbarColor: "#888 #000", // Dark background for the scrollbar to fit your theme
      }}
      ref={scrollRef}
    >
      {videoIds.map((videoId) => (
        <div
          key={videoId}
          style={{
            minWidth: "280px",
            height: "160px",
            flexShrink: 0,
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      ))}
    </div>
  );
}
