import React, { Component } from 'react';
import alface from './images/alface.png';
import beterraba from './images/beterraba.png';
import cenoura from './images/cenoura.png';
import cereja from './images/cereja.png';
import laranja from './images/laranja.png';
import limao from './images/limao.png';
import manga from './images/manga.png';
import minusCircle from './images/MinusCircle.png';
import plusCircle from './images/PlusCircle.png';
import shoppingCart from './images/ShoppingCart.png';
import tomate from './images/tomate.png';
import './App.css';

class HortifrutiVNW extends Component{

  state = {
    itensHortifruti: [
      {imagem: `${alface}`, nome: "Alface"},
      {imagem: `${beterraba}`, nome: "Beterraba"},
      {imagem: `${cereja}`, nome: "Cereja"},
      {imagem: `${cenoura}`, nome: "Cenoura"},
      {imagem: `${laranja}`, nome: "Laranja"},
      {imagem: `${limao}`, nome: "Limão"},
      {imagem: `${manga}`, nome: "Manga"},
      {imagem: `${tomate}`, nome: "Tomate"}
    ]
  }

  render() {
    return(
      <div className='masterDiv'>
        <header>
          <h1>Hortifruti VNW</h1>
        </header>

        <main>
          <section className='containerItens'>
            <h2 className='h2'>Nossos produtos</h2>
            <div className='itensMap'>
              {this.state.itensHortifruti.map((item) =>(
                <div className='itensDisplay'>
                  <img className='itensImages' src={item.imagem} alt={item.nome}/>
                </div>
              ))}
            </div>
          </section>

          <section className='containerCart'>
            <div className='containerSquare'>
              <div className='cartSquare'>
                <img className='cartIcon' src={shoppingCart} alt="Shopping cart"/>
                  <p>Arraste o seu produto aqui para colocar no carrinho</p>
              </div>
              <div className='btn-cart'>
                <img className='plus-circle' src={plusCircle} alt="Plus circle"/>
                <img className='minus-circle' src={minusCircle} alt="Minus circle"/>
                </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

}

export default HortifrutiVNW;
