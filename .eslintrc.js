module.exports = {
  extends: "airbnb",
  rules: {
    'max-len': [2, { code: 200, tabWidth: 2 }],
    'quote-props': [2, 'consistent-as-needed'],
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'import/default': 0,
    'no-confusing-arrow': 0,
    "import/no-named-as-default-member": 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'react/jsx-filename-extension': ['error', { extensions: [".js", ".jsx"] }]
  }
};