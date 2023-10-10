// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: ["nativewind/babel"],
//     plugins: ['react-native-reanimated/plugin'],
   
//   };
// };

export default function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
    plugins: ['react-native-reanimated/plugin'],
   
  };
};