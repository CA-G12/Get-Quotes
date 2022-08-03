// ? Creating the fetch function to use in the index.html.

const fetch = (url, cb) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      cb(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };

  xhr.open("GET", url);
  xhr.send();
};
