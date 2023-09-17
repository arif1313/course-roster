
import PropTypes from 'prop-types';
import Bookmarked from '../Bookmarked/Bookmarked';
const Bookmark = ({bookmarks,courseCredit, percredit}) => {

  console.log(bookmarks);
    return (
        <div className="bg-white w-1/4 p-5 rounded-xl">
          <div className="m-5 text-blue-600  font-bold" >Credit Hour Remaining {courseCredit} hr </div>
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
          <div className='mb-5 p-3'>
            <h3 className='font-bold'>Total Credit Hour : {percredit} </h3>
          </div>
          <hr />
        </div>
    );
};
Bookmark.propTypes = {
  bookmarks:PropTypes.array,
  courseCredit:PropTypes.object,
  percredit:PropTypes.object
};
export default Bookmark;