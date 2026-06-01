const multer = require("multer");

/*
  Storage Config
*/

const storage =
  multer.diskStorage({
    destination: (
      req,
      file,
      cb
    ) => {
      cb(null, "uploads/");
    },

    filename: (
      req,
      file,
      cb
    ) => {
      cb(
        null,
        Date.now() +
          "-" +
          file.originalname
      );
    },
  });

/*
  Upload Middleware
*/

const upload = multer({
  storage,
});

module.exports = upload;