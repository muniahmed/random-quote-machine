import React from "react";

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "This is the current quote",
            author: "Author Name",
            color: '#2ecc71'
        };
        this.handleClick = this.handleClick.bind(this);
    }



    getQuotes() {
        console.log("Clicked");
        fetch("https://zenquotes.io/api/random")
            .then(res => res.json())
            .then((result) => {
                console.log(result.q)
            })

    }
    changeColor() {
        let colors = [
            '#1abc9c',
            '#2ecc71',
            '#3498db',
            '#9b59b6',
            '#e67e22',
            '#e74c3c',
            '#ccae62'];
        let color = Math.floor(Math.random() * colors.length);
        this.setState({
            color: colors[color]
        })
    }

    componentDidMount() {
        this.changeColor()

    }

    handleClick() {
        this.getQuotes();
        this.changeColor();
    }

    render() {

        return (
            < div id="QuoteMachine" >
                <div id="wrapper" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: this.state.color, transition: '1s' }}>
                    <div id="quote-box" style={{ color: this.state.color, transition: '1s' }}>
                        <i className="fa-solid fa-quote-left fa-xl"></i>
                        <div id="text-box" className="text-center">
                            <h1 id="text">{this.state.quote}</h1>
                        </div>
                        <div id="author-box" className="text-right">
                            <p id="author">-{this.state.author}</p>
                        </div>

                        <div className="buttons">
                            <div className="button">
                                <a
                                    id="tweet-quote"
                                    href="https://www.twitter.com/intent/tweet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><i className="fa-brands fa-twitter-square" style={{ color: this.state.color, transition: '1s' }}></i>
                                </a>
                            </div>
                            <div id="new-quote" className="button" >
                                <button className="btn" onClick={this.handleClick} style={{ backgroundColor: this.state.color, transition: '1s' }}>New Quote</button>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <p>Inspirational quotes provided by &nbsp;</p>
                        <a
                            href="https://zenquotes.io/"
                            target="_blank"
                            style={{ textDecoration: 'none', color: '#fff' }}
                            rel="noopener noreferrer"
                        >ZenQuotes API</a
                        >
                    </div>
                </div>
            </div >
        )
    }
}

export default QuoteMachine;