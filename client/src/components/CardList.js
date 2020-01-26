import React, { Component } from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {addCard} from '../actions'

 class CardList extends Component {

    render() {
        const { cards, header } = this.props;
        console.log("in card list")
        console.log(cards)
        return (
            <div className="cardList">
                <h2 className="cardListHeader">{header}</h2>
                <button className="btn add" onClick={() => this.props.addCard(header)}>+</button>
                <div style={{height: '1000px', padding: '10px', overflow: 'hidden'}}>
                {cards &&
                    cards.map(card => <Card key={card.id} {...card} />
                    )
                }
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    addCard : status => dispatch(addCard(status)),
    //removeCard : id => dispatch(removeCard(id))

})

//export default CardList;
export default connect(null, mapDispatchToProps)(CardList)
