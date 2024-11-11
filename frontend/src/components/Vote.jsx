import React from 'react'
import './Vote.css';

class Vote extends React.Component{
  constructor(props){
    super(props)
    this.state={
      parties:[
        {name:"bjp", vote:0},
        {name:"aap", vote:0},
        {name:"inc", vote:0},
        {name:"cpi", vote:0}

      ]
    }
  }

  vote(i){
    let newPartyVote = this.state.parties;
    console.log("click on = "+newPartyVote[i].name);

    newPartyVote[i].vote++;

    this.setState({
      parties:newPartyVote
    });
  }

  render(){
    return(
      <div>
        <h1>vote your party.</h1>
        <div className='parties'>
          {
            this.state.parties.map((party,i)=>
              <div key={i} className='party'>
                <div className='voteCount'>
                  {party.vote}
                </div>

                <div className='partyName'>
                  {party.name}
                </div>

                <button onClick={this.vote.bind(this, i)}>click here</button>

              </div>
            )
          }
        </div>
      </div>
    )
  }
}

// const Vote = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default Vote
