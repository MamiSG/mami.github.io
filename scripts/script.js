


gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);


gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");
  section.bg.style.backgroundImage = `url(assets/wallpaper-${i+1}.jpg)`;
  gsap.fromTo(
    section.bg,
    {
      backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
    }, 
    {
      backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => i ? "top bottom" : "top top", 
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

document.querySelectorAll('a').forEach(link => {
    if (link.hostname === window.location.hostname) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.href;
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = href;
            }, 500); 
        });
    }
});
