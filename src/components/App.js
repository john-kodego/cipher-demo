import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// 5RWGKqwsoOJJPlVcm2N93R7vRBfwceTMDrX0mbhXaCs
// Authorization: Client-ID 5RWGKqwsoOJJPlVcm2N93R7vRBfwceTMDrX0mbhXaCs
// https://api.unsplash.com/
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // async/await
    const response = await axios.get(
      'https://api.unsplash.com/search/photos', 
      {
        headers: {
          Authorization: 'Client-ID 5RWGKqwsoOJJPlVcm2N93R7vRBfwceTMDrX0mbhXaCs'
        },
        params: {
          query: term,
          per_page: 20
        }
      }
    );
    this.setState({ images: response.data.results });
    // console.log(response.data.results);
      
    // Promise syntax
    // axios.get(
    //   'https://api.unsplash.com/search/photos', 
    //   {
    //     headers: {
    //       Authorization: 'Client-ID 5RWGKqwsoOJJPlVcm2N93R7vRBfwceTMDrX0mbhXaCs'
    //     },
    //     params: {
    //       query: term
    //     }
    //   }
    // )
    // .then( 
    //   (response) => {
    //     console.log(response.data.results);
    //   } 
    // );
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchBar onSubmit={this.onSearchSubmit} label="Picture Search" />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
