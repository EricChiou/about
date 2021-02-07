window.onload = () => {
  const search = window.location.search;
  document.body.style.color = '#eeeeee';
  document.body.style.fontSize = '18px';
  document.body.style.textAlign = 'center';

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
};

const imgOnload = () => {
  const data = { id: 'about', height: document.body.clientHeight };
  parent.postMessage(data, '*');
};
