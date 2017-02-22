module.exports = {
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    }
  },
  "extends": ["standard", "standard-react"],
  "plugins": [
      "standard",
      "promise"
  ]
};
