import React, { Component } from 'react';
import gmailIcon from '../assets/images/Gmail-Logo.png';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell className="conBackGrid" col={6}>
                        <div className="con-main">
                            <h2 style={{ width: '55%', padding:'25px', margin: 'auto', color:'#fff', backgroundColor:'rgba(0, 23, 43, 0.4)', borderRadius: '5px', fontFamily: 'var(--font-family_title)'}}>Let's Work!</h2>
                            <iframe src="https://giphy.com/embed/WZ4M8M2VbauEo" width="480" height="274" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                            {/* className= "avatar-img"
                            style={{height: '300px', padding: '10px 10px 10px 10px'}}
                            /> */}
                            {/* <img 
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px', padding: '10px 10px 10px 10px'}}
                            /> */}
                            <p style={{ width: '85%', padding: '10px 10px 20px 10px',margin: 'auto', padding: '1em', color:'#fff', backgroundColor:'rgba(0, 23, 43, 0.5)', borderRadius: '5px', fontSize:'1.5rem', fontFamily: 'var(--font-regular)', fontWeight: '300', textAlign: 'justify', margin: '2rem auto'}}>
                            On this journey, I've been fortunate enough to work with some great people thus far and excited to see where this path leads. 
                            The feeling of collaboration reminds me of my days' in sports, where I can be apart of something greater than myself. If you've made it this 
                            far on my page, Thank You sincerely. Even better if you would like to work together on a future project, please reach out via email or the 
                            following links.
                            </p>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div className='contact-title'>
                            <h2>Contact Me</h2>
                            </div>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                {/* make email button*/}
                            <ListItemContent style={{fontSize: '3.5rem', fontFamily: 'var(--font-family_regular)'}}>
                                <img src={gmailIcon} className="gmail" alt='Gmail Logo' style={{height: '4rem', width: '6rem', margin: '-.1rem 4.5rem 0px -0.8rem'}}/>
                        <a className='btn btn-outline-warning btn-lg' href="mailto:terahje.dev@gmail.com" target="_blank">terahje.dev@gmail.com</a>
                            </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '3.5rem', fontFamily: 'var(--font-family_regular)'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true" style={{color: "#c32aa3"}}/>
                                <a href="https://www.linkedin.com/in/terahje-gratkowski/" rel="noopener noreferrer" target="_blank">in/terahje-gratkowski</a>
                            </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '3.5rem', fontFamily: 'var(--font-family_regular)'}}>
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

