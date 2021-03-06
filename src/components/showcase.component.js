import React, { Component } from 'react'
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { FlatButton } from 'material-ui'

export default class Showcase extends Component {
	handleGitHubClick(url) {
		window.location.href = url
	}

	renderMedia() {
		if(this.props.videoUrl) {
			return (
				<iframe src={this.props.videoUrl} width="560" height="315" allowFullScreen></iframe>
			)
		}

		return <img src={this.props.imageUrl} />
	}

	renderTags() {
		if(!this.props.tags) return

		return (
			<div>
				<div style={{ padding: '10px 0px' }} />
				<div style={{ fontSize: '12px' }}>
					{`Built with: ${this.props.tags.join(',  ')}`}
				</div>
			</div>
		)

	}

	renderCardActions() {
		if(!this.props.links) return

		return (
			<CardActions>
				{this.props.links.map(link =>
					<FlatButton key={link.label} label={link.label} onTouchTap={() => this.handleGitHubClick(link.url)} />
				)}
			</CardActions>
		)
	}

	render() {
		return (
			<Card style={this.styles.card}>
				<CardMedia>
					{this.renderMedia()}
				</CardMedia>
				<CardTitle title={this.props.title} />
				<CardText>
					{this.props.children}
					{this.renderTags()}
				</CardText>
				{this.renderCardActions()}
			</Card>
		)
	}

	styles = {
		card: {
			margin: '40px 10%'
		}
	}
}
