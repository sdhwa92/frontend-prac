const autocompleteInput = document.getElementById("autocomplete-input");
const autocompleteSuggestionsContainer = document.getElementById(
  "autocomplete-suggestions-container"
);
const autocompleteSuggestions = document.getElementById(
  "autocomplete-suggestions"
);

const SOCCER_CLUBS = [
  "FC Barcelona",
  "Real Madrid",
  "Manchester United",
  "Chelsea",
  "Bayern Munich",
  "Paris Saint-Germain",
  "Juventus",
  "Inter Milan",
  "AC Milan",
  "Arsenal",
  "Liverpool",
  "Manchester City",
  "Tottenham Hotspur",
  "Atletico Madrid",
  "Borussia Dortmund",
  "Ajax",
  "Benfica",
  "Porto",
  "Olympique Lyonnais",
  "Olympique de Marseille",
  "AS Roma",
  "Napoli",
  "Sevilla FC",
  "Valencia CF",
  "Real Sociedad",
  "Villarreal CF",
  "Leicester City",
  "Everton",
  "West Ham United",
  "Atalanta",
  "Lazio",
];

function filterSuggestions(query) {
  return SOCCER_CLUBS.filter((club) =>
    club.toLowerCase().includes(query.toLowerCase())
  );
}

function replaceInputTextWithSelectedValue(value) {
  autocompleteInput.value = value;
  autocompleteSuggestionsContainer.style.display = "none";
}

autocompleteInput.addEventListener("input", function () {
  const query = autocompleteInput.value;
  autocompleteSuggestionsContainer.style.display = "none";
  autocompleteSuggestions.innerHTML = ""; // Clear previous suggestions
  if (query.length > 0) {
    autocompleteSuggestionsContainer.style.display = "block";
    const results = filterSuggestions(query);

    results.forEach((result) => {
      const divElement = document.createElement("div");
      divElement.className = "result-item";

      // hightlight matched chars
      const regex = new RegExp(`(${query})`, "gi");
      divElement.innerHTML = result.replace(
        regex,
        '<span class="highlight">$1</span>'
      );

      divElement.addEventListener("click", function () {
        replaceInputTextWithSelectedValue(result);
      });
      autocompleteSuggestions.appendChild(divElement);
    });
  }
});
