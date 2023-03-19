import { Box } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 144px)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      Not found page
    </Box>
  );
};

export default NotFoundPage;
