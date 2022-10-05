function getArticleGenerator(articles) {
    
    let myArticle = Array.from(articles);
    let content = document.getElementById('content');

    return () => {
        if(!myArticle.length){
            return
        };
        let currentArticle = myArticle.shift();
        content.innerHTML += `<article>${currentArticle}</article>`
    }
}
