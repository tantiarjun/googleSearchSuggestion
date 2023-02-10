import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showItemInSearchBar = (id, suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bgContainer">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="googleImage"
            alt="google logo"
          />
          <div className="suggestionItemContainer">
            <div className="searchBar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="searchIcon"
                alt="search icon"
              />
              <input
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                placeholder="Search Google"
                className="inputElement"
              />
            </div>
            <ul className="suggestionItemList">
              {searchResult.map(eachItem => (
                <SuggestionItem
                  suggestionDetails={eachItem}
                  showItemInSearchBar={this.showItemInSearchBar}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
