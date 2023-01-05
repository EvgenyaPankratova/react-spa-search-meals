import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {NotFound} from './pages/NotFound';
import { Category } from './pages/Category';
import {Recipe} from './pages/Recipe';

function App() {
  return (
     <BrowserRouter basename='/react-spa-search-meals'> {/*указываем название репозитория как домашнюю страницу, относительно которой остальные пути*/}
      <Header/>
      <main className='container content'>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contact/>}/>
          <Route path='/category/:name' element={<Category/>}/>
          <Route path='/meal/:id' element={<Recipe/>}/>
          <Route path='*' element={<NotFound/>}/>   {/* звёздочка означает любой текст, кроме указанных путей, который мы можем написать  */}
          
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
