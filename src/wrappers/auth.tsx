import { Navigate, Outlet } from 'umi'

export default () => {
    const isLogin = false;
    if (isLogin) {
        return <div className="auth-xxx">
            <Outlet />
        </div>;
    } else {
        return <Navigate to="/login" replace />;
    }
}