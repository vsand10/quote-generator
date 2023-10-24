import React, {useState, useEffect}from "react";
import twitterIcon from "../twitter.svg"
import whiteyoutube from "../whiteyoutube.svg"




const Quote = () => {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [colors, setColors ] = useState(getRandomColorPair())

    
 
    useEffect(() => {
        getQuote()

    }, [])

    function getRandomColorPair  ()  {
        const bgColor = getRandomColor()
        const textColor = getRandomColor()
        return  {bgColor, textColor}
    }


    function getQuote  ()  {
        let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let dataQuotes= data.quotes
            let randomNum = Math.floor(Math.random()* dataQuotes.length)
            let randomQuote= dataQuotes[randomNum]
            setQuote(randomQuote.quote)
            setAuthor(randomQuote.author)
            setColors(getRandomColorPair())
           
            
        })
    }

  

    function getRandomColor  () {
        const letters= "0123456789ABCDEF"
        let color = "#"
        for ( let i = 0; i<6; i++){
            color += letters[Math.floor(Math.random()* 16)]

        }
         return color
    
    }
    function handleClick  ()  {
        getQuote()
        
        
    }




    return (
    <div className="App-container" style={{backgroundColor:colors.bgColor, color:colors.textColor }}>
    <div id="quote-box" >
    <div id="text"><p><span className="marks">" </span>{quote}<span className="marks"> "</span>
        </p> </div>
    <div id="author"  ><p >- {author} </p></div>
    
    <div id="buttons" >
        <div className="social-media" >
            <a href="https://twitter.com/home?lang=en" target="_blank" id="twet-quote" style={{backgroundColor:colors.bgColor}} >
                <span><img src={twitterIcon} alt=""/></span>
            </a>
            <a href="https://youtube.com" target="_blank" id="tumblr-quote" style={{backgroundColor:colors.bgColor}} >
                <span><img src={whiteyoutube} alt="" /></span>
            </a>

        </div>
        <button onClick={handleClick}  id="new-quote" style={{backgroundColor:colors.bgColor}}>New Quote</button>
    </div>


    </div>
    </div>
    )
}

export default Quote