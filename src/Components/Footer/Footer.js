import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <footer className="footer">
           <div className="footer__connection">
            <img src={process.env.PUBLIC_URL + './assets/spotify.svg'} draggable="false" alt="spotify"/>
            <img src={process.env.PUBLIC_URL + './assets/instagram.svg'} draggable="false" alt="instagram"/>
            <img src={process.env.PUBLIC_URL + './assets/twitter.svg'} draggable="false" alt="twitter"/>
            <img src={process.env.PUBLIC_URL + './assets/facebook.svg'} draggable="false" alt="facebook"/>
            <img src={process.env.PUBLIC_URL + './assets/youtube.svg'} draggable="false" alt="youtube"/>
            </div>
            <div className="footer__info">
                <div className="footer__info-req">
                <h6>PEDIDOS</h6>
                <p>Meus pedidos</p>
                <p>Minha conta</p>
                </div>
                <div className="border"></div>
                <div className="footer__info-about">
                <h6>SOMOS ED3</h6>
                <p>Sobre Política de privacidade</p>
                <p>Trocas e devoluções</p>
                <p>Termos e condições</p>
                </div>
                <div className="border"></div>
                <div className="footer__info-attend">
                <h6>ATENDIMENTO</h6>
                <p>sac@ed3.com.br</p>
                <p>(11) 2128-5643</p>
                </div>
                <div className="border"></div>
                <div className="footer__info-cta">
                <h6>GANHE 20% OFF NA PRIMEIRA COMPRA</h6>
                <div className="footer__info-cta-input">
                <input type="text"/>
                <button type="button">Enviar</button>
                </div>
                <p>Cadastre seu e-mail</p>
                <img src={process.env.PUBLIC_URL + './assets/secure.svg'}  draggable="false" alt="secure"/>
                <img src={process.env.PUBLIC_URL + './assets/clearsale.svg'}  draggable="false" alt="clearsale"/>
                </div>
            </div>
            <p className="footer__credits">© 2020 Loja ED3. All Rights Reserved. CNPJ 99999999/000 1-99</p>
        </footer>
    )
}