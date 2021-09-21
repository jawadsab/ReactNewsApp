import "./ArticleCardStyles.css";

const ArticleCard = ({children}) => {
    return (
       <div className="article__card">
           {children}
       </div>
    )
}

export default ArticleCard;