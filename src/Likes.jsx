import { connect } from 'react-redux';

const Likes = (props) => {

    console.log(props)
  return (
    <div className="button-controls">
      <button>❤ {props.like}</button>
      <button>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
console.log(" mapStateToProps > ", state);
return {
    likes: state.likes
 }
}

export default connect(mapStateToProps)(Likes);
