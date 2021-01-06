import './App.css';

import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Book //First book
          title="Just Kids" 
          author="Patti Smith"
          description="It was the summer Coltrane died, the summer of love and riots, and the summer when a chance encounter in Brooklyn led two young people on a path of art, devotion, and initiation. Just Kids begins as a love story and ends as an elegy. It serves as a salute to New York City during the late sixties and seventies and to its rich and poor, its hustlers and hellions. A true fable, it is a portrait of two young artistsâ€™ ascent, a prelude to fame."
          image="https://m.media-amazon.com/images/I/41FCZ0g6YAL.jpg" />
        
        
      <Book //Second book
          title="One Hundred Years of Solitude"
          author="Gabriel Garci­a Marquez"
          description="The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love—in rich, imaginative prose that has come to define an entire genre known as magical realism."
          image="https://images-na.ssl-images-amazon.com/images/I/51g1mv8VEnL._SX322_BO1,204,203,200_.jpg" />
        
      <Book //Third book
          title="The Picture of Dorian Gray"
          author="Oscar Wilde"
          description="In this celebrated work, his only novel, Wilde forged a devastating portrait of the effects of evil and debauchery on a young aesthete in late-19th-century England. Combining elements of the Gothic horror novel and decadent French fiction, the book centers on a striking premise: As Dorian Gray sinks into a life of crime and gross sensuality, his body retains perfect youth and vigor while his recently painted portrait grows day by day into a hideous record of evil, which he must keep hidden from the world. For over a century, this mesmerizing tale of horror and suspense has enjoyed wide popularity. It ranks as one of Wilde's most important creations and among the classic achievements of its kind."
          image="https://g.christianbook.com/dg/product/cbd/f400/78070.jpg" />
      <Footer />
    </div>
  );
}

export default App;