import * as React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Input, Label, Menu } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { About } from './components/About';

// tslint:disable-next-line:no-var-requires
export class App extends React.Component<{}, {}> {

	public constructor(props) {
		super(props);
	}

	public render() {
		return (
			<Route path='/'>
				<Grid style={{paddingTop: 10}}>
					<Grid.Row>
						<Container text={true}>
							<div className="header">
								<div>
									<b> CryptoKitty Designer </b>
									<div> Make the kitty of your dreams </div>
								</div>
								<div>
									Kittens and ETH appreciated <span> @ </span>
									<Input value={'0x02Ee97a13e434717e3FFa12758a235D1a1680775'}/>
								</div>
							</div>
						</Container>
					</Grid.Row>
					<Grid.Row >
						<Grid.Column width={16}>
							<Route path='/' component={About} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Route>
		);
	}
}

const style = {
};
