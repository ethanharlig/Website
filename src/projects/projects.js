import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
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
                    <a href="https://ridetrackr.io">RideTrackr</a>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    RideTrackr is a web service (soon-to-be native application)
                    that allows organizations to easily maintain an Uber-like
                    ride system. Users can become a driver for a set period of
                    time and can also request rides as a passenger.
                  </ListGroupItemText>
                  <ListGroupItemText>
                    We (<a href="https://github.com/collindutter">
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
                    <a href="https://cpe305spring17.github.io/spring2017-project-ethanharlig/">
                      Budget Brews
                    </a>
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                      Budget Brews is 
                  </ListGroupItemText>
                  <ListGroupItemText>
                    The code for Budget Brews can be found{' '}
                    <a href="https://github.com/ethanharlig/Budget-Brews">
                      here.
                    </a>
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>Reddit Slackbot</ListGroupItemHeading>
                  <ListGroupItemText />
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>
                    Reddit Notifications
                  </ListGroupItemHeading>
                  <ListGroupItemText />
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>Website</ListGroupItemHeading>
                  <ListGroupItemText />
                </ListGroupItem>
              </ListGroup>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
