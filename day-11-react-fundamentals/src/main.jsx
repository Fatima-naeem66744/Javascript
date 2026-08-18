import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './card.jsx';
import ProfileCard from './profilecard.jsx';
import Button from './button.jsx';
import Navbar from './navbar.jsx';
import './style.css';


const App = () => {
  const links = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];

  const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      image: 'https://picsum.photos/150',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      image: 'https://picsum.photos/150',
    },
  ];

  const profiles = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      avatar: 'https://picsum.photos/100',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      avatar: 'https://picsum.photos/100',
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="container">
      <Navbar links={links} />

      <header>
        <h1 className="page-title">my lil <span className="cute">component</span> garden</h1>
        <p className="page-subtitle">tiny building blocks, all fed by props &hearts;</p>
      </header>

      <h2 className="section-label">cards</h2>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>

      <h2 className="section-label">profile cards</h2>

      <div className="profile-container">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </div>

      <h2 className="section-label">buttons</h2>

      <div className="button-group">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
    </div>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);