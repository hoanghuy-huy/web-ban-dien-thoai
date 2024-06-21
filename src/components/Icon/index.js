import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

export const SearchIcon = ({ className }) => (
    <FontAwesomeIcon className={className} icon={faMagnifyingGlass} />
);

export const CartIcon = ({ className }) => (
    <FontAwesomeIcon icon={faCartShopping} className={className} />
);
