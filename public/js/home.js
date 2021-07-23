$(document).ready(() => {

  $.get("/api/posts", results => {
      
    console.log(results)
    // outputPost(results, $(".postsContainer"));

  })

});


// function outputPost(results, container) {
//    container.html("");
  
//    results.forEach(result => {
//        var html = createPostHtml(result)
//        container.append(html);
//    });

//    if(results.length == 0) {
//      container.append("<span class='noResults'>Nothing to show.</span>")
//    }
// }