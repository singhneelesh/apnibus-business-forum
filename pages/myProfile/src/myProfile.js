// Load translations from JSON file
const translations = fetch("myProfileTranslations.json")
  .then((response) => response.json())
  .catch((error) => console.error("Error loading translations:", error));

// Function to change language
async function changeLanguage(languageCode) {
  try {
    const translationData = await translations;
    const languageData = translationData[languageCode];

    // Update text content based on language data
    var keys = Object.keys(languageData);

    for (let i = 0; i < keys.length; i++) {
      if (document.getElementById(keys[i]) != null) {
        document.getElementById(keys[i]).textContent = languageData[keys[i]];
      }
    }

    // Setting the visibilty of loader gone
    document.getElementById("overlay").style.visibility = "hidden";

  } catch (error) {
    console.error("Error changing language:", error);
  }
}

// Set the default language here
changeLanguage(localStorage.getItem("languageSelected") ?? "en");

// Back Button to navigate to home page directly
document.getElementById("backButton").addEventListener("click", function() {
   window.location.href = '../../../';
});