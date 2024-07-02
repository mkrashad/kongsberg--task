import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

export const TableComponent = ({ data }) => {
  const navigate = useNavigate();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 200,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
    },
    {
      field: 'authors',
      headerName: 'Author',
      width: 350,
    },

    {
      field: 'kind',
      headerName: 'Kind',
      width: 120,
    },
  ];

  const rows =
    data?.items?.map((item, index) => ({
      id: item.id,
      title: item.volumeInfo?.title || 'N/A',
      authors: item.volumeInfo?.authors?.join(', ') || 'N/A',
      kind: item.kind || 'N/A',
    })) || [];

    const handleRowClick = (params) => {
      navigate(`/details/${params.id}`);
    };
  

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5}  onRowClick={handleRowClick}/>
    </div>
  );
};
