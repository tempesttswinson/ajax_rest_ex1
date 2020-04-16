$(document).ready(function(){

	//Get All Posts
	$('#allPosts').click(()=>{
		$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts ', (posts)=>{

			posts.forEach(()=>{
				var p = $('<p></p>');
				p.text(JSON.stringify(posts));
				$('body').append(p);
			})
		})
	})

	//Get post with id of 10
	$('#post10').click(()=>{
		$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {id: 10}, (posts)=>{

			posts.forEach(()=>{
				var p = $('<p></p>');
				p.text(JSON.stringify(posts));
				$('body').append(p);
			})
		})
	})


	//Get the comments from post with id of 12 
	$('#comments12').click(()=>{
		$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 12}, (comments)=>{

			comments.forEach(()=>{
				var p = $('<p></p>');
				p.text(JSON.stringify(comments));
				$('body').append(p);
			})
		})
	})

	//Get all the posts from user with id of 2
	$('#allPostsUser2').click(()=>{
		$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {userID: 2}, (posts)=>{

			posts.forEach(()=>{
				var p = $('<p></p>');
				p.text(JSON.stringify(posts));
				$('body').append(p);
			})
		})
	})

	//Create a new post and log the id generated for it by the server
	$('#newPost').click(()=>{
		$.post(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', 
			{
				title: "New Post",
				body: " This is the body of my new post"
			})

			.done((post) =>{
				console.log(post)
				var p = $('<p></p>');
				p.text("id: " + post.id);
				$('body').append(p);
			})
	})

	//Replace the post with id of 12 and render the responseJSON
	$('#replacePost').click(()=>{
		$.ajax({
			method: 'PUT',
			url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?userID=12',			
			data: {title: "new", body:"new body"},
			complete: function(response){
				console.log(response.responseJSON);
			}

		})

	})



})