import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Projects 'n such</h1>
        <Card>
          <CardBody>
            <CardText>
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading>
                    <a href="https://ridetrackr.io" target="_blank" rel="noopener noreferrer">RideTrackr</a>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    RideTrackr is a web service (soon-to-be native application)
                    that allows organizations to easily maintain an Uber-like
                    ride system. Users can become a driver for a set period of
                    time and can also request rides as a passenger.
                  </ListGroupItemText>
                  <ListGroupItemText>
                    We (<a href="https://github.com/collindutter" target="_blank" rel="noopener noreferrer">
                      Collin Dutter{' '}
                    </a>{' '}
                    and myself) created RideTrackr with a market of fraternities
                    in mind. Some fraternities have a designated driver system
                    on the weekends and we felt that they would be a perfect
                    candidate for our service.
                  </ListGroupItemText>
                  <ListGroupItemText>
                    RideTrackr is a completely serverless application, utilizing
                    AWS Lambda as the core of our API, along with many other AWS
                    services.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>
                    <a href="https://cpe305spring17.github.io/spring2017-project-ethanharlig/" target="_blank" rel="noopener noreferrer">
                      Budget Brews
                    </a>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    Budget Brews is a site designed to provide crowdsourced data
                    of beer prices. As a college student, I was always searching
                    for the cheapest 30-pack of cheap beer, and I thought that
                    the best way to find it was to crowdsource it.
                  </ListGroupItemText>
                  <ListGroupItemText>
                    Users can create accounts, update beer prices,
                    upvote/downvote reports of prices to show their validity.
                    Budget Brews is also a serverless application, employing
                    many AWS services.
                  </ListGroupItemText>
                  <ListGroupItemText>
                    When I designed this site, I was still a web development
                    newbie, so please take that into consideration if you look
                    at the code. The code for Budget Brews can be found{' '}
                    <a href="https://github.com/ethanharlig/Budget-Brews" target="_blank" rel="noopener noreferrer">
                      here
                    </a>{' '}
                    and the documentation can be found{' '}
                    <a href="https://cpe305spring17.github.io/spring2017-project-ethanharlig/views/info.html" target="_blank" rel="noopener noreferrer">
                      here
                    </a>.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>
                    <a href="https://github.com/ethanharlig/Reddit-Slackbot" target="_blank" rel="noopener noreferrer">
                      Reddit Slackbot
                    </a>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    This Reddit Slackbot allows users to mention the bot in a
                    Slack channel, and the bot will respond with different
                    Reddit posts from arguments provided by the user. The bot,
                    unfortunately, it not serverless, and runs on an AWS EC2
                    server.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>
                    <a href="https://github.com/ethanharlig/Reddit-Notifications" target="_blank" rel="noopener noreferrer">
                      Reddit Notifications
                    </a>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    Reddit Notifications was built to notify users when posts
                    that meet certain criteria are posted on certain subreddits.
                  </ListGroupItemText>
                  <ListGroupItemText>
                    Specifically, when I was building a PC, I wanted to be
                    alerted when new deals were posted on{' '}
                    <a href="https://reddit.com/r/buildapcsales" target="_blank" rel="noopener noreferrer">
                      r/buildapcsales
                    </a>{' '}
                    so that I could get the best deals on my parts. This
                    application runs on an AWS EC2 server.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>
                    <a href="https://github.com/ethanharlig/Website" target="_blank" rel="noopener noreferrer">Website</a>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    When creating the RideTrackr, we were unsure whether to use
                    Angular or ReactJS for our frontend. Ultimately, we went
                    with Angular, but I was left with an urge to still figure
                    out how ReactJS worked and how powerful it was. That led to
                    the creation of this site, where I can talk about myself and
                    learn about ReactJS in the process.
                  </ListGroupItemText>
                  <ListGroupItemText>
                    This website is still a work in progress, as I am always
                    trying to teach myself new technologies, and I want to get
                    familiar with the features of ReactJS. The website is hosted
                    on AWS S3 and CloudFront.
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
