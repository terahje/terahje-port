import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div className="mdl-layout__content" style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-page-back">
                    <Cell col={12}>
                    <img
                    src={require("../assets/images/profile-pic.jpg").default}
					alt="Terahje Gratkowski"
                    className= "avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full-Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | Pyton | AWS | NodeJS | Express | MongoDB</p>

                    <div className="social-links">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/terahje-gratkowski/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/terahje" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;