import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const pages = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About Us', component: About },
  { path: '*', name: 'No Found', component: NotFound}
];

const pagesDefault = pages.map(page => {
    const updatedPage = { ...page }; 
    if (!updatedPage.component) { 
      updatedPage.component = NotFound;
    }
    return updatedPage;
});

export default pagesDefault;