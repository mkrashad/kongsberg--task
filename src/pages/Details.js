import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDetails = async (id) => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    const data = await res.json();
    setDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails(id);
  }, [id]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container
      style={{ marginTop: '40px', padding: '20px', border: '1px solid #ccc' }}
    >
      <Breadcrumb />
      <Typography variant='h5' gutterBottom>
        {details.volumeInfo.title}
      </Typography>
      <Typography variant='subtitle1'>
        Authors: {details.volumeInfo.authors?.join(', ')}
      </Typography>
      <Typography variant='body1'>
        Publisher: {details.volumeInfo.publisher}
      </Typography>
      <Typography variant='body1'>
        Published Date: {details.volumeInfo.publishedDate}
      </Typography>
      <Typography variant='body2'>
        Description: {details.volumeInfo.description}
      </Typography>
    </Container>
  );
};

export default Details;
