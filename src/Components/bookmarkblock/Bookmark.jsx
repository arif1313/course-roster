
import PropTypes from 'prop-types';
const Bookmark = (name) => {
    return (
        <div className="bg-white w-1/4 p-5 rounded-xl">
          <div className="m-5" >Time remaining : </div>
          <hr />
          <div className="m-5">
            <h2 className="text-xl font-bold">Course name </h2> 
            <div>
              <ul>
               {
                <li>
             {/* {name} */}
                </li>
               }
              </ul>
            </div>
            
          </div>
          <hr />
        </div>
    );
};
Bookmark.propTypes = {
  name:PropTypes
};
export default Bookmark;