import React from "react";

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            color: '#2ecc71'
        };
        this.handleClick = this.handleClick.bind(this);
    }


    changeQuote() {
        fetch("https://type.fit/api/quotes")
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.error("Not successful");
                }
            })
            .then((result) => {
                let quote = this.pickRandom(result);
                this.setState({
                    quote: quote.text,
                    author: quote.author
                });
            })
    }

    pickRandom(arr) {
        return arr[(Math.floor(Math.random() * arr.length))];
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
        let color = this.pickRandom(colors);
        this.setState({
            color: color
        })
    }

    componentDidMount() {
        this.changeQuote();
        this.changeColor();

    }

    handleClick() {
        this.changeColor();
        this.changeQuote();


    }

    render() {

        return (
            < div id="QuoteMachine" >
                <div id="wrapper" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: this.state.color, transition: '2s' }}>
                    <div id="quote-box" style={{ color: this.state.color, transition: '2s' }}>

                        <div key={this.state.quote} id="text-wrapper">
                            <i className="fa-solid fa-quote-left fa-xl"></i>
                            <div id="text-box" className="text-center">
                                <h1 id="text">{this.state.quote}</h1>
                            </div>
                            <div id="author-box" className="text-right">
                                <p id="author" >-{this.state.author}</p>
                            </div>
                        </div>

                        <div className="buttons">
                            <div className="button">
                                <a
                                    id="tweet-quote"
                                    href="https://www.twitter.com/intent/tweet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><i className="fa-brands fa-twitter-square" style={{ color: this.state.color, transition: '2s' }}></i>
                                </a>
                            </div>
                            <div id="new-quote" className="button" >
                                <button className="btn" onClick={this.handleClick} style={{ backgroundColor: this.state.color, transition: '2s' }}>New Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default QuoteMachine;