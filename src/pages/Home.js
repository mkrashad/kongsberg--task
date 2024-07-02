import React, { useState, useEffect } from 'react';
import { TableComponent } from '../components/TableComponent';
import { Container, Typography, CircularProgress } from '@mui/material';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=subject:horror'
    );
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: '40px' }}>
      <Typography variant='h4' gutterBottom>
        Book List
      </Typography>
      <TableComponent data={data} />
    </Container>
  );
};

export default Home;
