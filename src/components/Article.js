import react from "react";
// import blogData from "../data/blog";

function makeEmojiList(minutes){
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱"; 

    let theEmojis = " "
    for(let i=0; i<minutes; i+= interval){
        theEmojis += emoji;
    }
    return theEmojis;
}

function Article({title, date='January 1, 1970', preview, minutes}){
    const theEmojis = makeEmojiList(minutes);

    return(
        <article>
            <h3>{title}</h3>
            <small >{date} {theEmojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article
