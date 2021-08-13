export const setLoadingAction = (status) => ({
  type: "SET_LOADING",
  payload: status,
});

export const setIdAction = (id) => ({
  type: "SET_ID",
  payload: id,
});

export const getArtistAction = () => {
  return async (dispatch, getState) => {
    try {
      const id = getState().artist.id;
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`
      );
      if (resp.ok) {
        let artist = await resp.json();
        dispatch({
          type: "SET_ARTIST",
          payload: artist,
        });
        const tracklistUrl = await getState().artist.data.tracklist;
        const res = await fetch(tracklistUrl);
        if (res.ok) {
          let tracklist = await res.json();
          dispatch({
            type: "SET_TRACKLIST",
            payload: tracklist.data,
          });
        }
        dispatch(setLoadingAction(false));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setArtistAction = (artist) => ({
  type: "SET_ARTIST",
  payload: artist,
});

// export const getTrackListAction = () => {
//   return async (dispatch, getState) => {
//     try {
//       dispatch(setLoadingAction(true));
//       const url = getState().artist.data.tracklist;
//       let resp = await fetch(url);
//       if (resp.ok) {
//         let tracklist = await resp.json();
//         dispatch(setTrackListAction(tracklist));
//         dispatch(setLoadingAction(false));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const setTrackListAction = (tracklist) => ({
  type: "SET_TRACKLIST",
  payload: tracklist,
});
