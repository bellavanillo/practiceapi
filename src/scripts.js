class giphyApi {
  apiCall() {
    return new Promise(function(resolve, reject) {
      let url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}`;
      let request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
 export { giphyApi };
