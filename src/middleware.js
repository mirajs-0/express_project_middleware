import sharp from "sharp";
import path from "path";

const createThumbnail = async (req, res, next) => {
  // If no file was uploaded, skip this middleware
  if (!req.file) {
    next();
    return;
  }

  try {
    console.log("Original file path:", req.file.path);

    // Create thumbnail filename: add '_thumb' before extension
    // Example: abc123def.jpg → abc123def_thumb.png
    const filename = req.file.filename;
    const thumbFilename = filename + "_thumb.png";
    const thumbPath = path.join("uploads", thumbFilename);

    // Create 160x160 PNG thumbnail
    await sharp(req.file.path)
      .resize(160, 160, {
        fit: "cover", // Crops to fill the 160x160 area
        position: "center",
      })
      .png()
      .toFile(thumbPath);

    console.log("Thumbnail created:", thumbPath);

    // Continue to next middleware/controller
    next();
  } catch (error) {
    console.error("Error creating thumbnail:", error);
    next(error); // Pass error to Express error handler
  }
};

export { createThumbnail };
