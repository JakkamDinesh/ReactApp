import "./App.css";
import { useLocation} from "react-router-dom";
function AppCardContent(props) {
    const { state } = useLocation();
    console.log(state);
  return (
    <div className="container">
        <div className="cardContent">
            <h2 className="Header" >{state.data.title}</h2>
            <img className="ProfileImg" src={state.data.avatar} alt="" />
            <div className="line" ></div>
            <p className="textAllContent" >{state.data.body}</p>
            <div className="likeContent" >
                <div className="like"  >Likes - {state.data.likes}</div>
                <div className="Comment"  >Comments - {state.data.comments}</div>
            </div>
        </div>
    </div>
  );
}
export default AppCardContent;
