import { useLocation, NavLink } from 'react-router-dom';

export default function PagesToggler (props: any) {
    const pagesQuantity: number = props.pagesQuantity;
    const location = useLocation();

    const pages = Array.from({ length: pagesQuantity }, (_, index) => (
        <NavLink key={index} to={`/sold/${index + 1}`}>
            <li className={
                `${location.pathname === `/sold/${index + 1}` ? 
                    'underline' 
                    : ''}
                mx-2`
            }>
                <span>{index + 1}</span>
            </li>
        </NavLink>
    ));
    
    console.log(pages);

    return (
        <div id='PagesToggler' className=''>
            <ul className='flex py-2 list-none justify-center font-bebasFont text-2xl'>
                {pages}
            </ul>
        </div>
    );
}