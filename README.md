# Winches & Wirecams — Multi-page Interactive v3

Upload ALL files in this folder to the ROOT of the same GitHub repository.

## Pages
- index.html — Home
- work.html — interactive selected work, project quick views, comparison slider, credit timeline
- stunts.html — Stunts + fullscreen reel viewer
- wirecams.html — Wirecams + fullscreen reel viewer
- navigator.html
- services.html
- behind-the-scenes.html
- about.html
- contact.html

## New interactive features
1. Production / behind-the-scenes comparison slider
3. Fullscreen cinematic reel interface
4. Reel chapter / related-production selector
5. Interactive Stunts/Wirecams credits timeline with year range
6. Project quick-view cinematic modals
7. Cinematic page transitions
10. Fullscreen image lightbox
11. Persistent Start a Project drawer
12. Muted motion footage backgrounds with static fallback
13. Context-aware cinematic desktop cursor

## Showreel source note
The current public Wix Stunt and Wirecam pages expose the reel page but not the underlying raw master video URL. The fullscreen reel UI is therefore built and operational with related video chapters, while the original reel remains linked as a fallback. When direct MP4/Vimeo/YouTube reel sources are supplied, they can be dropped into the existing reel player without redesigning the site.

## GitHub Pages
Settings → Pages → Deploy from a branch → main → /(root)

No npm, build step, framework, or server required.


## V4 homepage hero update
The homepage no longer uses a YouTube background.

It now expects the original homepage showreel/video at:

`assets/home-hero.mp4`

Until that file is added, the original homepage still image remains visible automatically.

Upload the whole folder contents to the root of GitHub Pages exactly as before, including the `assets` folder.
