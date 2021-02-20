import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                              src={require("../assets/images/linkedin-background.jpg").default}
                              alt="Terahje Gratkowski"
                              style={{height: '350px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '.3em'}}>Terahje Gratkowski</h2>
                        <h4 style={{color: 'grey'}}>Web Developer/ Junior Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #004e92', width: '50%'}}/>
                        <p>
                        Solutions-driven full-stack web developer with a Web Development Certificate from the University of Arizona. 
                        Motivated by learning new technology and experiencing self-growth. Detailed oriented developer pulling experience 
                        from the customer service industry capitalizing on strong written/ verbal communication skills, problem-solving, 
                        collaboration, and analytical skills. Dedicated team member competent in website conception, design, and production. 
                        Looking forward to leveraging skills as a part of a team to successfully maintain and deploy applications.
                        </p>
                        <hr style={{borderTop: '3px solid #004e92', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Tucson, Arizona</p>
                        <h5>Email</h5>
                        <p>terahje_dev@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #004e92', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                        startYear={2020}
                        endYear={2021}
                        schoolName="University of Arizona: Continuing and Professional Education"
                        schoolDescription="An intensive 6-month boot camp dedicated to designing and building web applications. Skills acquired 
                        include HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node , MySQL, NoSQL, MongoDB, Express, Handlebars.js & React.
                        "
                        />

                        <Education
                            startYear={2014}
                            endYear={2015}
                            schoolName="Brookline College-Tucson"
                            schoolDescription="A holistic approach to business management, touching on various aspects of creating and running a 
                            business. Courses to highlight follow, Word Processing and Presentations, Human Resource Management, Critical Thinking &  
                            Decision making, Accounting, Spreadsheets and Databases, Quality Management, and Marketing.
                            "
                            />
                            <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                        startYear={2015}
                        endYear={2021}
                        jobName="Costco Card Service Representive"
                        jobDescription="Took about 50 inbound calls per day that challenged my critical thinking ability in real time and helped 
                        garner the relationship between the customer and Citi."
                        />

                        <Experience
                            startYear={2010}
                            endYear={2014}
                            jobName="Assistant Head Teller"
                            jobDescription="Provided exceptional service to our customers and carried out vital maintance within the bank including 
                            auditing the vault, other employees, and ATM."
                            />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                            <Skills className="skill-grid"/>
                            

                        {/* <h2>Skills</h2>
                            <div className="skills-list-grid">
                                <div className="skills-list1">
                                    <List>
                                        <ListItem>
                                            <ListItemContent>
                                                <i className="fab fa-js-square" aria-hidden="true"/>
                                                <p>JavaScript</p>
                                            </ListItemContent>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemContent>
                                            <i class="fab fa-html5" aria-hidden="true" />
                                                <p>HTML5</p>
                                            </ListItemContent>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemContent>
                                            <i class="fab fa-css3-alt" aria-hidden="true" />
                                                <p>CSS3</p>
                                            </ListItemContent>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemContent>
                                            <i class="fab fa-node-js" aria-hidden="true" />
                                                <p>NodeJS</p>
                                            </ListItemContent>
                                        </ListItem>

                                    </List>
                                </div>

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
                                
                            </div> */}
                                     

                    </Cell>
                    
                </Grid>
            </div>
        )
    }
}

export default Resume;

