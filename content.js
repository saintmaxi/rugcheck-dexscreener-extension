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

            let showWidget = true;

            const rugcheckIframe = document.createElement('iframe');
            const widgetContainer = document.createElement('div');
            const widgetButtonContainer = document.createElement('div');
            const refreshButton = document.createElement('button')
	      		const closeButton = document.createElement('button');
            const birdeyeButton = document.createElement('button');
            const collapseButton = document.createElement('button')
            const titleSpan = document.createElement('span')

            titleSpan.textContent = 'RUGCHECK';
            titleSpan.style.paddingLeft = '.5em';
            titleSpan.style.paddingRight = '.5em';
            titleSpan.style.fontWeight = 'bold';

            refreshButton.textContent = 'Refresh 🔄';
            refreshButton.style.backgroundColor = 'black';
            refreshButton.style.border = 'solid 1px white';
            refreshButton.style.fontWeight = 'bold';
            refreshButton.style.padding = '.25rem';
            refreshButton.style.transition = 'all 100ms';

            collapseButton.textContent = 'Hide ⬇️';
            collapseButton.style.backgroundColor = 'black';
            collapseButton.style.border = 'solid 1px white';
            collapseButton.style.fontWeight = 'bold';
            collapseButton.style.padding = '.25rem';
            collapseButton.style.transition = 'all 100ms';
            
            birdeyeButton.textContent = 'Open in birdeye 🦅';
            birdeyeButton.style.backgroundColor = 'black';
            birdeyeButton.style.border = 'solid 1px white';
            birdeyeButton.style.fontWeight = 'bold';
            birdeyeButton.style.padding = '.25rem';
            birdeyeButton.style.transition = 'all 100ms';
            birdeyeButton.style.color = 'white';

            closeButton.textContent = 'Close ❌';
            closeButton.style.backgroundColor = 'black';
            closeButton.style.border = 'solid 1px white';
            closeButton.style.color = 'white'; // This line was missing to set the text color
            closeButton.style.fontWeight = 'bold';
            closeButton.style.padding = '.25rem';
            closeButton.style.transition = 'all 100ms'; 
			
			
            widgetButtonContainer.style.display = 'flex';
            widgetButtonContainer.style.gap = '1em';
            widgetButtonContainer.style.flexDirection = 'row';
            widgetButtonContainer.style.alignItems = 'center';
            widgetButtonContainer.style.minHeight = '5vh';

            rugcheckIframe.src = `https://rugcheck.xyz/tokens/${token}`;
            rugcheckIframe.style.width = '100%';
            rugcheckIframe.style.height = '100%';

            widgetContainer.id = "rugcheck-dexscreener-widget";
            widgetContainer.style.position = 'fixed';
            widgetContainer.style.width = '33vw';
            widgetContainer.style.height = '45vh';
            widgetContainer.style.backgroundColor = '#212529';
            widgetContainer.style.bottom = '0';
            widgetContainer.style.right = '0';
            widgetContainer.style.zIndex = '9999';
            widgetContainer.style.borderLeft = 'solid 2px white';
            widgetContainer.style.borderTop = 'solid 2px white';
            widgetContainer.style.transition = 'all 200ms';
            widgetContainer.style.borderTopLeftRadius = '1em';

            widgetButtonContainer.appendChild(titleSpan);
            widgetButtonContainer.appendChild(refreshButton);
            widgetButtonContainer.appendChild(collapseButton);
            widgetButtonContainer.appendChild(birdeyeButton);
            widgetButtonContainer.appendChild(closeButton);
            widgetContainer.appendChild(widgetButtonContainer)
            widgetContainer.appendChild(rugcheckIframe)

            refreshButton.addEventListener('mouseenter', () => {
              refreshButton.style.backgroundColor = "gray"
            });

            refreshButton.addEventListener('mouseleave', () => {
              refreshButton.style.backgroundColor = "black"
            });


            collapseButton.addEventListener('mouseenter', () => {
              collapseButton.style.backgroundColor = "gray"
            });

            collapseButton.addEventListener('mouseleave', () => {
              collapseButton.style.backgroundColor = "black"
            });
            closeButton.addEventListener('mouseenter', () => {
              closeButton.style.backgroundColor = "gray"
            }
            );
            closeButton.addEventListener('mouseleave', () => {
              closeButton.style.backgroundColor = "black"
            } 
            );

            closeButton.addEventListener('click', () => {
              widgetContainer.remove(); // This will remove the widgetContainer from the document
            });
           
            birdeyeButton.addEventListener('click', () => {
              window.open(`https://birdeye.so/token/${token}?chain=solana`, 'birdeyeWindow${token}', 'width=1920,height=1080,left=0,top=0');
            });

            collapseButton.addEventListener('click', () => {
              if (showWidget) {
                collapseButton.textContent = 'Show ⬆️';
                widgetContainer.style.height = "5vh";
                showWidget = false;
              } else {
                collapseButton.textContent = 'Hide ⬇️';
                widgetContainer.style.height = "45vh";
                showWidget = true;
              }
            });

            refreshButton.addEventListener('click', () => {
              rugcheckIframe.src = rugcheckIframe.src;
            });

            document.body.appendChild(widgetContainer);
          }
        }
      });
    }
  } else {
    if (document.getElementById("rugcheck-dexscreener-widget")) {
      document.getElementById("rugcheck-dexscreener-widget").remove();
    }
  }
};

window.addEventListener('load', () => {
  let url = window.location.href;
  addRugcheckLink();

  document.body.addEventListener('click', () => {
    requestAnimationFrame(() => {
      if (url !== window.location.href) {
        url = location.href;
        addRugcheckLink();
      }
    });
  }, true);
});

window.addEventListener('popstate', () => {
  addRugcheckLink();
})
