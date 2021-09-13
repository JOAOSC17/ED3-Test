import React from 'react'
import './Footer.css'
import spotify from '../../assets/spotify.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import secure from '../../assets/secure.svg'
import clearsale from '../../assets/clearsale.svg'
export default function Footer() {
    return (
        <footer className="footer">
           <div className="footer__connection">
            <img src={spotify} draggable="false" alt="spotify"/>
            <img src={instagram} draggable="false" alt="instagram"/>
            <img src={twitter} draggable="false" alt="twitter"/>
            <img src={facebook} draggable="false" alt="facebook"/>
            <img src={youtube} draggable="false" alt="youtube"/>
            </div>
            <div className="footer__info">
            <div className="footer__info-cta__mobile">
                <h6>GANHE <span>20% OFF</span> NA PRIMEIRA COMPRA</h6>
                <input type="text" placeholder="CADASTRE SEU EMAIL"/>
                <button type="button">Enviar</button>
                </div>
                <div className="footer__info-req">
                <h6 className="underline">PEDIDOS</h6>
                <p>Meus pedidos</p>
                <p>Minha conta</p>
                </div>
                <div className="border"></div>
                <div className="footer__info-about">
                <h6 className="underline">SOMOS ED3</h6>
                <p>Sobre Política de privacidade</p>
                <p>Trocas e devoluções</p>
                <p>Termos e condições</p>
                </div>
                <div className="border"></div>
                <div className="footer__info-attend">
                <h6 className="underline">ATENDIMENTO</h6>
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
                <img src={secure}  draggable="false" alt="secure"/>
                <img src={clearsale}  draggable="false" alt="clearsale"/>
                </div>
            </div>
            <div className="footer__credits">
            <p >© 2020 Loja ED3. All Rights Reserved. CNPJ 99999999/000 1-99</p>
            <p className="footer__credits">© 2020 Cabral. All Rights Reserved.</p>
            </div>
        </footer>
    )
}