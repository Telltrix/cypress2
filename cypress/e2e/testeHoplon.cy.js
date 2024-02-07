///<reference types="cypress"/>

describe('Verificar se não contém erros de ortografia na pagina pricipal(BR)', () => {
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
    })
    
    it('Head', ()=>{
        cy.get('.small-12 > .logo').should('contain', 'Hoplon');
        cy.get('.main-menu > a').should('contain', 'Cultura').and('contain', 'Carreira').and('contain', 'Jogos').and('contain', 'Notícias');
        cy.get('.home-banner__slide--1 > .home-banner__sun > .js-pjax > .home-banner__content').should('contain', 'Heavy Metal Machines está disponível para PlayStation® e Xbox!');
        cy.get('.home-banner__slide--2 > .home-banner__sun > .js-pjax > .home-banner__content').should('contain', 'Heavy Metal Machines chegará para consoles no começo de 2021');
        cy.get('.home-banner__slide--3 > .home-banner__sun > .js-pjax > .home-banner__content').should('contain', 'Lançamento da 10ª Temporada de Heavy Metal Machines');
    })

    it('Body', ()=>{
        cy.get('.large-5 > h3').should('have.text', 'Sobre a Hoplon');
        cy.get('.large-5 > p').should('contain', 'Somos uma desenvolvedora e publicadora de jogos com sede no Brasil, fundada em 2004. Nossa missão é levar diversão e entretenimento a jogadores de todos os continentes, sempre com foco em produções originais e relacionamento respeitoso com nossos jogadores.');
        cy.get('.large-5 > p').should('contain', 'Somos certificados como Great Place to Work e estamos localizados em Florianópolis/SC, uma ilha paradisíaca e importante pólo tecnológico no Sul do Brasil, que oferece uma combinação perfeita de qualidade de vida e realização profissional.');
        cy.get('.large-5 > .button').should('contain', 'Entenda nossa cultura');
        cy.get('.our-games__content > h3').should('contain', 'Conheça nossos jogos');
        cy.get('.our-games__content > p').should('contain', 'Da arena ensandecida do Heavy Metal Machines ao espaço sem fim de Taikodom. Conheça os jogos que já fizemos e que ainda estamos produzindo.');
        cy.get('.our-games__content > .button').should('contain', 'Veja nossos jogos');
        cy.get('.stripe-cta > .row > .columns > h3').should('contain', 'Venha ser um Hoplita.');
        cy.get('.stripe-cta > .row > .columns > p').should('contain', 'Estamos sempre contratando');
        cy.get('.stripe-cta > .row > .columns > .button').should('contain', 'Veja nossas vagas');
    })

    it('Footer', ()=>{
        cy.get('.footer-info > .logo').should('contain', 'Hoplon');
        cy.get('.footer-menu > a').should('contain', 'Cultura').and('contain', 'Carreira').and('contain', 'Jogos');
        cy.get('address').should('contain', 'Edifício Santa Mônica Office').and('contain', 'Rua Niberto Haase, 100, 2° andar.').and('contain', 'Santa Mônica, Florianópolis - SC, Brasil').and('contain', 'CEP: 88035-215');
        cy.get('address > a').should('contain', '+55 (48) 3234-1004');
        cy.get('h4').should('contain', 'Fale conosco');
        cy.get(':nth-child(2)').find('input').invoke('attr', 'placeholder').should('contain', 'Nome');
        cy.get(':nth-child(3)').find('input').invoke('attr', 'placeholder').should('contain', 'Email ou telefone');
        cy.get(':nth-child(4) > textarea').invoke('attr', 'placeholder').should('contain', 'Mensagem');
        cy.get(':nth-child(5) > textarea').invoke('attr', 'placeholder').should('contain', 'Qual é o nome da nossa empresa?');
        cy.get('.input-block > .button').should('contain', 'Enviar');
        cy.get('small').should('contain', 'Copyright © 2018 Hoplon. Todos os direitos reservados.');
        cy.get(':nth-child(2) > .small-12 > a').should('contain', 'Termos de Acordo').and('contain', 'Política de Privacidade');
    })
})  

describe('Verificar se não contém erros de ortografia na pagina cultura(BR)', () => {
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
        cy.get('.main-menu > [href="/site/culture.php"]').click({force: true});
    })

    it('Body', ()=>{
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Nossa Cultura');
        cy.get('.section-culture > :nth-child(1) > .large-5 > h3').should('contain', 'Jogadores em Primeiro Lugar');
        cy.get('.section-culture > :nth-child(1) > .large-5 > p').should('contain', 'Aqui na Hoplon a nossa premissa é simples: proporcionar aos jogadores uma experiência excepcional dentro e fora dos nossos jogos. Não é um trabalho fácil, mas com certeza vale todo o esforço!')
        .and('contain', 'Acreditamos na importância de desenvolvermos nossos jogos JUNTO com a nossa comunidade de jogadores, e cada sugestão, crítica ou declaração de amor é levada em consideração.')
        .and('contain', 'Afinal de contas, somos tão apaixonados por games quanto nossos jogadores.');
        cy.get('.large-4 > h3').should('contain', 'Cultura gamer');
        cy.get(':nth-child(3) > .large-4 > :nth-child(2)').should('contain', 'Imagine um ambiente de trabalho vibrante, dinâmico e colaborativo que tem orgulho de entregar jogos de altíssima qualidade e diversão: aqui na Hoplon é assim.');
        cy.get(':nth-child(3) > .large-4 > :nth-child(3)').should('contain', 'Nossa equipe animada e bem articulada sempre estará pronta para te ajudar e apoiar.');
        cy.get('.section-island > .row > .columns > h3').should('contain', 'Ilha paradisíaca');
        cy.get('.section-island > .row > .columns > p').should('contain', 'Florianópolis é uma ilha paradisíaca no sul do Brasil. A cidade conta com 42 praias e é um centro de surfe e esportes radicais conhecido mundialmente. A economia local é fortemente baseada em tecnologia da informação, turismo e serviços, situando-se como uma das “dez cidades mais dinâmicas do mundo” de acordo com o Newsweek.');
        cy.get('.section-talent > .row > :nth-child(1) > h3').should('contain', 'Foco em talentos');
        cy.get('.section-talent > .row > :nth-child(1) > p').should('contain', 'Acreditamos que até os maiores mestres podem sempre se aperfeiçoar, portanto consideramos essencial a criação de um ambiente que valorize o desenvolvimento dos talentos individuais. Seja qual for sua especialidade ou experiência, você terá oportunidade para utilizar e desenvolver todo seu potencial.');
        cy.get(':nth-child(1) > .button').should('contain', 'Junte-se a nós');


    })
})

describe('Verificar se não contém erros de ortografia na página jogos(BR)', () => {
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
        cy.get('.main-menu > [href="/site/games.php"]').click({force: true});
    })

    it('Body', ()=>{
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Nossos jogos');
        cy.get('.game-item--highlight > :nth-child(1) > .columns > h3').should('contain', 'Heavy Metal Machines');
        cy.get('.columns > p').should('contain', 'Em um cenário pós-apocalíptico devastado pelos seus próprios habitantes e reerguido pelo metal e loucura, ressurgiram as arenas de gladiadores, só que dessa vez elas sediavam uma batalha de carros em que os vencedores são aqueles que dizimam os oponentes! Você está na pele de pilotos completamente insanos que tem como arma seus próprios veículos, cada um deles com acessórios e habilidades mais dementes do que você possa imaginar!');
        cy.get('.game-item--highlight > :nth-child(1) > .columns > .button').should('contain', 'Acesse o site');
        cy.get('.steam-label').should('contain', 'Free to play on steam');
        cy.get(':nth-child(1) > .game-item > .game-item__content > h3').should('contain', 'Apocalypse Party’s Over');
        cy.get(':nth-child(1) > .game-item > .game-item__content > p').should('contain', 'Use sua PRÓPRIA ROLA para completar o APOCALIPSE pré-maturo exigido por CHEEESUS! Jogue forever alone ou com um amigo usando habilidades e poderes especiais, como o METEORO DE CHEEESUS e TERRARALHO e SALVE O MUNDO DELE MESMO!');
        cy.get(':nth-child(2) > .game-item > .game-item__content > h3').should('contain', 'Taikodom');
        cy.get(':nth-child(2) > .game-item > .game-item__content > :nth-child(2)').should('contain', 'Taikodom é um Jogo Online Massivo de Multijogadores onde interpreta-se a vida de humanos despertados no ano de 2234 em um cenário futurista e habitado por uma nova civilização que atua na colonização do espaço. A bordo de naves estelares, os jogadores exploram, coletam matéria prima, fabricam naves e equipamentos e lutam contra corporações e facções inimigas pelo domínio bélico e econômico do universo.');
        cy.get(':nth-child(2) > .game-item > .game-item__content > :nth-child(3)').should('contain', 'O MMO Taikodom, lançado em 2008, foi encerrado em maio de 2015.');
        cy.get('.row > .columns > h3').should('contain', 'Quer ajudar a construir o próximo game da Hoplon?');
        cy.get('.row > .columns > .button').should('contain', 'Junte-se a nós');
    })
    
})

describe('Verificar se não contém erros de ortografia na pagina pricipal(EN)', () => {
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
        cy.get('.main-header > .row > .small-12 > .language-selector > .en').click({force: true});
    })
    
    it('Head', ()=>{
        cy.get('.small-12 > .logo').should('contain', 'Hoplon');
        cy.get('.main-menu > a').should('contain', 'Culture').and('contain', 'Careers').and('contain', 'Games').and('contain', 'News');
        cy.get('.home-banner__slide--1 > .home-banner__sun > .js-pjax > .home-banner__content').should('contain', 'Heavy Metal Machines is now available for PlayStation® and Xbox!');
        cy.get('.home-banner__slide--2 > .home-banner__sun > .js-pjax > .home-banner__content').should('contain', 'Heavy Metal Machines will arrive on consoles in early 2021');
        cy.get('.home-banner__slide--3 > .home-banner__sun > .js-pjax > .home-banner__content').should('contain', 'Heavy Metal Machines 10th Season Launch');
    })

    it('Body', ()=>{
        cy.get('.large-5 > h3').should('have.text', 'About Hoplon');
        cy.get('.large-5 > p').should('contain', 'We are a game developer and publisher based in Brazil, founded in 2004. Our mission is to bring fun and entertainment to players from all continents, focusing on original productions and respectful relationships with our players.');
        cy.get('.large-5 > p').should('contain', 'Certified as a Great Place to Work, we are in Florianópolis, state of Santa Catarina, a paradisiacal island, and an important technological center in southern Brazil, which offers a perfect combination of quality of life and professional achievement.');
        cy.get('.large-5 > .button').should('contain', 'Understand our culture');
        cy.get('.our-games__content > h3').should('contain', 'Meet our games');
        cy.get('.our-games__content > p').should('contain', 'Demolish your opponents in the Heavy Metal Machines arena, explore the endless space of Taikodom, & save the world from CHEEESUS in Apocalypse: Party’s Over. Know the games we have created & see the ones in development.');
        cy.get('.our-games__content > .button').should('contain', 'See our games');
        cy.get('.stripe-cta > .row > .columns > h3').should('contain', 'Come be a Hoplita.');
        cy.get('.stripe-cta > .row > .columns > p').should('contain', "We're always hiring");
        cy.get('.stripe-cta > .row > .columns > .button').should('contain', 'Check our openings');
    })

    it('Footer', ()=>{
        cy.get('.footer-info > .logo').should('contain', 'Hoplon');
        cy.get('.footer-menu > a').should('contain', 'Culture').and('contain', 'Careers').and('contain', 'Games');
        cy.get('address').should('contain', 'Edifício Santa Mônica Office').and('contain', 'Rua Niberto Haase, 100, 2° andar.').and('contain', 'Santa Mônica, Florianópolis - SC, Brasil').and('contain', 'Zip: 88035-215');
        cy.get('address > a').should('contain', '+55 (48) 3234-1004');
        cy.get('h4').should('contain', 'Contact us');
        cy.get(':nth-child(2)').find('input').invoke('attr', 'placeholder').should('contain', 'Name');
        cy.get(':nth-child(3)').find('input').invoke('attr', 'placeholder').should('contain', 'Email or phone');
        cy.get(':nth-child(4) > textarea').invoke('attr', 'placeholder').should('contain', 'Message');
        cy.get(':nth-child(5) > textarea').invoke('attr', 'placeholder').should('contain', 'What is the name of our company?');
        cy.get('.input-block > .button').should('contain', 'Send');
        cy.get('small').should('contain', 'Copyright © 2018 Hoplon . All rights reserved.');
        cy.get(':nth-child(2) > .small-12 > a').should('contain', 'Terms of Agreement').and('contain', 'Privacy Policy');
    })

})

describe('Verificar se não contém erros de ortografia na pagina cultura(EN)', () => {
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
        cy.get('.main-header > .row > .small-12 > .language-selector > .en').click({force: true});
        cy.get('.main-menu > [href="/site/en/culture.php"]').click({force: true});
    })

    it('Body', ()=>{
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Our culture');
        cy.get('.section-culture > :nth-child(1) > .large-5 > h3').should('contain', 'Players First');
        cy.get('.section-culture > :nth-child(1) > .large-5 > p').should('contain', 'Here at Hoplon, our premise is simple: to make our players have an exceptional experience inside and outside of our games. It is not an easy job, but certainly worth every minute of effort!')
        .and('contain', 'We believe in the importance of developing games TOGETHER with our community, and we take every suggestion, criticism, or declaration of love into account.')
        .and('contain', 'After all, we are just as passionate about games as our players are.');
        cy.get('.large-4 > h3').should('contain', 'Gamer culture');
        cy.get(':nth-child(3) > .large-4 > :nth-child(2)').should('contain', 'Imagine a vibrant, dynamic, and collaborative work environment that is proud to deliver games of the highest quality and fun: this is how it is at Hoplon.');
        cy.get(':nth-child(3) > .large-4 > :nth-child(3)').should('contain', 'Our energetic and well-coordinated team will always be ready to help and support you.');
        cy.get('.section-island > .row > .columns > h3').should('contain', 'Paradisiac island');
        cy.get('.section-island > .row > .columns > p').should('contain', 'Florianópolis is a tropical island paradise located in southern Brazil. The city has 42 beaches and is a world renowned center of surfing and radical sports. The local economy is heavily based on information technology, tourism and services standing as one of the “beloved cities for digital nomads” by BBCTravel 2016, deemed “The Place to be” by The New York Times & “Ten most dynamic cities in the world” according to Newsweek 2006.');
        cy.get('.section-talent > .row > :nth-child(1) > h3').should('contain', 'Focus on Talent');
        cy.get('.section-talent > .row > :nth-child(1) > p').should('contain', 'We believe that even the greatest masters can continuously improve themselves, so we consider it essential to create an environment that values the development of individual talents. Whatever your specialty or experience is, you will have the opportunity to use and develop your full potential.');
        cy.get(':nth-child(1) > .button').should('contain', 'Join us');


    })
})

describe('Verificar se não contém erros de ortografia na página jogos(EN)', () => {
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
        cy.get('.main-header > .row > .small-12 > .language-selector > .en').click({force: true});
        cy.get('.main-menu > [href="/site/en/games.php"]').click({force: true});
    })

    it('Body', ()=>{
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Our games');
        cy.get('.game-item--highlight > :nth-child(1) > .columns > h3').should('contain', 'Heavy Metal Machines');
        cy.get('.columns > p').should('contain', 'In a post-apocalyptic landscape ravaged by its own inhabitants, the ancient arenas of gladiators resurfaced, rebuilt by metal and madness. A car battle is hosted where the winners are those who decimate their opponents! Controlling clinically insane drivers with specialized weapons, demented accessories, and more abilities than you can imagine!');
        cy.get('.game-item--highlight > :nth-child(1) > .columns > .button').should('contain', 'Visit the website');
        cy.get('.steam-label').should('contain', 'Free to play on steam');
        cy.get(':nth-child(1) > .game-item > .game-item__content > h3').should('contain', 'Apocalypse: Party’s Over');
        cy.get(':nth-child(1) > .game-item > .game-item__content > p').should('contain', 'Our lord and savior, CHEEESUS, is condemning all of humanity with the end of the world! Use immature characters to save us from damnation! Play forever alone or with a friend, using skills and special powers to save the world from itself!');
        cy.get(':nth-child(2) > .game-item > .game-item__content > h3').should('contain', 'Taikodom');
        cy.get(':nth-child(2) > .game-item > .game-item__content > :nth-child(2)').should('contain', 'Humanity is awakened in the year 2234, inhabited by a new space civilization. Taikodom is a Massive Multiplayer Online where players explore the farthest reaches of space by boarding starships, collecting raw materials, manufacturing crafts, and equipment. The universe is at war, it is your duty to save the universe from economic domination from fighting corporations and warring factions. The MMO Taikodom, launched in 2008, is no longer available as of May 2015.');
        cy.get('.row > .columns > h3').should('contain', 'Want to help build Hoplon’s next game?');
        cy.get('.row > .columns > .button').should('contain', 'Join us!');
    })
})

describe('Verificando botões da página principal(Head).', () => {
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
    })

    it('Clicar no botão cultura e logo', () => {
        cy.title().should('be.equal', 'Hoplon');
        cy.get('.main-menu > [href="/site/culture.php"]').click({force: true});
        cy.title().should('be.equal', 'Cultura');
        cy.get('.small-12 > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })

    it('Clicar no botão carreira', () => {
        cy.title().should('be.equal', 'Hoplon');
        cy.get('[href="https://www.linkedin.com/company/hoplongames/jobs/"]').invoke('attr', 'target', '_blank').click({force: true});
    })

    it('Clicar no botão jogos e logo', () => {
        cy.title().should('be.equal', 'Hoplon');
        cy.get('.main-menu > [href="/site/games.php"]').click({force: true});
        cy.title().should('be.equal', 'Jogos');
        cy.get('.small-12 > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })

    it('Clicar no botão notícias e logo', () => {
        cy.title().should('be.equal', 'Hoplon');
        cy.get('[href="/site/news.php"]').click({force: true});
        cy.title().should('be.equal', 'Notícias');
        cy.get('.main-header > .row > .small-12 > .language-selector > .en').click({force: true});
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Latest News');
        cy.get('.main-header > .row > .small-12 > .language-selector > .pt').click({force: true});
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Últimas Notícias');
        cy.get('.small-12 > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })
})

describe('Verificando botões da página principal(Body).', ()=>{
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
    })

    it('Botão Entenda nossa cultura', ()=>{
        cy.get('.large-5 > .button').click();
        cy.title().should('be.equal', 'Cultura');
        cy.get('.small-12 > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })

    it('Botão Veja nossos jogos', ()=>{
        cy.get('.our-games__content > .button').click();
        cy.title().should('be.equal', 'Jogos');
        cy.get('.small-12 > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })

    it.skip('Botão Veja nossas vagas', ()=>{
        cy.get('.stripe-cta > [href="https://www.linkedin.com/company/hoplongames/jobs/"]').invoke('attr', 'target', '_blank').click();
    })

})

describe('Verificando botões da página Cultura(Body).', ()=>{
    before(() => {
        cy.visit('https://www.hoplon.com/site/culture.php');
    })

    it.skip('Botão Junte-se a nós', ()=>{
        cy.title().should('be.equal', 'Cultura');
        cy.get(':nth-child(1) > [href="https://www.linkedin.com/company/hoplongames/jobs/"]').invoke('attr', 'target', '_blank').click();
    })
})

describe('Verificando botões da página Jogos(Body)', ()=>{
    before(() => {
        cy.visit('https://www.hoplon.com/site/games.php');
    })

    it('Botão acesse o site', ()=>{
        cy.title().should('be.equal', 'Jogos');
        cy.get('.game-item--highlight > :nth-child(1) > .columns > .button').click();
    })

    it('Botão Free to play', ()=>{
        cy.title().should('be.equal', 'Jogos');
        cy.get('.steam-label').click();
    })

    it.skip('Botão Junte-se a nós', ()=>{
        cy.title().should('be.equal', 'Jogos');
        cy.get('.stripe-cta > .row > .small-12 > [href="https://www.linkedin.com/company/hoplongames/jobs/"]').invoke('attr', 'target', '_blank').click();
    })


})

describe('Verificando botões da página principal(Footer).', () => {
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
    })

    it('Clicar no botão cultura e logo', () => {
        cy.title().should('be.equal', 'Hoplon');
        cy.get('.footer-menu > [href="/site/culture.php"]').click();
        cy.title().should('be.equal', 'Cultura');
        cy.get('.footer-info > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })

    it.skip('Clicar no botão carreira', () => {
        cy.title().should('be.equal', 'Hoplon');
        cy.get('.footer-menu > [href="https://www.linkedin.com/company/hoplongames/jobs/"]').invoke('attr', 'target', '_blank').click();
    })

    it('Clicar no botão jogos e logo', () => {
        cy.title().should('be.equal', 'Hoplon');
        cy.get('.footer-menu > [href="/site/games.php"]').click();
        cy.title().should('be.equal', 'Jogos');
        cy.get('.footer-info > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })

    it('Termos de acordo', ()=>{
        cy.get('[href="/site/terms-of-agreement.php"]').click();
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Termos de Acordo. AVISO JURÍDICO IMPORTANTE!');
        cy.get('.main-header > .row > .small-12 > .language-selector > .en').click({force: true});
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Terms of Agreement. Important Legal Notice!');
        cy.get('.main-header > .row > .small-12 > .language-selector > .pt').click({force: true});
        cy.get('.footer-info > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })

    it('Política de privacidade', ()=>{
        cy.get('[href="/site/privacy-policies.php"]').click();
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Política de Privacidade');
        cy.get('.main-header > .row > .small-12 > .language-selector > .en').click({force: true});
        cy.get('.internal-header > .row > .small-12 > h2').should('contain', 'Privacy Policy');
        cy.get('.main-header > .row > .small-12 > .language-selector > .pt').click({force: true});
        cy.get('.footer-info > .logo').click();
        cy.title().should('be.equal', 'Hoplon');
    })
})
//TODO validar campos do formulário
/*describe('Testando formulário', ()=>{
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
    })

    it.only('Formulário', ()=>{
        cy.get(':nth-child(8) > .button').click();
        cy.get('h5').should('contain', 'O codigo de verificação não confere. Tente novamente.');
        //cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();


    })
})*/
//TODO validar links abertos
describe('Redes sociais', ()=>{
    before(() => {
        cy.visit('http://www.hoplon.com/site/index.php');
    })

    it('Head', ()=>{
        cy.get('.small-12 > .social-links > .icon-facebook').click({force: true});
        cy.get('.small-12 > .social-links > .icon-twitter').click({force: true});
        cy.get('.small-12 > .social-links > .icon-youtube').click({force: true});
        //cy.get('.small-12 > .social-links > a').invoke('attr', 'href').should('contain', 'https://www.facebook.com/hoplongames');
        //cy.get('.small-12 > .social-links > a').invoke('attr', 'href').should('contain', 'https://twitter.com/hoplongames');
        //cy.get('.small-12 > .social-links > a').invoke('attr', 'href').should('contain', 'https://www.youtube.com/heavymetalmachines');

    })

    it('Footer', ()=>{
        cy.get('.footer-info > .social-links > .icon-facebook').click();
        cy.get('.footer-info > .social-links > .icon-twitter').click();
        cy.get('.footer-info > .social-links > .icon-youtube').click();
    })
    
})



    /*  cy.title().then(title => {
            console.log(title);
        })
    */

    
    


  

