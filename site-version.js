const SITE_VERSION = "2026-08-04-3";

function addVersionToInternalLinks() {
  const links = document.querySelectorAll("a[data-versioned-link='true']");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
      return;
    }

    const separator = href.includes("?") ? "&" : "?";
    link.setAttribute("href", `${href}${separator}v=${encodeURIComponent(SITE_VERSION)}`);
  });
}

function setReleaseText() {
  const nodes = document.querySelectorAll(".release-version");
  nodes.forEach((node) => {
    node.textContent = `Release ${SITE_VERSION}.`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addVersionToInternalLinks();
  setReleaseText();
});
