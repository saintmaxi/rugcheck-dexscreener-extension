function addRugcheckLink() {
  if (window.location.href.startsWith('https://dexscreener.com/solana/') && window.location.href !== 'https://dexscreener.com/solana/' && window.location.href !== 'https://dexscreener.com/solana') {
    const anchorElements = document.querySelectorAll('a[href^="https://solscan.io/token/"]');
    if (anchorElements.length > 0) {
      anchorElements.forEach((anchorElement) => {
        const url = anchorElement.getAttribute('href');
        const tokenIndex = url.lastIndexOf('/');

        if (tokenIndex !== -1) {
          const token = url.substring(tokenIndex + 1);
          if (token !== 'So11111111111111111111111111111111111111112') {
            const newAnchor = document.createElement('a');
            newAnchor.textContent = "RugCheck ↗️";
            newAnchor.id = "rugcheck-dexscreener-link";
            newAnchor.href = `https://rugcheck.xyz/tokens/${token}`;
            newAnchor.target = '_blank';
            newAnchor.style.position = 'fixed';
            newAnchor.style.padding = '0.25em';
            newAnchor.style.bottom = '0';
            newAnchor.style.right = '0';
            newAnchor.style.zIndex = '9999';
            newAnchor.style.backgroundColor = 'white';
            newAnchor.style.fontSize = '1.25em';
            newAnchor.style.color = 'black';
            newAnchor.style.fontWeight = 'bold';
            newAnchor.style.border = 'solid 4px black';
            newAnchor.style.transition = 'all 200ms';
            newAnchor.style.borderTopLeftRadius = '1em';

            newAnchor.addEventListener('mouseenter', () => {
              newAnchor.style.backgroundColor = 'lightgray';
            });

            newAnchor.addEventListener('mouseleave', () => {
              newAnchor.style.backgroundColor = 'white';
            });

            document.body.appendChild(newAnchor);
          }
        }
      });
    }
  } else {
    if (document.getElementById("rugcheck-dexscreener-link")) {
      document.getElementById("rugcheck-dexscreener-link").remove();
    }
  }
};

window.addEventListener('load', () => {
  let url = window.location.href;
  addRugcheckLink();


  document.body.addEventListener('click', () => {
    requestAnimationFrame(() => {
      if (url !== window.location.href) {
        url = location.href
        addRugcheckLink();

      }
    });
  }, true);
});

window.addEventListener('popstate', () => {
  addRugcheckLink();
})