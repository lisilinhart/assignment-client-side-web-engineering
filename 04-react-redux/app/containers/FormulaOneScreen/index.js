/*
 *
 * FormulaOneScreen
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Autocomplete from 'react-autocomplete';
import { selectFormulaOneConstructor, selectFormulaOneDrivers } from './selectors';
import { AutoCompleteWrapper, ListItem, Ul } from './styles';
import messages from './messages';
import { loadDrivers, loadConstructors, driversLoaded, constructorsLoaded } from './actions';


export class FormulaOneScreen extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    value: '',
  }

  componentDidMount() {
    this.props.sendLoadConstructors();
  }

  onSelect = (value, item) => {
    this.props.sendLoadDrivers(item.constructorId);
    this.setState({ value });
  }

  matchStateToTerm(state, value) {
    return (state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  render() {
    const items = this.props.constructors || ['Default Value'];
    const drivers = this.props.drivers || [];
    const listItems = drivers.map((driver) =>
      <ListItem key={driver.driverId} >{driver.familyName}</ListItem>
    );
    return (
      <div>
        <Helmet
          title="Formula One Drivers"
          meta={[
            { name: 'description', content: 'Formula One Drivers' },
          ]}
        />
        <h1><FormattedMessage {...messages.header} /></h1>
        <AutoCompleteWrapper>
          <Autocomplete
            inputProps={{ name: 'Constructors', id: 'states-autocomplete' }}
            items={items}
            value={this.state.value}
            getItemValue={(item) => item.name}
            onSelect={this.onSelect}
            renderItem={(item) => (
              <div
                key={item.abbr}
                id={item.abbr}
              >{item.name}</div>
            )}
            shouldItemRender={this.matchStateToTerm}
            onChange={(event, value) => {
              this.setState({ value });
            }}
          />
        </AutoCompleteWrapper>
        <Ul>
          {listItems}
        </Ul>
      </div>
    );
  }
}

FormulaOneScreen.propTypes = {
  sendLoadDrivers: PropTypes.func.isRequired,
  sendLoadConstructors: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  constructors: selectFormulaOneConstructor(),
  drivers: selectFormulaOneDrivers(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendLoadDrivers: (constructor) => {
      dispatch(loadDrivers(constructor));
    },
    sendLoadConstructors: () => {
      dispatch(loadConstructors());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormulaOneScreen);
