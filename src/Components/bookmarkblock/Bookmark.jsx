
import PropTypes from 'prop-types';
import Bookmarked from '../Bookmarked/Bookmarked';
const Bookmark = ({bookmarks}) => {

  console.log(bookmarks);
    return (
        <div className="bg-white w-1/4 p-5 rounded-xl">
          <div className="m-5" >Time remaining : </div>
          <hr />
          <div className="m-5">
            <h2 className="text-xl font-bold mb-5">Course name </h2> 
            <div>
              <ol className='list-decimal'>
          {
            bookmarks.map((bookmarked,inx) => <Bookmarked 
            key={inx}
            bookmarked={bookmarked}>

            </Bookmarked>)
          }
              </ol>
            </div>
            
          </div>
          <hr />
        </div>
    );
};
Bookmark.propTypes = {
  bookmarks:PropTypes.array
};
export default Bookmark;