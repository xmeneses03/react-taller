import './App.css';
import Footer from './components/Footer';
import Navb from './components/Nav';
import BannerSection from './components/Banner';
import FirstThreeCards from './components/Cards3';
import LastTwoCards from './components/Cards2';
import AboutMe from './components/Description';
import FAQAccordion from './components/Acordeon';
// import ImageCarousel from './components/CarouselImg';
import ContactForm from './components/Formulario';
import PublicationScheduleTable from './components/Tabla';
import ImagenesGaleria from './components/Gallery';
import { Row, Col, Container} from 'react-bootstrap';


function App() {
  return (
	<div className="App">
		<nav className="App-header">
			<Navb></Navb>
		</nav>
		<BannerSection></BannerSection>
		<div className="mb-5">
            <Container className="text-center">
                <header className="mb-4">
                    <h4>¡Hola! Este es mi blog</h4>
                </header>
				<FirstThreeCards></FirstThreeCards>
				<LastTwoCards></LastTwoCards>
			</Container>
		</div>
		<div className="mb-5">
			<Container className="mb-5" id="about">
				<header className="mb-4">
					<h4>Sobre mí</h4>
				</header>
				<Row className='align-items-center'>
					<AboutMe></AboutMe>
					<FAQAccordion></FAQAccordion>
				</Row>
			</Container>
		</div>
		<div className="mb-5">
			<Container className="mb-5">
				<header className="mb-4">
					<h4>Mi galería más significativa</h4>
				</header>
				{/* <ImageCarousel></ImageCarousel> */}
				{/* <ImagenesGaleria></ImagenesGaleria> */}
			</Container>
		</div>

		<div className="mb-5">
			<Container className="mb-5">
				<header className="mb-4">
					<h4>Blog</h4>
				</header>
				<Row className='align-items-center'>
					<Col lg={4}>
						<h6>Suscribete a mi espacio</h6>
						<ContactForm></ContactForm>
					</Col>
					<Col lg={8}>
						<PublicationScheduleTable></PublicationScheduleTable>
					</Col>
				</Row>
			</Container>
		</div>

		<Footer></Footer>
	</div>
  );
}

export default App;
