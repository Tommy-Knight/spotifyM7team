import React from 'react';
import { Heart } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { addToFavsAction } from '../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (favourite) => dispatch(addToFavsAction(favourite)),
});

function Albums(obj) {
  console.log('object', obj);
  const toggleFav = () => {
    addToFavsAction(obj.obj.tracks.title);
  };

  return (
    <div>
      <div className="container-fluid m-0 p-0">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 album-n">
            <div className="container m-0 p-1">
              <img
                src="./assets/images/album-images/hey-jude.jpg"
                id="img-album-n"
                alt=""
              />
              <h4>{obj.obj.title}</h4>
              <p>{obj.obj.artist?.name}</p>
              <button className="btn btn-success btn-n">PLAY</button>
              <p>{obj.obj.nb_tracks} tracks</p>
              <div>
                <span className="fa-stack mb-2" id="toggle">
                  <i className="far fa-heart fa-stack-1x" />
                  <i className="fas fa-heart fa-stack-1x" />
                </span>
                <span>
                  <i className="fa fa-ellipsis-h mb-2" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 tracklist-n">
            <div className="track-container">
              {obj.obj.tracks?.data.map((track) => (
                <ul key={track.id} className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-music" />
                    </span>
                    {track.title} <Heart onClick={() => toggleFav} />
                    <span style={{ color: 'grey', fontSize: '10px' }}>
                      {track.artist.name}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect((s) => s, mapDispatchToProps)(Albums);
