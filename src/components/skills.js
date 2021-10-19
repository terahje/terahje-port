import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4} phone={2}>
            {/* tried to add icon of skills but did not work, will come back later to fix */}
          <i className="fab fa-js-square" aria-hidden="true"/>
          <p style={{fontSize: '25px'}}>JavaScript</p> 
                

          {/* <i className="fab fa-html5" aria-hidden="true" /> */}
          <p style={{fontSize: '25px'}}>HTML5</p>

          <i class="fab fa-css3-alt" aria-hidden="true" />
          <p style={{fontSize: '25px'}}>CSS3</p>

          <i class="fab fa-node-js" aria-hidden="true" />
          <p style={{fontSize: '25px'}}>NodeJS</p>
        </Cell>
        <Cell col={4} phone={2}>
          <i className="fab fa-js-square" aria-hidden="true"/>
          <p style={{fontSize: '25px'}}>React</p>

          {/* <i class="fab fa-html5" aria-hidden="true" /> */}
          <p style={{fontSize: '25px'}}>Python</p>

          <i class="fab fa-css3-alt" aria-hidden="true" />
          <p style={{fontSize: '25px'}}>AWS</p>

          <i class="fab fa-node-js" aria-hidden="true" />
          <p style={{fontSize: '25px'}}>MongoDB</p>
          
        </Cell>
        <Cell col={4} phone={2}>
          <i className="fab fa-js-square" aria-hidden="true"/>
          <p style={{fontSize: '25px'}}>SQL/ NoSQL</p> 

          {/* <i className="fab fa-html5" aria-hidden="true" /> */}
          <p style={{fontSize: '25px'}}>Bootstrap</p>

          <i className="fab fa-css3-alt" aria-hidden="true" />
          <p style={{fontSize: '25px'}}>Flask</p>

          <i className="fab fa-node-js" aria-hidden="true" />
          <p style={{fontSize: '25px'}}>GraphQL</p>
          
        </Cell>
      </Grid>
    )
  }
}

export default Skills;

{/* 
                                <div className="skills-list2">
                                    <List>
                                        <ListItem>
                                            <ListItemContent>
                                                <i className="fab fa-js-square" aria-hidden="true"/>
                                                <p>React</p>
                                            </ListItemContent>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemContent>
                                            <i class="fab fa-html5" aria-hidden="true" />
                                                <p>Python</p>
                                            </ListItemContent>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemContent>
                                            <i class="fab fa-css3-alt" aria-hidden="true" />
                                                <p>AWS</p>
                                            </ListItemContent>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemContent>
                                            <i class="fab fa-node-js" aria-hidden="true" />
                                                <p>MongoDB</p>
                                            </ListItemContent>
                                        </ListItem>

                                    </List>
                                </div>
                                 */}
                        