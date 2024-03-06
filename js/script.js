"use strict";
// SELECTIONS...
const inp = document.querySelector("input");
const generateBtn = document.querySelector(".generate-btn");
const qrCodeContainer = document.querySelector(".qr-code-container");

// FUNCTIONS...
// Fetching data using async await
const fetcher = async function (query) {
  try {
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${query}`
    );
    qrCodeContainer.querySelector("img").src = response.url;
  } catch (error) {
    console.error(`Error:${error.message}`);
  }
};

// EVENT HANDLERS...
generateBtn.addEventListener("click", function () {
  // Using Guard Clause
  if (!inp.value) return;
  // sending the query
  fetcher(inp.value);
});
// @js-challenges
