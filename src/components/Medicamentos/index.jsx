import './styled.css';
// import imagemRemedio from '../../img/imagem-de-remedio.jpeg';

function Medicamentos() {
    const Remedio = (
        <div className="card-padrao">
            <imagemRemedio alt="Remédio em caixa com título Devinhouse e a descrição seu uso pode provocar bem estar." className="card-img"/>
            <div className="card-body">
                <h5 className="card-title">Nome do remédio</h5>
                <p className="card-text">Descrição do remédio</p>
                <p className="heart-fav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </p>
                <a href="#" className="botao-padrao">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg> Adicionar
                </a>
            </div>
        </div>
    );

    return (
        // <div>
        //     <div className="container">
        //         <p className="titulo">Listagem de Medicamentos</p>
        //             <div className="listagem">
        //             < Remedio/>
        //             < Remedio/>
        //             < Remedio/>
        //             < Remedio/>
        //             </div>
        //             <div className="listagem">
        //             < Remedio/>
        //             < Remedio/>
        //             < Remedio/>
        //             < Remedio/>
        //             </div>
        //             <div className="listagem">
        //             < Remedio/>
        //             < Remedio/>
        //             < Remedio/>
        //             < Remedio/>
        //             </div>
        //     </div>

        // </div>
        <p> medicamento </p>
    );
}

export { Medicamentos };
