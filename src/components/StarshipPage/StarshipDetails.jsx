import React, {Component} from 'react'
import {getDetails}  from '../../services/sw-api'
import {Link} from 'react-router-dom'

class StarshipDetails extends Component {
    state = { 
        url: this.props.location.state.starships.url,
        starshipDetails: {},
     }

     async componentDidMount(){
         const starshipDetails =await getDetails(this.state.url);
         this.setState({starshipDetails})
     }

    render() { 
        const {starshipDetails} =this.state
        return (
            <div>
            {starshipDetails.name ? (
              <>
                <h2>Name: {starshipDetails.name}</h2>
                <h2>Model: {starshipDetails.model}</h2>
                <Link
                  to={{
                    pathname: "/",
                  }}
                >
                  Return to home
                </Link>
              </>
            ) : (
              <>
                <p>Loading starship details...</p>
              </>
            )}
          </div>
        );
      }
    }
      
 
export default StarshipDetails;