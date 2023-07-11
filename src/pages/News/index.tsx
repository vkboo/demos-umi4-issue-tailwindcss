import { Outlet, Link, useParams, NavLink, useRouteData, useRouteProps } from 'umi';

const News = () => {
    const params = useParams();
    const routeData = useRouteData();
    const routeProps = useRouteProps();
    

    return <div>News:

        <ul>
            {[100, 200, 300].map(e => <li key={e}>
                <NavLink
                    style={({ isActive }) => {
                        return isActive
                            ? { background: 'pink' }
                            : {}
                    }}
                    to={`/News/${e}`}
                >
                    {e}
                </NavLink>
            </li>)}
        </ul>
        <Outlet />
    </div >
};

News.wrappers = ['@/wrappers/auth']

export default News;