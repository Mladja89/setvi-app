import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    TextField
} from '@mui/material'
import { createItem } from '../services/api';

const CreatePage: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const userId = 1

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createItem({ title, body, userId });
    navigate('/');
  };

  return (
    <form  className='p-10 flex-col' noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          className='customTextField min-w-full'
          id="title"
          label="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <TextField
          className='customTextField min-w-full'
          id="body"
          label="Body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={title === '' || body === ''}
      >
        Save
      </Button>
    </form>
  );
};

export default CreatePage;