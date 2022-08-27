// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     tailwindcss: {

//     }

//   },
// }

// just for testing
// module.exports = {
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer")
//   ]
// }

// module.exports = {
//   plugins: [
//     "postcss-flex-bugs-fixes",
//     [
//       "postcss-preset-env",
//       {
//         autoprefixer: {
//           flexbox: "no-2009",
//         },
//         stage: 0,
//         features: {
//           "custom-properties": false,
//           "nesting-rules": true,
//         },
//       },
//     ],
//   ],
// };
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  }
}