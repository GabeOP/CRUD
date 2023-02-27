import { useState } from 'react';
import Modal from 'react-modal';
import Footer from './Footer';
import Header from './Header';
import '../../style/Assinatura.css'

  Modal.setAppElement("#root");

    export default function ModalButton() {
        const [modalAberto, SetModalAberto] = useState(false);

        function openModal() {
        SetModalAberto(true);
       }

       function closeModal () {
        SetModalAberto(false);
       }

        return (
            <>
            <Header/>
                <main id="mainAssinatura">
                    <div id='bloco'>
                        <p>nome do plano</p>
                        <div id="wrapModal">
                            <button onClick={openModal}>Mais informações</button>
                            <Modal
                            id='modal' 
                                isOpen={modalAberto}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                            >
                                <div><h2>Mais informações sobre o </h2></div>
                                
                                <hr></hr>

                                <div id="cliente-user">
                                    <p>
                                        teste
                                    </p>
                                <div>
                                    <div>
                                        <button>Editar</button>
                                    <button>Excluir</button>
                                    </div>
                                    </div>
                                </div>
                                    <button id='btnFechar' onClick={closeModal}>Fechar</button>
                            </Modal>
                        </div>

                </div>
                
            </main>
            <Footer/>
            </>
     )
}