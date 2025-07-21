const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const streamifier = require('streamifier');


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = multer.memoryStorage(); // Store files in RAM as Buffer
const upload = multer({ storage });

const streamUpload = (buffer, folder = 'Listings') => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

module.exports = {
  cloudinary,
  upload,
  streamUpload,
};