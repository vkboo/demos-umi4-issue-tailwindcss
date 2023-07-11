import { Navigate, Outlet } from 'umi';

export default function Auth() {
    const a = 0;
    return <div className='auth-xxx'>
        {a > 0 ? <Outlet /> : <Navigate to={'/home'} replace />}
    </div>
}