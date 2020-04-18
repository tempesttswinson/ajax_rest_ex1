$(document).ready(function(){

	var display = $('.display');

	//Get All Posts
	$('#allPosts').click(()=>{
		$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts ', (posts)=>{

			posts.forEach(()=>{
				display.text(JSON.stringify(posts));
			})
		})
	})

	//Get post with id of 10
	$('#post10').click(()=>{
		$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {id: 10}, (posts)=>{

			posts.forEach(()=>{
				display.text(JSON.stringify(posts));
			})
		})
	})


	//Get the comments from post with id of 12 
	$('#comments12').click(()=>{
		$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 12}, (comments)=>{

			comments.forEach(()=>{
				display.text(JSON.stringify(comments));
			})
		})
	})

	//Get all the posts from user with id of 2
	$('#allPostsUser2').click(()=>{
		$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {userID: 2}, (posts)=>{

			posts.forEach(()=>{
				display.text(JSON.stringify(posts));
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
				display.text("id: " + post.id);
			})
	})

	//Replace the post with id of 14 and render the responseJSON
	$('#replacePost').click(()=>{
		$.ajax({
			method: 'PUT',
			url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',			
			data: {title: "new", body:"new body"},
			complete: function(response){
				var response = response.responseJSON;
				console.log(response);
				display.text(JSON.stringify(response));
			}

		})

	})

	//Update the title of post with id of 14 and render responseJSON
	$('#updateTitle14').click(()=>{
		$.ajax({
			method: 'PATCH',
			url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',	
			data: {title: " New Title Here"},
			complete: function(response){
				var response = response.responseJSON;
				console.log(response);
				display.text(JSON.stringify(response));
			}

		})

	})

	// Delete the post with id of 14 and render a success message
	$('#deletePost14').click(()=>{
		$.ajax({
			method: 'DELETE',
			url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
			complete: function(response){
				var response = response.responseJSON;
				console.log(response);
				display.text(JSON.stringify(response) + "Success!");
			}
		})
	})


// Display a list of posts.
	// When the user clicks on a post, display all the comments from that post
	// Display a link back to all posts

	$('#displayPosts').click(()=>{
		$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts ', (posts)=>{
			var i = 0;
			posts.forEach(()=>{
				i ++;
				var li = $('<li></li');
				li.text(JSON.stringify(posts[i]));
				$('.displayList').append(li);
			

				$(li).click(()=>{

					$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', (comments)=>{

						var j = 0;
						comments.forEach(()=>{
							j ++;
							console.log(comments[j]);
							display.text(JSON.stringify(comments[j]));
						 })

					})
				})
			})		
		})
	})




})