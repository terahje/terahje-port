import './App.css';
import { Layout, Header, Navigation, Drawer,Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Terahje's Portfolio" scroll>
            <Navigation> 
                <Link to="/home" className="nav-color">Home</Link>
                <Link to="/resume" className="nav-color">Resume</Link>
                <Link to="/aboutme" className="nav-color">About Me</Link>
                <Link to="/projects" className="nav-color">Projects</Link>
                <Link to="/contact" className="nav-color">Contact </Link>
            </Navigation>
        </Header>
        <Drawer title="Terahje's Portfolio">
            <Navigation className="nav-color">
                <Link to="/home">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>
</div>
  );
}

export default App;
