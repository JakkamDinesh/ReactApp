import { useNavigate} from "react-router-dom";
import "./App.css";
function AppCard(props) {
    let navigate = useNavigate(); 
    const routeChange = (data) =>{ 
        let path = `/details`;
        navigate(path,{
            state: {
                data
            }
          });
    }
  return (
    <button className="card" onClick={() => routeChange(props.Data)} >
        <h2 className="Header" >{props.Data.title}</h2>
        <img className="ProfileImg" src={props.Data.avatar} alt="" />
        <div className="line" ></div>
        <p className="textContent" >{props.Data.body}</p>
        <div className="likeContent" >
            <div className="like"  >Likes - {props.Data.likes}</div>
            <div className="Comment"  >Comments - {props.Data.comments}</div>
        </div>
    </button>
  );
}
export default AppCard;
