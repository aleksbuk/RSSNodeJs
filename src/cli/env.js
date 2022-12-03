export const parseEnv = () => {
  const env = process.env;
  const keys = Object.keys(env);
  const array = [];
  keys.forEach((el) => {
    if (el.substring(0, 4) === 'RSS_') {
      let item = el + '=' + env[el];
      array.push(item.trim());
    }
  });
  console.log(array.join('; '));
};
parseEnv();