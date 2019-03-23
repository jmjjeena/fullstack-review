import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    $.ajax({
      url: `/repos`,
      type: 'GET',
      data:JSON.stringify({username:term}),
      dataType : "text",
      contentType: "application/json",
      success: function(term) {
        this.setState({
          repos: term
        })
      },
      error: function(error) {
        console.log(`Error ${error}`)
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    console.log('is dev server even on')
    $.ajax({
      url: `/repos`,
      type:'POST',
      data:JSON.stringify({username:term}),
      dataType : "text",
      contentType: "application/json",
      success: console.log('Got the term: ', term)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
