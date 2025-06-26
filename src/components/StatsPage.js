import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function StatsPage() {
  // This would come from your state management or API
  const statsData = [
    {
      shortUrl: 'http://localhost:2000/abc123',
      originalUrl: 'https://example.com/long-url',
      createdAt: '2025-06-26T10:30:00Z',
      expiresAt: '2025-06-26T11:00:00Z',
      clicks: 5,
      clickDetails: [
        { timestamp: '2025-06-26T10:35:00Z', source: 'direct', location: 'US' },
        { timestamp: '2025-06-26T10:40:00Z', source: 'social', location: 'UK' }
      ]
    }
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>URL Statistics</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Short URL</TableCell>
              <TableCell>Original URL</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Expires</TableCell>
              <TableCell>Clicks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.shortUrl}</TableCell>
                <TableCell>{row.originalUrl}</TableCell>
                <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
                <TableCell>{new Date(row.expiresAt).toLocaleString()}</TableCell>
                <TableCell>{row.clicks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}