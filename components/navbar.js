function navbar() {
  return `
    <div id="navbar">
    <div id="logo">
        <img id="logo-img" src="./1200px-Imgur_logo.svg.png"/>
    </div>
    <div id="navbar-post">
    <button id="new-but">+</button>
    <h3 id="title-new-post">New Post</h3>
    </div>
    <div id="newpost">
        
    </div>
    <input type="text" placeholder="Images, #tags, @users  oh my!" id="post-search"/> 
    <button id="ad-free"> Go Ad-Free</button>
    <button id="sign-in">Sign in</button>
    <button id="sign-up">Sign Up</button>


    `;
}

export default navbar;
