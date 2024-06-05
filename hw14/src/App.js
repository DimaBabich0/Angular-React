import './App.css';
import Card from './Card';

function App() {
  const items = [
    { name: 'Basic', color: "green", advantages: [1,0,0,0], price: 2.99 },
    { name: 'Standart', color: "blue", advantages: [1,1,0,0], price: 5.99 },
    { name: 'Premium', color: "darkblue", advantages: [1,1,1,1], price: 0.99, }
  ];

  return (
    <div className="App">
      <div className='wrapper'>
        {items.map((item) => (
          <Card
            name={item.name}
            color={item.color}
            advantages={item.advantages}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
