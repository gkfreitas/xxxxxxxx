import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import playCircle from '../../../assets/icons/play-circle-filled.svg';
import logo from '../../../assets/images/logo-white.png';
import welcomeImage from '../../../assets/images/welcome-link.png';
import Header from '../../../components/Header';
import { companiesMock } from '../../../mocks/mockClients';
import Footer from '../../components/Footer/Footer';
import { LinkContext } from '../../context/LinkContext';
import { LinkOrderContext } from '../../context/LinkOrderContext';
import {
  BoxCompany,
  BoxRepresentative,
  ButtonVideo,
  Container,
  ContainerMain,
  HighlightText,
  LogoHeader,
  PrimaryText,
  SecondaryText,
  VideoIcon,
  WelcomeImage,
} from './styles';

export default function Welcome() {
  const { pathname } = window.location;
  const [linkId, clientWhatsapp] = pathname.split('/').pop().split('-');
  const links = JSON.parse(localStorage.getItem('links')) || [];
  const { nome } = companiesMock.find((company) => (company.whatsapp)
    .split('-').join('').split(' ').join('')
  === clientWhatsapp);
  const { cnpj } = companiesMock.find((company) => (company.whatsapp));
  const navigate = useNavigate();
  const { setCurrentProductOrder, setCurrentOrder } = useContext(LinkOrderContext);
  const { setSelectedProducts } = useContext(LinkContext);

  const handleNextPage = () => {
    setCurrentOrder({
      clientName: nome,
      clientCNPJ: cnpj,
      hour: new Date().toLocaleTimeString(),
      clientWhatsapp,
      orderDate: new Date().toLocaleDateString(),
      linkId: Number(linkId),
      type: 'link',
      // eslint-disable-next-line no-magic-numbers
      orderNumber: Math.floor(Math.random() * 1000000),
      productsCart: [],
      paymentCondition: {
        method: '',
        installments: 0,
        discount: 0,
      },
      installmentsValue: 0,
      totalValue: 0,
    });
    setCurrentProductOrder({});
    setSelectedProducts([]);
    navigate(`/link/availableProducts/${linkId}`);
  };

  const { representativeName } = links.find((link) => link.id === Number(linkId)) || {};

  return (
    <Container>
      <Header logo title="BEM-VINDO">
        <LogoHeader src={ logo } />
      </Header>
      <ContainerMain>
        <WelcomeImage
          src={ welcomeImage }
        />
        <BoxCompany>
          <HighlightText>
            {nome}
          </HighlightText>
          <SecondaryText>
            Separamos um link com produtos especiais para você
            escolher e efetuar suas compras
          </SecondaryText>
        </BoxCompany>
        <BoxRepresentative>
          <HighlightText>
            {representativeName}
          </HighlightText>
          <PrimaryText>
            Sua representante
          </PrimaryText>
        </BoxRepresentative>
        <ButtonVideo
          onClick={ () => window.open('https://www.youtube.com/watch?v=RX1BjMD_DpY&feature=youtu.be', '_blank') }
        >
          <VideoIcon
            src={ playCircle }
          />
          <HighlightText>
            Vídeo APP
          </HighlightText>
        </ButtonVideo>
      </ContainerMain>
      <Footer
        onClick={ handleNextPage }
        textUp="IR PARA"
        textDown="COMPRAS"
      />
    </Container>
  );
}
