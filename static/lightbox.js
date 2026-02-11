/**
 * Lightweight lightbox for image galleries.
 * Attach by adding `data-lightbox="<full-size-url>"` to gallery items.
 * Supports: click-outside-to-close, close button, prev/next arrows,
 * left/right arrow keys, and Escape to close.
 */
(function () {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const img = lightbox.querySelector(".lightbox-content img");
  const counter = lightbox.querySelector(".lightbox-counter");
  const items = Array.from(document.querySelectorAll("[data-lightbox]"));
  let current = 0;

  function show(index) {
    current = (index + items.length) % items.length;
    img.src = items[current].dataset.lightbox;
    img.alt = items[current].querySelector("img")?.alt || "";
    counter.textContent = (current + 1) + " / " + items.length;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hide() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    img.src = "";
  }

  items.forEach(function (item, i) {
    item.addEventListener("click", function () {
      show(i);
    });
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", hide);
  lightbox.querySelector(".lightbox-backdrop").addEventListener("click", hide);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", function () {
    show(current - 1);
  });
  lightbox.querySelector(".lightbox-next").addEventListener("click", function () {
    show(current + 1);
  });

  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "Escape") hide();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();
