import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, showItemInSearchBar} = props

  const {suggestion, id} = suggestionDetails

  const onClickItem = () => {
    showItemInSearchBar(id, suggestion)
  }

  return (
    <li className="suggestionItem">
      <div className="nameContainer">
        <p className="name">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          onClick={onClickItem}
          className="arrowLogo"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
