import React from "react";
import '../styles/components/leaderboardFooter.css'

const FooterLeaderboard = () => {
    return (
        <footer>
            <div className="square_icon lib_color" />
            <div className="leaderboard_sub">Libertadores</div>
            <div className="square_icon preLib_color" />
            <div className="leaderboard_sub">Pré-Libertadores</div>
            <div className="square_icon sulAmerican_color " />
            <div className="leaderboard_sub">Sul-Americana</div>
            <div className="square_icon standing_color " />
            <div className="leaderboard_sub">Manutenção</div>
            <div className="square_icon relegation_color" />
            <div className="leaderboard_sub">Rebaixamento</div>
            
        </footer>
    )
}

export default FooterLeaderboard
