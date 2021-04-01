window.onload = () => {
  const search = decodeURIComponent(window.location.search);

  if (search) {
    const keyValueStrAry = search.slice(1).split('&');
    for (const keyValueStr of keyValueStrAry) {
      const keyValue = keyValueStr.split('=');
      if (keyValue.length === 2) {
        switch (keyValue[0]) {
          case 'color':
            document.body.style.color = keyValue[1];
            break;
          case 'fontSize':
            document.body.style.fontSize = keyValue[1];
            break;
          case 'textAlign':
            document.body.style.textAlign = keyValue[1];
            break;
        }
      }
    }
  }

  const index = Math.ceil(Math.random() * 10);
  document.getElementById('img').src = `./image/${index}.jpg`;

  window.addEventListener('resize', () => {
    notify();
  });
};

const imgOnload = () => {
  notify();
};

const notify = () => {
  const data = { id: 'about', height: document.body.clientHeight };
  parent.postMessage(data, '*');
}
