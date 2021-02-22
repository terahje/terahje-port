import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Terahje Gratkowski</h2>
                        <img 
                         src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                         alt="avatar"
                         style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries.
                        </p>
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
                                terahje_dev@gmail.com
                            </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                <a href="https://www.linkedin.com/in/terahje-gratkowski/" rel="noopener noreferrer" target="_blank">LinkedIn Profile</a>
                            </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-github-square" aria-hidden="true" />
                                <a href="https://github.com/terahje" rel="noopener noreferrer" target="_blank">Link to My GitHub</a>
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
