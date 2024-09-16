// button ke dhorte hobe
document.getElementById('post-btn').addEventListener('click', function(){
    // 
    const commentBox = document.getElementById('comment-box')
    // console.log(commentBox.value)
    const newComment = commentBox.value;

    const commentContainer = document.getElementById('comment-container');

    const p = document.createElement('p')
    p.innerText = newComment;
    commentContainer.appendChild(p);
    
    commentBox.value = ' ';



})