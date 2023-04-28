import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       Oi, Bem-vindo! :) <p>
       10 prompts poderosos para você.
       </p>

       <div className='tabelas'>
        <div className='tabela-1'>
       <ChakraProvider>
       <Tabs>
  <TabList>
  <Tab>></Tab>
    <Tab>Melhore a sua escrita obtendo feedback.</Tab>
    <Tab>Use o princípio 80/20 para aprender mais rápido do que nunca.</Tab>
    <Tab>Aprenda e desenvolva qualquer nova habilidade.</Tab>
    <Tab>Obtenha resumos de livros curtos e cheios de insights.</Tab>
    <Tab>Receba feedback das mentes mais brilhantes da história.</Tab>
  </TabList>
  <TabPanels>
    <TabPanel></TabPanel>
    <TabPanel>
      <p>[Seu Texto Aqui] </p>
Reveja a minha escrita acima. Corrija erros de gramática e ortografia. E faça sugestões que melhorem a clareza da minha escrita.
    </TabPanel>
    <TabPanel>
      <p>Quero aprender sobre [insira o tema]. Identifique e compartilhe os 20% mais importantes de aprendizados deste tema que me ajudarão a entender 80% dele.</p>
    </TabPanel>
    <TabPanel>
      <p>Quero aprender/melhorar em [insira a habilidade desejada]. Sou um iniciante completo. Crie um plano de aprendizado de 30 dias que me ajude, como iniciante, a aprender e melhorar essa habilidade.</p>
    </TabPanel>
    <TabPanel>
      <p>Resuma o livro [insira o nome do livro] do autor [insira o nome do autor] e me forneça uma lista dos aprendizados e insights mais importantes.</p>
    </TabPanel>
    <TabPanel>
      <p>Assuma que você é [insira o nome de uma pessoa famosa, como Steve Jobs]. Leia meu argumento abaixo e me dê feedback como se você fosse [insira a pessoa novamente]"
[insira seu argumento]
</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</ChakraProvider>
</div>
<div className='tabela-2'>
<ChakraProvider>
<Tabs>
  <TabList>
  <Tab>></Tab>
    <Tab>Melhore suas habilidades de resolução de problemas.</Tab>
    <Tab>Gere novas ideias e supere o bloqueio criativo.</Tab>
    <Tab>Resuma textos longos e acelere seu aprendizado.</Tab>
    <Tab>Use histórias e metáforas para ajudar sua memória.</Tab>
    <Tab>Reforce seu aprendizado testando-se.</Tab>
  </TabList>
  <TabPanels>
    <TabPanel></TabPanel>
  <TabPanel>
  Seu papel é o de solucionador de problemas. Dê-me um guia passo a passo para resolver [insira seu problema].
  </TabPanel>
  <TabPanel>
  Estou escrevendo um post de blog sobre [insira o tema]. Forneça-me um esboço para este post de blog com 10 tópicos em forma de tópicos. Além disso, dê-me 5 opções de título cativante.
  </TabPanel>
  <TabPanel>Resuma o texto abaixo em 500 palavras ou menos. Crie seções para cada ponto importante com um breve resumo desse ponto.</TabPanel>
  <TabPanel>Atualmente estou aprendendo sobre [insira o tema]. Converta as principais lições desse tema em histórias envolventes e metáforas para ajudar na minha memorização.</TabPanel>
  <TabPanel>Atualmente estou aprendendo sobre [insira o tema]. Faça-me uma série de perguntas que testarão meu conhecimento. Identifique lacunas de conhecimento em minhas respostas e forneça respostas melhores para preencher essas lacunas.</TabPanel>
</TabPanels>
</Tabs>
</ChakraProvider>
</div>
</div>
      </header>
    <footer className='footer'>
      Feito com ❤️ por <a href='https://www.linkedin.com/in/mateus-morais-/' target='blank'>Mateus</a>
    </footer>

    </div>
  );
}

export default App;
