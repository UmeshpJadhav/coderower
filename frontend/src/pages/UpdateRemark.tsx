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

interface UpdateResponse {
  success: boolean;
  message: string;
}

const UpdateRemark: React.FC = () => {
  const [configId, setConfigId] = useState('');
  const [remark, setRemark] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await axios.put<UpdateResponse>(
        `http://localhost:3000/api/configurations/${configId}`,
        { remark }
      );
      setStatus({
        type: 'success',
        message: 'Remark updated successfully!'
      });
      setConfigId('');
      setRemark('');
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to update remark'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Update Remark
      </Typography>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Configuration ID"
                value={configId}
                onChange={(e) => setConfigId(e.target.value)}
                required
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                required
                multiline
                rows={4}
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                sx={{ height: '56px' }}
              >
                {loading ? <CircularProgress size={24} /> : 'Update Remark'}
              </Button>
            </Grid>
          </Grid>
        </form>

        {status.type && (
          <Alert severity={status.type} sx={{ mt: 2 }}>
            {status.message}
          </Alert>
        )}
      </Paper>
    </Box>
  );
};

export default UpdateRemark; 