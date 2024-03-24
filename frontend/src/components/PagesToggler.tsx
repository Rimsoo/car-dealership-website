import { useLocation, NavLink } from 'react-router-dom';

export default function PagesToggler (props: any) {
    const pagesQuantity: number = props.pagesQuantity;

    const pages = Array.from({ length: pagesQuantity }, (_, index) => (
        <NavLink key={index} to={`/sold/${index + 1}`}>
            <li className='siteHeader__li'>
                <span>{index + 1}</span>
            </li>
        </NavLink>
    ));

    console.log(pages);

    return (
        <div id='PagesToggler' className=''>
            {pages}
        </div>
    );
}