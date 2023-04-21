import React from "react";
import { americaMg, athleticoPr, atleticoMg, bahia, botafogo,
    bragantino, corinthians, coritiba, cruzeiro, cuiaba, flamengo,
    fluminense, fortaleza, goias, gremio, internacional, palmeiras,
    santos, saoPaulo, vasco } from "../images";
import '../styles/components/crestsPainel.css'

const CrestsPainel = () => {
    return (
        <>
            <h2>
                BRASILEIRÃO 2023
            </h2>
            <div className="crests_line">
                <img src={ americaMg } alt="Escudo America-MG" />
                <img src={ athleticoPr } alt="Escudo Athletico-PR"/>
                <img src={ atleticoMg } alt="Escudo Atlético-MG"/>
                <img src={ bahia } alt="Escudo Bahia"/>
                <img src={ botafogo } alt="Escudo Botafogo"/>
                <img src={ bragantino } alt="Escudo Bragantino"/>
                <img src={ corinthians } alt="Escudo Corinthians"/>
                <img src={ coritiba } alt="Escudo Coritiba"/>
                <img src={ cruzeiro } alt="Escudo Cruzeiro"/>
                <img src={ cuiaba } alt="Escudo Cuiabá"/>
            </div>

            <div className="crests_line">
                <img src={ flamengo } alt="Escudo Flamengo"/>
                <img src={ fluminense } alt="Escudo Fluminense"/>
                <img src={ fortaleza } alt="Escudo Fortaleza"/>
                <img src={ goias } alt="Escudo Goiás"/>
                <img src={ gremio } alt="Escudo Grêmio"/>
                <img src={ internacional } alt="Escudo Internacional"/>
                <img src={ palmeiras } alt="Escudo Palmeiras"/>
                <img src={ santos } alt="Escudo Santos"/>
                <img src={ saoPaulo } alt="Escudo São Paulo"/>
                <img src={ vasco } alt="Escudo Vasco"/>
            </div>
        </>
    )
}

export default CrestsPainel
