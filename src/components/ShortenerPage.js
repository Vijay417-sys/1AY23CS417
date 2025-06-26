import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { log } from "../logging";

export default function ShortenerPage() {
  const [urls, setUrls] = useState(
    Array(5).fill({ longUrl: "", validity: "", shortCode: "" })
  );
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleUrlChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index] = { ...newUrls[index], [field]: value };
    setUrls(newUrls);
  };

  const handleSubmit = async (index) => {
    try {
      log("frontend", "info", "page", "Attempting to shorten URL");
      // API call to shorten URL would go here
      const newShortUrl = {
        original: urls[index].longUrl,
        short: `http://localhost:2000/${
          urls[index].shortCode || Math.random().toString(36).substring(2, 8)
        }`,
        expiry: new Date(
          Date.now() + (urls[index].validity || 30) * 60000
        ).toISOString(),
      };
      setShortenedUrls([...shortenedUrls, newShortUrl]);
    } catch (error) {
      log("frontend", "error", "page", "URL shortening failed");
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      {urls.map((url, index) => (
        <Paper key={index} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">URL #{index + 1}</Typography>
          <TextField
            label="Long URL"
            fullWidth
            margin="normal"
            value={url.longUrl}
            onChange={(e) => handleUrlChange(index, "longUrl", e.target.value)}
          />
          <TextField
            label="Validity (minutes)"
            type="number"
            margin="normal"
            value={url.validity}
            onChange={(e) => handleUrlChange(index, "validity", e.target.value)}
          />
          <TextField
            label="Custom Shortcode (optional)"
            margin="normal"
            value={url.shortCode}
            onChange={(e) =>
              handleUrlChange(index, "shortCode", e.target.value)
            }
          />
          <Button
            variant="contained"
            onClick={() => handleSubmit(index)}
            disabled={!url.longUrl}
          >
            Shorten URL
          </Button>
        </Paper>
      ))}

      {shortenedUrls.length > 0 && (
        <Paper sx={{ padding: 2, marginTop: 4 }}>
          <Typography variant="h5">Shortened URLs</Typography>
          {shortenedUrls.map((url, i) => (
            <Box key={i} sx={{ marginTop: 2 }}>
              <Typography>Original: {url.original}</Typography>
              <Typography>
                Short: <a href={url.short}>{url.short}</a>
              </Typography>
              <Typography>
                Expires: {new Date(url.expiry).toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
}
