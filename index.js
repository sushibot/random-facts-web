const factElement = document.querySelector("#fact");
const urlElement = document.querySelector("#url");
const randomFactButton = document.querySelector("#random");
const todaysRandomFactButton = document.querySelector("#today");

const URL = "https://uselessfacts.jsph.pl/api/v2/facts/";

const fetchRandomFact = async () => {
  try {
    const response = await fetch(`${URL}random`);
    const data = await response.json();
    factElement.textContent = data.text;
    urlElement.textContent = "source";
    urlElement.href = data.source_url;
  } catch (e) {
    console.log(e);
  }
};

const fetchTodaysRandomFact = async () => {
  try {
    const response = await fetch(`${URL}today`);
    const data = await response.json();
    factElement.textContent = data.text;
    urlElement.textContent = "source";
    urlElement.href = data.source_url;
  } catch (e) {
    console.log(e);
  }
};

randomFactButton.addEventListener("click", fetchRandomFact);
todaysRandomFactButton.addEventListener("click", fetchTodaysRandomFact);
