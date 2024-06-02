import './App.css';
import Card from './Card';

function App() {

  const items = [
    { name: "Ноутбуки", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/noutbuki.png' },
    { name: "Компьютеры", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyutery.png' },
    { name: "Мониторы", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/monitory.png' },
    { name: "Gaming", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/tovary-dlya-gejmerov.png' },
    { name: "Планшеты", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/planshety.png' },
    { name: "Кабели и переходники", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kabeli-i-perekhodniki.png' },
    { name: "Компьютерные комплектующие", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyuternye-komplektuyushchie.png' },
    { name: "Сетевое оборудование", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/setevoe-oborudovanie.png', },
    { name: "Наушники и аксессуары", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/naushniki-i-aksessuary.png', },
    { name: "Клавиатуры и мыши", image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/klaviatury-i-myshi.png', },
    { name: "Аксессуары для электроники", image : 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/aksessuari-dlia-elektronyky.png', },
    { name: "Оргтехника", image : 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/ofisnaya-tekhnika.png', }
  ];

  return (
    <div className="container">
      <div className="App">
        {items.map((item) => (
          <Card image={item.image} name={item.name} />
        ))}
      </div>
    </div>

  );
}

export default App;
