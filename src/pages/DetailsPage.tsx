import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  TextField
} from '@mui/material'
import { getItem, updateItem, deleteItem } from '../services/api';


const DetailsPage: React.FC = () => {
  let { id } = useParams<{ id?: string }>();
  console.log('❤️❤️❤️', id);
  let navigate = useNavigate()

  const [item, setItem] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return;
      }
      const fetchedItem = await getItem(+id);
      setItem(fetchedItem);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const handleUpdate = async (event: any) => {
    event.preventDefault();
    await updateItem(id, item);
    navigate('/');
  };

  const handleDelete = async () => {
    if (id === undefined) {
      return;
    }
    await deleteItem(+id);
    navigate('/');
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form className='p-10 flex flex-col ' onSubmit={handleUpdate}>
          <TextField
            className='customTextField'
            id="title"
            label="Title"
            value={item.title}
            onChange={event => setItem({ ...item, title: event.target.value })}
          />
          <TextField
            className='customTextField'
            id="body"
            label="Body"
            value={item.body}
            multiline
            onChange={event => setItem({ ...item, body: event.target.value })}
          />
          <Button className='my-6' type="submit" variant="contained" disabled={item.title === '' || item.body === ''}>
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"

            onClick={handleDelete}
          >
            Delete
          </Button>
        </form>
      )}
    </div>
  );
};

export default DetailsPage;