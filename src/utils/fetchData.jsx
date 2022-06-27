export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPIDAPI_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_RapidAPI_Host_YOUTUBE}`
  }
};



export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':  `${process.env.REACT_APP_RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': `${process.env.REACT_APP_RapidAPI_Host}`
    }
  };
  


export const fetchData = async (url,options) => {


    const responce = await fetch(url,options);

    const data = await responce.json();

    return data;
}