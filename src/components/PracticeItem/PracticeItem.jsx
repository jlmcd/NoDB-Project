import React, { Component } from 'react'
import axios from 'axios';
import './PracticeItem.css'

export default class PracticeItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            piece: this.props.piece,
            composer: this.props.composer,
            tempo: +this.props.tempo,
            notes: this.props.notes
        }
    }

    editToggle() {
        if (this.state.edit === true) {
            this.setState({
                edit: false
            })
        } else {
            this.setState({
                edit: true
            })
        }
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    save(id) {
        axios.put(`/api/chart/${id}`, {
            piece: this.state.piece,
            composer: this.state.composer,
            tempo: this.state.tempo,
            notes: this.state.notes
        })
            .then(res => {
                this.props.updateFn(res)
                this.setState({
                    edit: false,
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.edit ? (
                        <div id="practice-item-edit">
                            <input
                                className="piece-edit"
                                type="text"
                                placeholder="Piece Name"
                                onChange={(evt) => this.handleChange('piece', evt)}
                                value={this.state.piece}
                            />
                            <input
                                className="composer-edit"
                                type="text"
                                placeholder="Composer"
                                onChange={(evt) => this.handleChange('composer', evt)}
                                value={this.state.composer}
                            />
                            <input
                                className="tempo-edit"
                                type="number"
                                placeholder="Tempo"
                                onChange={(evt) => this.handleChange('tempo', evt)}
                                value={this.state.tempo}
                            />
                            <input
                                className="notes-edit"
                                type="text"
                                placeholder="Notes for Practice"
                                onChange={(evt) => this.handleChange('notes', evt)}
                                value={this.state.notes}
                            />
                            <button className="save-button" onClick={() => this.save(this.props.id)}>Save</button>
                        </div>
                    ) : (
                            <div id="practice-item-displayed">
                                <div className="properties">
                                    <div className="piece-display">{this.props.piece} </div>
                                    <div className="composer-display">{this.props.composer} </div>
                                    <div className="tempo-display">{this.props.tempo} </div>
                                    <div className="notes-display">{this.props.notes} </div>
                                </div>
                                <div className="buttons">
                                    <button className="edit-button" onClick={() => this.editToggle()}>Edit</button>
                                    <button className="delete-button" onClick={() => this.props.deleteFn(this.props.id)}>Delete</button>
                                </div>
                            </div>
                        )
                }
            </div>
        )
    }
}