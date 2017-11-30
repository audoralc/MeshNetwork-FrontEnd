/*
 *
 * UserProfile
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// relative imports
import Header from 'components/Header';

import './style.css';
import './styleM.css';

export default class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      skills: '',
      space: '',
      events: '',
      upcoming: '',
      loading: true,
    };
    
    this.path = this.props.location.pathname;
    this.userIdIndex = this.props.location.pathname.length - 1;
    this.userID = this.path[this.userIdIndex];
  }

  componentWillMount() {
    if (isNaN(this.userID)) {
      this.props.history.push('/');
    } 
    else {
      this.loadUser(localStorage.getItem('token'));
    }
  }

  loadUser = (token) => {
    if (!token) {
      return;
    }
    fetch(`http://localhost:8000/api/user/${this.userID}`, {
        headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => 
      response.json()
    )
    .then(getUser => {
      if (!getUser.error) {
        this.setState({	
          user: getUser.user,
          skills: getUser.skills,
          space: getUser.space,
          events: getUser.events,
          upcoming: getUser.upcoming,
          loading: false,
       });
      } 
      else if (getUser.error) {
        this.props.history.push('/');
      }
    })
    .catch(error => {
      alert(`error!: ${error.message}`);
    })
  }

  loadEvents = (spaceId) => {
    fetch(`http://localhost:8000/api/events`, {
        headers: { Authorization: `Bearer ${token}` },
    })
  }

  loading = () => this.state.loading;

  render() {
    const user = this.state.user;
    const skills = this.state.skills;
    const space = this.state.space;
    const events = this.state.events;
    const upcoming = this.state.upcoming;

    return (
      this.loading()
        ?
          <h1>spinner here!</h1>
        :
          <div className={"UP-container"}>
            <Helmet title="UserProfile" meta={[{ name: 'description', content: 'Description of UserProfile' }]} />
            <Header />
            <div className="mainProfile">
              <section className="profileHeader">
                <img
                  src="https://cdn-images-1.medium.com/fit/c/80/80/0*GCZdPPcsr8kr0q8x.png"
                  alt="avatar"
                />
                <ul className="profileInfo">
                  <li className="profileName">{user.name}</li>
                  <li className="profileTitle">title</li>
                  <li className="profileSpace">{space.name}</li>
                  <li className="profileSocial">social</li>
                </ul>
              </section>

              <div className="profileColumns">

                <aside className="profileColumnLeft">

                  <h3 style={{textAlign:'center'}}>Skills</h3>
                  {this.state.skills && <Skills skills={skills} />}

                  <div className="profileMentorship">
                  </div>

                  <div className="profileEvents">
                    upcoming events
                    {this.state.events && <Events history={this.props.history} events={events} />}
                  </div>

                </aside>

                <div className="profileColumnRight">

                  <div className="profileBio">
                    <h1>About name</h1>
                    <div className="profileBioContent">
                      <p>{user.bio}</p>
                    </div>
                  </div>

                  <aside className="profileAttending">
                    <h2>Attending</h2>
                    {this.state.upcoming && <Attending history={this.props.history} attending={upcoming} />}
                  </aside>

                </div>
              </div>
            </div>

            <footer>

            </footer>

          </div>
    );
  }
}

UserProfile.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const Skills = (props) => {
  const tags = props.skills.map((skill, index) => (
    <li key={`${skill.name}${index}`} className="profileTag">
      {skill.name}
    </li>
  ))
  return ( 
    <ul className="profileTagCloud">
      {tags}
    </ul>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

const Events = (props) => {
  const events = props.events.map((event, index) => (
    <li 
      onClick={() => {props.history.push(`/EventDetail/${event.id}`)}}
      key={`${event.title}${index}`} 
      className="EventTag"
    >
      {event.title}
    </li>
  ));
  return ( 
    <ul className="profileTagCloud">
      {events}
    </ul>
  );
};

Events.propTypes = {
  events: PropTypes.array.isRequired,
};

const Attending = (props) => {
  const attendingEvent = props.attending.map((attend, index) => (
    <li 
      onClick={() => {props.history.push(`/EventDetail/${attend.id}`)}}
      key={`${attend.title}${index}`} 
      className="profileAttendingItem"
    >
      {attend.title}
    </li>
  ))
  return ( 
    <ul className="profileAttendingContent">
      {attendingEvent}
    </ul>
  );
};

Attending.propTypes = {
  attending: PropTypes.array.isRequired,
};