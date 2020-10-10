function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('../img', true, /\.(jpg|png|svg)$/));

importAll(require.context('../scss', true, /\.(css|scss)$/));

importAll(require.context('./', true, /\.(js)$/));

importAll(require.context('../static', true, /\.(svg|png|ico|xml|json)$/));
