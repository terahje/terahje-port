import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import background from "../assets/images/aboutBodyBackground.jpg";

class About extends Component {
    render() {
        return(
            <div className="mdl-layout__content">
            <Grid className="about-back" style={{ backgroundImage: `url(${background})`}}>
                <Cell className="left-main-col" col={4}></Cell>
                <Cell className="about-main-col" col={4}>
                    <div className="about-header">
                       <h1 style={{fontSize: '50px', fontFamily: 'Shippori Mincho'}}>About Me</h1>
                       </div>

                </Cell>
                <Cell className="right-main-col" col={4}></Cell>

                <Cell className="left-main-col" col={1}></Cell>
                <Cell className="about-body-col" col={10} style={{fontSize: '30px', fontFamily: 'Shippori Mincho'}}>
                    <img
                          src={require("../assets/images/profile-pic2.jpg").default}
                          alt="Terahje Gratkowski in polo"
                          className= "about-img"
                      />

                  

                    <div className="about-body">
                    <p>
				Welcome and thank you for your time.  My name is Terahje Gratkowski and this webpage 
            will be the embodiment of all the skills earned through the trials and successes that are a 
            coding bootcamp.  
                </p>
                <p>
            Growing up in Harrisburg, Pa, my life was more sports than academics.  While I love sports and long for
            the competition, I've also had a deep love for technology and its various uses.  When I found coding it was
            an immediate attraction, as I love the peeling back the layers of things, we use day to day but fail to understand
            how they work.  I decided to start down this path because I think the future is heavily reliant on people to write 
			and maintain the AI and robotic network that could be the next industrial boom.
                </p>
                <p>
            I love that coding gives me the chance to come across obstacles and overcome them to reach your goal.  I love that it 
            allows you to work with a team to achieve a common goal.  I'm excited to see where this path leads too and feel the future
            is as bright as our Tucson Sun.
				</p>
                  <a className="badgeLink" href="https://arizona.badgr.com/public/assertions/hgg-sjWEQuW6nKi-nPoktg" target="_blank"><img
                          src={require("../assets/images/badge.jpg").default}
                          alt="badge for full-stack web certificate"
                          className= "aboutBadge-img"
                      /></a>
        
                    </div>
                </Cell>
                <Cell className="right-main-col" col={1}></Cell>

                       
                       
            </Grid>
            </div>
        )
    }
}

export default About;

