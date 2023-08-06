module.exports = {
  devServer: {
    proxy: {
      '/data': {
        target: 'http://localhost:8080', // Replace with your server's URL
        changeOrigin: true,
      },
    },
  },
};
