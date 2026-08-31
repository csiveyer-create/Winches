# Winches & Wirecams — Cinematic Showcase Rebuild

This is a static, responsive browser prototype rebuilt from the current public content at https://www.winches.design/.

## What is included
- Cinematic full-screen hero and premium dark/steel visual system
- Stunt Reel and Wirecam Reel promoted near the top of the site
- Stunts, Wirecams, Services, Navigator, About and Contact content
- Existing stunt and wirecam credits
- Seven existing Behind-the-Scenes YouTube videos embedded directly
- Existing Wix image assets retained in the redesigned site, including an archive gallery
- Responsive mobile navigation
- Scroll-reveal motion and restrained parallax
- Reduced-motion accessibility support

## Important showreel note
The current Wix Stunt/Wirecam reel players do not expose their underlying video file / public player URL through the crawlable page markup. For this prototype, the two hero reel buttons launch the original live pages in a full-screen modal, with an “Open original page” fallback.

Once the direct reel video URLs or source video files are supplied, replace each `data-reel-url` in `index.html` with the direct video implementation you want (Vimeo, YouTube, self-hosted MP4/HLS, etc.). The design is already structured to make those reels the primary experience.

## Run locally
Open `index.html` directly in a browser, or serve this folder with any static web server.

For example:
python3 -m http.server 8080

Then visit:
http://localhost:8080

## Files
- `index.html` — site markup and content
- `styles.css` — full responsive cinematic design
- `script.js` — credits, videos, gallery, menu, modal and motion
