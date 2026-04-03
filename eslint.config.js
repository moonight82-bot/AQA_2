{
  "name": "aqa_2",
  "version": "1.0.0",
  "type": "module",

  "scripts": {
    "lint": "eslint .",
    "format": "prettier . --write"
  },

  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "eslint": "^10.0.3",
    "globals": "^17.4.0",
    "husky": "^9.1.7",
    "lint-staged": "^16.4.0",
    "prettier": "^3.8.1"
  },

  "lint-staged": {
    "**/*.js": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}