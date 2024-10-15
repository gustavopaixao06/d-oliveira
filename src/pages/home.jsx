import '../assets/css/Home.css'

export function Home() {
    return (
        <>
            <section className='primeira-sessao'>
                <div className="primeiraImg">
                    <img src="/img/Fundo.svg" alt="" />
                    <h1>Transformando seu ambiente com soluções personalizadas</h1>
                </div>
            </section>

            <section className="segunda-sessao">
                <div className="quemSomos-home">
                    <h1>Quem somos</h1>
                    <h2>Expertise em Reformas Corporativas para Criar Espaços Funcionais e Modernos</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="quemSomos-img">
                    <img src="/img/aboutUs.svg" id='img1' alt="" />

                    <div className="parte2-img">
                        <img src="/img/aboutUs2.svg" alt="" />
                        <img src="/img/aboutUs3.svg" id='img3' alt="" />
                    </div>
                </div>
            </section>

            <section className='terceira-sessao'>
                <div className="carrossel">
                    <img src="/img/Img-carrossel.svg" alt="" />
                    <img src="/img/Img2-carrossel.svg" alt="" />
                    <img src="/img/Img3-carrossel.svg" alt="" />
                    <img src="/img/Img4-carrossel.svg" alt="" />
                </div>
            </section>

            <section className='quarta-sessao'>
                <div className="porqueEscolher">
                    <h1>Por que nos escolher?</h1>
                </div>
                <div className="conjunto">

                    <div className="projetos">
                        <img src="/img/lapis.svg" alt="" />
                        <h3>Projetos Personalizados: </h3>
                        <h4>Soluções sob medida para as necessidades do seu negócio.</h4>
                    </div>

                    <div className="cumprimento">
                        <img src="/img/relogio.svg" alt="" />
                        <h3>Cumprimento de Prazos:</h3>
                        <h4>Reformas ágeis sem comprometer a excelência</h4>
                    </div>

                    <div className="qualidade">
                        <img src="/img/check.svg" alt="" />
                        <h3>Qualidade Garantida:</h3>
                        <h4>Materiais e execução de alta qualidade.</h4>
                    </div>

                </div>
            </section>


            <section className='quinta-sessao'>
                <div className="restaurante">
                    <img src="/img/restaurante.svg" alt="" />
                </div>

                <div className="contato-home">
                    <h1>Entre em contato</h1>
                    <h2>Pronto para transformar seu ambiente?</h2>
                    <p>Estamos aqui para ajudar você a criar o seu ambiente ideal!
                        Nossa equipe especializada está à disposição para esclarecer
                        dúvidas e apresentar soluções personalizadas para o seu projeto. Vamos conversar?</p>

                    <div className="botao">
                        <button>Clique aqui!</button>
                    </div>
                </div>

            </section>
        </>
    )
}