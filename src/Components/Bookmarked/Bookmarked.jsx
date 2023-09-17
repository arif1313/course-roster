
import PropTypes from 'prop-types';

const Bookmarked = ({bookmarked} )=> {
    return (
        <li>
            {bookmarked}
        </li>
    );
};

Bookmarked.propTypes = {
    bookmarked:PropTypes.object 
};

export default Bookmarked;