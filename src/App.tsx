import * as React from 'react';
import { Container, Grid, Paper } from '@mui/material';

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import DetailsPage from './pages/DetailsPage';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


const SetviLogo = () => {
  return (
    <div className="absolute z-10 right-2 select-none">
    <img style={{width: 70}} src={'https://ci3.googleusercontent.com/mail-sig/AIorK4xm6KNWiB4a36fx2hb5uqdv9ftu0JyrMRlAXbV5Zu4oRAp9aohiZW_vVe1fqlwLe3HkQerUlyI'} />
</div>
  )
}

export default function App() {
  return (
    <>
      <header className="w-full text-center p-7 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
        <Grid item xs={12}>
          <RouterLink className='font-medium flex leading-tight text-xl mt-0 mb-2 text-white hover:text-slate-300 no-underline' to="/"><HomeRoundedIcon> </HomeRoundedIcon>HOME</RouterLink>
        </Grid>
      </header>
      <div className="bg-slate-700">
        <Container maxWidth="xl">
          <Paper elevation={2} className="mb-10 relative">
            <SetviLogo />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
            </Routes>
          </Paper>
        </Container>
      </div>
    </>

  );
}
