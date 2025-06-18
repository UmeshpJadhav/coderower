import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Grid
} from '@mui/material';
import axios, { AxiosError } from 'axios';

interface ConfigurationData {
  success: boolean;
  data: string[][];
  message?: string;
}

const ViewConfiguration: React.FC = () => {
  const [configId, setConfigId] = useState('');
  const [data, setData] = useState<string[][]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<ConfigurationData>(
        `http://localhost:3000/api/configurations/${configId}`
      );
      setData(response.data.data);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || 'Failed to fetch configuration');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Fetch Configuration
      </Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Configuration ID"
                value={configId}
                onChange={(e) => setConfigId(e.target.value)}
                required
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                sx={{ height: '56px' }}
              >
                {loading ? <CircularProgress size={24} /> : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {data.length > 0 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Configuration Data:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {data.map((row, rowIndex) => (
              <Box key={rowIndex} sx={{ display: 'flex', gap: 1 }}>
                {row.map((cell, cellIndex) => (
                  <Paper
                    key={cellIndex}
                    sx={{
                      p: 1,
                      minWidth: 60,
                      textAlign: 'center',
                      bgcolor: 'grey.100',
                      flex: 1
                    }}
                  >
                    {cell}
                  </Paper>
                ))}
              </Box>
            ))}
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ViewConfiguration; 