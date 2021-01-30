import React from "react";
import './App.css';
import {getArticles} from "./api";
import {Container,Header} from "semantic-ui-react";
import ArticleList from "./components/ArticleList";
import SearchBar from "./components/SearchBar";

class BasePage extends React.Component {
  state={
    articles:[],
    apiError:"",
    searchTopic:"",
    totalResults:"",
    loading:false,
    token:false,
  }
  searchForTopic=async(topic)=> {
    try{
      this.setState({loading:true});
      const response=await getArticles(topic);
      this.setState({articles:response.articles,
      searchTopic:topic,
    totalResults:response.totalResults});
    }catch(error){
      this.setState({apiError:"Could not Find any Articles"});

    }
    this.setState({loading:false});
  }
  render(){
  return (
   <Container  className="container">
     <Header as="h2" style={{textAlign:"center",margin:20}}>

Apna Akhbaar
     </Header>
     <SearchBar searchForTopic={this.searchForTopic}/>
     {this.state.loading &&(
       <p style={{textAlign:"center"}}>Searching For Articles....</p>
     )}
{this.state.articles.length>0&&(
  <Header as="h4" style={{textAlign:"center",margin:20}}>
    Found{this.state.totalResults} articles on "{this.state.searchTopic}"
  </Header>
)}


     {this.state.articles.length>0 && <ArticleList articles={this.state.articles}/>}
     {this.state.apiError && <p>Could not find any article. Please try again!</p>}
    
   </Container>
  );
 
  }
}

export default BasePage;
