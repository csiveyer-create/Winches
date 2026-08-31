# Winches & Wirecams — Cinematic Showcase v2

This is the repaired browser prototype.

## The issue fixed
The first build attempted to load the existing Wix reel pages inside an iframe. Wix prevents that, so the reel experience could fail.

## How v2 works
- Open `index.html` directly in Chrome, Safari or Edge.
- No build step, npm install, Xcode, terminal command or server is required.
- Stunt Reel and Wirecam Reel now open the original live Wix reel pages directly in a new tab.
- Behind-the-scenes films use direct YouTube embeds.
- Original website imagery is referenced from the existing Wix media library.
- If the machine is offline or Wix blocks an image request, the site shows a small warning instead of breaking.
- Existing navigation, credits, Navigator content, services, about details and contact details remain in the cinematic rebuild.

## Main showreels
The current public Wix pages do not expose the underlying reel media URL in their crawlable markup. To put the showreels directly inside this redesigned website, supply either:
1. the two original reel video files, or
2. direct YouTube/Vimeo/Wix video player URLs.

Then they can become native full-screen cinematic players and even supply moving hero backgrounds.
