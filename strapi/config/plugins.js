module.exports = ({ env }) => ({
  upload: {
    config: {
      // This line definitively disables automatic rotation
      autoOrientation: false,
      providerOptions: {
        // Your Cloudinary options (if you have them) go here
      },
    },
  },
});
