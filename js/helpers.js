/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
const el = (element) => document.querySelector(element);

/**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
const els = (elements) => document.querySelectorAll(elements);

var path = window.location.pathname;
var page = path.split("/").pop();

const setStorage = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      data: value,
    })
  );
};

const getStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data && !undefined) return JSON.parse(data).data;

  return [];
};

const app = el("#app");

const renderHtml = (htmlString) => {
  app.innerHTML += htmlString;
};

let stopFromSubmitRefresh = (formId) => {
  formId.addEventListener("submit", (e) => {
      e.preventDefault();
    });
}

let toggleModalEvent = (modelId ,model) => {
  console.log(modelId,model)
  modelId .addEventListener("click", () => {
  model.toggle();
        });

        
} 

var user = [];

user = getStorage("user");