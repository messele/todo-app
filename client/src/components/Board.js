import React, {Component} from 'react';
import {connect} from 'react-redux';
import {STATUS} from '../constants';
import CardList from './CardList';
//import * as actions from '../actions'
import { FETCH_TODOS } from '../actionsType';

class Board extends Component {



    componentDidMount() {
        console.log("Component Mounted !!")
        this.props.dispatch({type : FETCH_TODOS});
        
    }

    getStatusList(statusObj) {
    
        let statusList = [];
        for(let i in statusObj) {
            statusList.push(STATUS[i]);
        }
        return statusList;
    }

    mapCardsByStatus(cards) {

        let cardsByStatusMap= {};
        if(cards) {

            cards.forEach(card => {
                cardsByStatusMap = {
                    ...cardsByStatusMap,
                    [card.status] : [
                        ...(cardsByStatusMap[card.status] ||[]),
                        {...card}
                    ]
                }
            });
        }
        return cardsByStatusMap;
    }

    render () {

        const statusList = this.getStatusList(STATUS);

       
        const {cards} = this.props,
            cardsByStatus = this.mapCardsByStatus(cards,statusList) || {};

        return (
            <React.Fragment>
                <h1>Kanban Board</h1>
            <div className="board">
               
                {
                 statusList.map(status => {
                     console.log(status + "->" + JSON.stringify(cardsByStatus[status]))

                   return ( <React.Fragment>
                                <CardList header={status} cards={cardsByStatus[status] || []}/>
                                {/* <div className="flexSpacer" /> */}
                            </React.Fragment>);
                 
                 })
                }
                

            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cards : state.cardList
})


export default connect(mapStateToProps)(Board);