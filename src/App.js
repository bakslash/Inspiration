import './App.css';
import Routes from './routes'
import {useLocation, useNavigate} from 'react-router'

export function withRouter( Child ) {
  return ( props ) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Child { ...props } navigate={ navigate } location={ location } />;
  }
}
function App() {
  return (
   <>
      <Routes />
   </>
  );
}

export default withRouter(App);
