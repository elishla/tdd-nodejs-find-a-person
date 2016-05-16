
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {

      var arrayPosts =[];
     var j=0;
      for (var index = 0; index < this._posts.length; index++) {

          if(this._posts[index].indexOf(name)!=-1){

              arrayPosts[j]=this._posts[index];
              j++;
          }

      }
  return arrayPosts;
  };

Map.prototype.find_if_person_exists = function(name) {
  return Boolean;
  };

module.exports = Map;
