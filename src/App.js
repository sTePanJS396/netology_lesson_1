import './App.css';
import ShopItemClass from './components/ShopItemClass';
import ShopItemFunc from "./components/ShopItemFunc";
// Импорт компонентов из папки "components": ShopItemClass и ShopItemFunc.  


function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  };
  // Объект с данными.

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} /> {/* Компонент ShopItemFunc, выполненый в виде функционального компонента React */}
        {/* <ShopItemClass item={item} /> */} {/* Компонент ShopItemClass, выполненый в виде классового компонента React */}
      </div>
    </div>
  );
  // Рендеринг элемента
}

export default App;
