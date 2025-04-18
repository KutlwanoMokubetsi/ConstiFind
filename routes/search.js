const express = require("express");
const router = express.Router();
const Metadata = require("../models/Metadata"); // adjust path if needed

// Simple text + tag search
router.get("/", async (req, res) => {
  try {
    const { q, tags } = req.query;

    const query = {};

    if (q) {
      query.$or = [
        { fileName: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { uploadedBy: { $regex: q, $options: "i" } },
      ];
    }

    if (tags) {
      const tagArray = tags.split(",").map(tag => tag.trim());
      query.tags = { $in: tagArray };
    }

    const results = await Metadata.find(query).sort({ uploadedAt: -1 }).limit(50);
    res.json(results);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
