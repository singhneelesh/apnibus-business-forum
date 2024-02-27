// Load translations from JSON file
const translations = fetch("index-translation.json")
  .then((response) => response.json())
  .catch((error) => console.error("Error loading translations:", error));

// Function to change language
async function changeLanguage(languageCode) {
  try {
    const translationData = await translations;
    const languageData = translationData[languageCode];

    //Update the lang toggle key
    document.getElementById("language-switch").checked = languageCode == 'hi' ? true : false;

    // Update text content based on language data
    var keys = Object.keys(languageData);

    for (let i = 0; i < keys.length; i++) {
      if (document.getElementById(keys[i]) == null) {
        return;
      }
      document.getElementById(keys[i]).textContent = languageData[keys[i]];
    }
  } catch (error) {
    console.error("Error changing language:", error);
  }
}

// Set the default language here
changeLanguage(localStorage.getItem("languageSelected") ?? "en");

// Event listener for the translate button
document
  .getElementById("language-switch")
  .addEventListener("change", function () {

    // Save to Local Storage
    localStorage.setItem("languageSelected", document.getElementById("language-switch").checked ? "hi" : "en");

    // Change language
    changeLanguage(
      document.getElementById("language-switch").checked ? "hi" : "en"
    );
  });
