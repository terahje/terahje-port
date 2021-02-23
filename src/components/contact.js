import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell className="conBackGrid" col={6}>
                        <div className="con-main">
                            <h2 style={{ width: '55%', margin: 'auto', color:'#fff', backgroundColor:'rgba(0, 23, 43, 0.8)', borderRadius: '5px'}}>Let's Work!</h2>
                            <img
                            src={require("../assets/images/profile-pic.jpg").default}
                            alt="Terahje Gratkowski"
                            className= "avatar-img"
                            style={{height: '300px', padding: '10px 10px 10px 10px'}}
                            />
                            {/* <img 
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px', padding: '10px 10px 10px 10px'}}
                            /> */}
                            <p style={{ width: '85%', margin: 'auto', padding: '1em', color:'#fff', backgroundColor:'rgba(0, 23, 43, 0.8)', borderRadius: '5px', fontSize:'18px'}}>
                            On this journey, I've been fortunate enough to work with some great people thus far and expand on the foundation laid during the Bootcamp. 
                            The feeling of collaboration reminds me of my days' sports, where I can be apart of something greater than myself. If you've made it this 
                            far on my page, Thank You sincerely. Even better if you would like to work together on a future project, please reach out via email or the 
                            following links.
                            </p>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                {/* make email button*/}
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                terahje.dev@gmail.com
                            </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                <a href="https://www.linkedin.com/in/terahje-gratkowski/" rel="noopener noreferrer" target="_blank">in/terahje-gratkowski</a>
                            </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-github-square" aria-hidden="true" />
                                <a href="https://github.com/terahje" rel="noopener noreferrer" target="_blank">/terahje</a>
                            </ListItemContent>
                            </ListItem>


                        </List>
                        </div>
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;

