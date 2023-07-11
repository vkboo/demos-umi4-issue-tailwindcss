import { FC, useEffect } from "react";
import { Button } from "antd";
import { useParams, useLocation, useSearchParams, useMatch, request, useClientLoaderData } from "umi";

const NewsId: FC = (props) => {

    const data = useClientLoaderData();


    const params = useParams();
    const location = useLocation();
    const [query, setQuery] = useSearchParams();
    const match = useMatch('/News/*');

    useEffect(() => {
        console.log(process.env)
        console.log('>>>', data)
        // console.log({
        //     params,
        //     location,
        //     query,
        //     match,
        // })
    }, [data]);

    const onClick = () => {
        const name = query.get('name');

        console.log({ name, location })

        setQuery({ name: 'vvv', age: '8' });
    };

    return <div>NewsId: {params['*']}
        <Button type="primary" onClick={onClick}>test</Button>
    </div>
};

export default NewsId;


export const clientLoader = async () => {
    const res = await request('http://jsonplaceholder.typicode.com/users');
    console.log('res', res);
    
    return res;
}