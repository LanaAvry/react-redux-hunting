import React from 'react'
import { connect } from 'react-redux'
import { hunterCreate } from '../actions/hunters'
// import {browserHistory } from "react-router"

class HunterCreate extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			name: "",
			avatar: null
		}

		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeAvatar = this.onChangeAvatar.bind(this)
		this.hunterCreate = this.hunterCreate.bind(this)
	}


	onChangeName(e) {
		this.setState({
			name: e.target.value
		})
	}

	onChangeAvatar(e) {
		const file = e.target.files[0]

		if (file) {
			const reader = new FileReader()

			reader.onloadend = () => {
				this.setState({
					avatar: reader.result
				})
			}

			reader.readAsDataURL(file)
		}
	}

	hunterCreate() {

		const payload = {
			name: this.state.name,
			avatar: this.state.avatar
		}

        this.props.dispatch(hunterCreate(payload))
		//form reset
		const form = document.getElementsByClassName("hunter__create")[0]
		form.reset()
		this.setState({
			name: "",
			avatar: null
		})

	}

	render() {
		return (
			<form className="hunter__create">
				<div className="hunters_form">
					<div>
						<input type="text" name="name" onChange={this.onChangeName} placeholder="Enter your name"/>
					</div>
					<div>
						<input type="file" name="avatar" accept="image/*" onChange={this.onChangeAvatar}/>
					</div>
	                <div>
						<button type="button" className="add-hunter" onClick={this.hunterCreate}>Create hunter</button>
					</div>
				</div>
			</form>
		)
	}
}

export default connect()(HunterCreate)
