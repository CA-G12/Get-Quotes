// ? Getting HTML elements.
const dropDownMenu = document.getElementById("type");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search");
// ? Create handle dom function.
const handleDOM = (data, quoteKey, authorKey, quotesSection) => {
  // ? Getting the section of all quotes.
  const allQuotesSection = document.querySelector(quotesSection);
  // ? While the section has child elements, remove them before adding.
  while (allQuotesSection.firstElementChild) {
    allQuotesSection.firstChild.remove();
  }
  // ? Looping over the array of objects and create the quotes sections.
  data.forEach((element) => {
    const quoteSection = document.createElement("section");
    quoteSection.className = "quote";
    const qoutePar = document.createElement("p");
    qoutePar.className = "quote__text";
    qoutePar.textContent = element[quoteKey];
    const authorPar = document.createElement("h2");
    authorPar.textContent = element[authorKey];
    authorPar.className = "quote__author";
    quoteSection.appendChild(qoutePar);
    quoteSection.appendChild(authorPar);
    allQuotesSection.appendChild(quoteSection);
  });
};

// ? Creating the function which is responsible for fetching the anime API with random endpoint.
function animeFetchAll() {
  const url = "https://animechan.vercel.app/api/quotes";

  fetch(url, function (data) {
    handleDOM(
      truncate(data, 10),
      "quote",
      "character",
      ".container__section-two"
    );
  });
}

// ? Creating the function which is responsible for fetching the go quotes API with random endpoint.
function byTagFetchAll() {
  const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=10";

  fetch(url, function (data) {
    handleDOM(
      truncate(data.quotes, 10),
      "text",
      "author",
      ".container__section-two"
    );
  });
}

// ? Calling the function as long as the tag value is the default.
byTagFetchAll();

// ? Adding event listener to listen to select element value change and call the functions depending on the value.
dropDownMenu.addEventListener("change", function () {
  if (dropDownMenu.value === "anime") {
    animeFetchAll();
  } else {
    byTagFetchAll();
  }
});

searchBtn.addEventListener("click", () => {
  if (dropDownMenu.value === "tags") {
    if (searchInput != "")
      fetch(
        `https://goquotes-api.herokuapp.com/api/v1/all?type=tag&val=${searchInput.value}`,
        (data) => {
          handleDOM(
            truncate(data.quotes, 10),
            "text",
            "author",
            ".container__section-two"
          );
        }
      );
  } else {
    fetch(
      `https://animechan.vercel.app/api/quotes/character?name=${searchInput.value}`,
      (data) => {
        handleDOM(
          truncate(data),
          "quote",
          "character",
          ".container__section-two"
        );
      }
    );
  }
});
