
import { useLocation,Navigate} from 'react-router-dom';
import { UseCurrentuser } from '@/Hooks/UseAuth';



function Protected({component: Component,isProtected, role}) {

    const location = useLocation();

    const { data:user, isError, isLoading } = UseCurrentuser();


    if(!isProtected){
        if (user) {
        return <Navigate to="/dashboard" replace />;
        }
        return <Component />;
    }

    if(isError || !user){
        return <Navigate to={"/login"} state={{ from: location }} replace/>
    }

    if(role && user.role !== role){
        <Navigate to={'/dashboard'} replace/>
    }

    return <Component />
}

export default Protected