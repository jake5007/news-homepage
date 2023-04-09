import Header from './components/Header';
import NewArticles from './components/NewArticles';
import RankedArticle from './components/RankedArticle';
import ReadMore from './components/ReadMore';
import hotNews from './hotNews';
import './styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='content'>
        <div className='hero'>
          <img src='/assets/image-web-3-desktop.jpg' alt='hero' />
        </div>
        <div className='headline'>
          <span>The Bright Future of Web 3.0?</span>
        </div>
        <ReadMore />
        <NewArticles />
        {
          hotNews.map((item, idx) => 
            <RankedArticle 
              key={item.id}
              rank={idx + 1}
              item={item}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
