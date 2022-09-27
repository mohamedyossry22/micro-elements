const concat = require("concat");
(async function buildNavbar() {
  const files = [
    "./dist/navbar/runtime.js",
    "./dist/navbar/polyfills.js",
    "./dist/navbar/main.js",
  ];
  await concat(files, "./dist/navbar/navbar.js");
})();

(async function buildStore() {
    const files = [
      "./dist/store/runtime.js",
      "./dist/store/polyfills.js",
      "./dist/store/main.js",
    ];
    await concat(files, "./dist/store/store.js");
  })();

  (async function buildAppspro() {
    const files = [
      "./dist/appspro/runtime.js",
      "./dist/appspro/polyfills.js",
      "./dist/appspro/main.js",
    ];
    await concat(files, "./dist/appspro/appspro.js");
  })();