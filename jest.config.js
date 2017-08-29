module.exports = {
  "transformIgnorePatterns": [
      "<rootDir>/dist/", "<rootDir>/node_modules/"
    ],

  "automock": false,

  "moduleNameMapper": {
    "\\.scss$": "<rootDir>/jestignore.js"
  }
}
