import React from 'react';
import axios from "axios";
import { API_URL } from "../constants";
import { Users } from './Users';
import { Route, Switch, Link } from "react-router-dom";
import { Gallery } from "./Gallery";

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      photos: [],
      popupPhoto: ""
    }

    console.log("This comes from the Constructor");
  }

  FetchPosts = () => {
    axios.get(API_URL + "/posts")
      .then(res => {
        this.setState({
          posts: res.data
        })
      }).catch(err => {
        console.error("Error in: => ", err);
      });
  }

  FetchAlbums = () => {
    axios.get(API_URL + "/photos")
      .then(res => {
        this.setState({
          photos: res.data
        });
      }).catch(err => {
        console.error(err);
      });
  }

  OpenPhoto = (photoUrl) => {
    this.setState({
      popupPhoto: photoUrl
    });
  }

  ClosePhoto = () => {
    this.setState({
      popupPhoto: ""
    });
  }

  componentDidMount() {
    this.FetchPosts();
    this.FetchAlbums();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" render={() => {
            return <Users postslist={this.state.posts} />
          }} />
          <Route path="/gallery" render={() => {
            return <Gallery 
              OpenPhoto={this.OpenPhoto} 
              ClosePhoto={this.ClosePhoto} 
              photoslist={this.state.photos}
              popupPhoto={this.state.popupPhoto}
            />
          }} />
        </Switch>
      </div>
    )
  }
}