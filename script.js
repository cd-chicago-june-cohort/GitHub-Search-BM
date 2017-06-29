$(document).ready(function () {

  var $form = $('form');
  var $input = $('input[name="username"]');
  var $resultsList = $('#results-list');
  var $profilePic = $('#profilePic');

  $form.submit(function (event) {
    event.preventDefault();
    var type = $('input[name="searchBy"]:checked').val();
    var term = $input.val();
    getUserRepos(term, $resultsList, $profilePic, type);
  });
  
});

function getUserRepos (username, $ul, $profilePic, type) {
  $.getJSON( "https://api.github.com/"+ type + "/" + username + "/repos", function( repos ) {
    // Loop Through Repos
    // 
    for (var i = 0; i < repos.length; i+=1) {
      // Console Log Each Key We Want
      var repo = repos[i];
      var $dateNice = repo.pushed_at;
      var $pic = repo.owner.avatar_url;

      $dateNice = new Date($dateNice);
       

      console.log(repo);
      console.log(repo.description);
      console.log(repo.pushed_at);
      console.log(repo.html_url);
      console.log(repo.owner.avatar_url);
      console.log('-----------');
      console.log(type);
      
      $ul.append('<li>' + $dateNice + '<br><a href="' + repo.html_url + '">' + repo.name + '</a></li>');

      


    }

    $('#profilePic').append('<img src="' + $pic + 'fixed height="200" width="200" responsive>');

$('#reset').click(function() {
    location.reload();
});

  });
}