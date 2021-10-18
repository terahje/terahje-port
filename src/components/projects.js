import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import cuttingEdge from '../assets/images/cutEdge.jpg'
import wizier from '../assets/images/wizier-image.jpg'
import pythonNews from '../assets/images/pythonNews.jpg'
import aws from '../assets/images/awsDT.jpg'
import budget from '../assets/images/budget-tracker-image.jpg'
import nts from '../assets/images/ntscreenshot.jpg'
import booWedding from '../assets/images/landingP.jpg'
import busAge from '../assets/images/businessAge.jpg'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">
                {/* Project 1 in React*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle className="cuttingTitle" style={{color: '#fff', height: '176px', background: `url(${cuttingEdge}) center/cover`}} >The Cutting Edge - Final Cut</CardTitle>
                            <CardText>
                            An App that a user can go through hairstyles provided, then contact a hairstylist to provide service.

                            </CardText>
                            <CardText>
                                <strong>Technolgies:</strong> JavaScript, Node.js, React & React Bootstrap, MongoDb, Express, Nodemon, GraphQl, Concurrently, Heroku
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/terahje/the-cutting-edge-final-cut" target="_blank">GitHub</Button>
                                
                                <Button colored href="https://the-cutting-edge-final-cut800.herokuapp.com" target="_blank">Live Demo</Button>
                            </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* End of Project 1 in React*/}
                {/* Project 2 in React */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle className="awsThought" style={{color: '#fff', height: '176px', background: `url(${aws}) center/cover`}} >AWS - Deep Thoughts</CardTitle>
                            <CardText>
                            This full-stack application utilizes a Node.js back-end and React front-end to allow a user to share thoughts and upload images to better bring their ideas to life.

                            </CardText>
                            <CardText>
                                <strong>Technolgies:</strong> JavaScript, Node.js, React, AWS, EC 2(Ubuntu), NGINX, DynamoDb/ S3
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/terahje/aws-thought" target="_blank">GitHub</Button>
                                
                                <Button colored href="http://54.210.39.149/" target="_blank">Live Demo</Button>
                            </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* End of Project 2 in React */}
                {/* Project 3 in React */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle className="booWedding" style={{color: '#fff', height: '176px', background: `url(${booWedding}) center/cover`}} >Boo Wedding</CardTitle>
                            <CardText>
                            My first passion project, this application came to life using React to build the front-end pages. A wedding website for my forthcoming wedding, each page is to share 
                            our story with our loved ones.
                            </CardText>
                            <CardText>
                                <strong>Technolgies:</strong> JavaScript, Node.js, React, CSS, React-Bootstrap, React-MDL, Rumess/react-flip-countdown
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/terahje/boo-wedding" target="_blank">GitHub</Button>
                                
                                <Button colored href="https://rtg-wedding.herokuapp.com/" target="_blank">Live Demo</Button>
                            </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* End of Project 3 in React */}
                </div>    
          )} else if(this.state.activeTab === 1) {
            return (
                // javascript
                <div className="projects-grid">
                {/* Project 1 in JS */}

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: `url(${wizier}) center/cover`}} >Wizier</CardTitle>
                                <CardText>
                                A flash card game that can help with multiple subjects. Using API's, a user will pick a subject and be prompted a series of questions.  Don't forget to leave your high score!
                                </CardText>
                                <CardText>
                                    <strong>Technolgies:</strong> JavaScript, HTML5, CSS3, jQuery, Sweet Alerts
                                </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/terahje/group-assignment" target="_blank">GitHub</Button>
                                
                                <Button colored href="https://terahje.github.io/group-assignment" target="_blank">Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 2 in JS */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: `url(${budget}) center/cover`}} >Budget Tracker</CardTitle>
                                <CardText>
                                This budget tracker can be depended on to keep track of your expenses whether your on or offline.
                                </CardText>
                                <CardText>
                                    <strong>Technolgies:</strong> JavaScript, Node.js, Handlebars.js, Express & Sequelize, Heroku
                                </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/terahje/budget-tracker-pwa" target="_blank">GitHub</Button>
                                
                                <Button colored href="https://budget-tracker800.herokuapp.com" target="_blank">Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        {/* Project 3 in JS */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: `url(${nts}) center/cover`}} >Note Taker</CardTitle>
                                <CardText>
                                A Note Taker app that allows you to keep track of vital notes in an easy-to-view manner. You can easily add notes throughout the day and easily delete those you've already completed.
                                </CardText>
                                <CardText>
                                    <strong>Technolgies:</strong> JavaScript, Node.js, HTML, CSS, Express, Heroku
                                </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/terahje/note-taker-taker" target="_blank">GitHub</Button>
                                
                                <Button colored href="https://safe-refuge-35917.herokuapp.com/" target="_blank">Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 4 in JS */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: `url(${busAge}) center/cover`}} >Business Agency</CardTitle>
                                <CardText>
                                This project was for a mock business agency so the site has a sleek design. The subtle animation on the landing page greets the user right away with what this site is offering. 
                                This project also showed how to input a video with custom controls, so the time of the video syncs with the red line underneath. 
                                </CardText>
                                <CardText>
                                    <strong>Technolgies:</strong> JavaScript, HTML, CSS
                                </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/terahje/BusinessAgency" target="_blank">GitHub</Button>
                                
                                <Button colored href="https://terahje.github.io/BusinessAgency/" target="_blank">Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                            </CardMenu>
                        </Card>
                       
             </div>
            )
          } else if(this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                        {/* Project 1 in Python */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px',  background: `url(${pythonNews}) center/cover`}} >Python Newsfeed</CardTitle>
                                    <CardText>
                                    This social media application takes advantage of the power of Python and uses the Flask server to manage routes within MySQL. Create an account, and share the latest news about your favorite tech by posting a link to the news article. That post can be commented on, and upvoted amongst the community.
                                    </CardText>
                                    <CardText>
                                        <strong>Technolgies:</strong> JavaScript, HTML5, CSS3, Python, MySQL, Flask, Jinja
                                    </CardText>
                
                                <CardActions border>
                                    <Button colored href="https://github.com/terahje/python-newsfeed">GitHub</Button>
                                    
                                    <Button colored href="https://just-tech-news800.herokuapp.com/">Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                            </CardMenu>
                            </Card>
             </div>
            )
          }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Python</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;

