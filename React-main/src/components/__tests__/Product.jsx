// pn mla tr price and title tr vegl pahije smjl ka 
// kay krar mg vegl krnar smjl ka 
// passing araay thorught props 
// passijng object througth props 
// aeray mla na list chy form madhe dakvach ye smjl ka 
// conditionals zal na 
// dynamic coloring krych ye smjl ak  condtion vrti asel 
import './Product.css';

export default function Product({Title,Price,Descriptions})
{
     let Discount = Price>30000 ? "Discount is 5%" : ""
     // price = 10 it is pen 

     let Exacts = Price == 10 ? "Price is 10" : ""

     let styles = {backgroundColor : Price > 10000 ? "Red" : ""}
    //varible acces krnatana suddha jsx madhe na {} asch krave smjl  ka 
    return(
        <div className = "Product"  style = {styles}>
             <h3>Title = {Title}</h3>
             <p >Price = {Price} </p>
            {/* <p>Descriptions = {Descriptions}</p> */}
             {/* <p>Object = {data.a}</p> */}
             <ul>
                {Descriptions.map((Description,index)=>
                (<li key = { index}>{Description}</li>))}
             </ul>
             <p>{Discount}</p>
             <p>{Exacts}</p>
        </div>
    )
}