export const addArtist = artist => {
    return {
      type: 'ADD_ARTIST',
      artist
    };
  };
  
  export const removeArtist = id => {
    return {
      type: 'REMOVE_ARTIST',
      id
    };
  };
  
  export const addVenue = venue => {
    return {
      type: 'ADD_VENUE',
      venue
    };
  };
  
  export const removeVenue = id => {
    return {
      type: 'REMOVE_VENUE',
      id
    };
  };