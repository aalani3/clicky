import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Hero from "./components/Hero";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends:friends,
    score: 0,
    highscore:0,
    unselectedfriends: friends,
    message:"Click an image to begin!"
  };

  selectFriend = id => {
    //If an Image already clicked set Score back to 0
    const findFriend = this.state.unselectedfriends.find(item => item.id === id);
    console.log(findFriend);
    if(findFriend === undefined) {
      this.setState({
        message: "You guessed incorrectly!",
        highscore: (this.state.score > this.state.highscore) ? this.state.score : this.state.highscore,
        score: 0,
        friends: friends,
        unselectedfriends: friends
      })
    }
    else{
      // If an Image is clicked increment Score by 1
      const newFriends = this.state.unselectedfriends.filter(item => item.id !== id);            
      this.setState({ 
          message: "You guessed correctly!",
          score: this.state.score + 1,
          friends: friends,
          unselectedfriends: newFriends
      });
    }
    this.shuffleArray();
  }
  

  //function to shuffle friends array
  shuffleArray = () => {
    for (let i = this.state.friends.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.friends[i], this.state.friends[j]] = [this.state.friends[j], this.state.friends[i]];
    }
    console.log("New Array:  "+this.state.friends[0].id);
    this.setState({ friends });
    
}
  // Map over this.state.friends and render a FriendCard component for each friend object
  
  render() {
    return (
      
        <div>
        
            <Navbar score={this.state.score} 
                    message={this.state.message}
                    highscore={this.state.highscore}
                    />
                <Hero backgroundImage="./assets/images/background.png">
                
                           
                  <h1>Clicky Game!</h1>
                  <h2>Click on an image to earn points, but don't click on any more than once!</h2>
                </Hero>
                <div className="container">
                  <div className="row">
                      <div className="col col-xs-10 col-sm-10 col-md-10 col-lg-10 wrapper">
                      {this.state.friends.map(friend => (
                            <FriendCard
                             
                              id={friend.id}
                              key={friend.id}
                              image={friend.image}
                              selectFriend={this.selectFriend}
                            />
                      
                      ))}
                        </div>
                  </div>
                </div>
          <Footer />
      </div>
    
    );
  }
}

export default App;
