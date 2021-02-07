window.onload = () => {
  const search = window.location.search;
  if (search) {
    const keyValueStrAry = search.slice(1).split('&');
    for (const keyValueStr of keyValueStrAry) {
      const keyValue = keyValueStr.split('=');
      if (keyValue.length === 2 && keyValue[0] === 'style') {
        try {
          const style = JSON.parse(keyValue[1]);
          document.body.style = style;
        } catch (error) { }
        break;
      }
    }
  }

  const index = Math.ceil(Math.random() * 10);
  document.getElementById('img').src = `./image/${index}.jpg`;
};

const imgOnload = () => {
  const data = { id: 'about', height: document.body.clientHeight };
  parent.postMessage(data);
};
