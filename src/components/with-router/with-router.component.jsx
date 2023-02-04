import { useLocation, useNavigate, useParams } from 'react-router-dom';

const WithRouter = WrappedComponent => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <WrappedComponent {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};

export default WithRouter;
