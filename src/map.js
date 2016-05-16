
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {

      var arrayPosts =[];
      for (var index = 0; this._posts.length < len; index++) {

          if(this._posts[index].indexOf(name)!=-1)
             arrayPosts.push(this._posts[index]);
      }
  return arrayPosts;
  };

Map.prototype.find_if_person_exists = function(name) {
  return Boolean;
  };

module.exports = Map;
