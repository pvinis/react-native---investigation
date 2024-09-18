/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import {RNTesterThemeContext} from './RNTesterTheme';
import RNTPressableRow from './RNTPressableRow';

const RNTesterExampleFilter = require('./RNTesterExampleFilter');
const React = require('react');
const {SectionList, StyleSheet, Text, View} = require('react-native');

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
function ExampleModuleRow({
  onShowUnderlay,
  onHideUnderlay,
  item,
  handlePress,
}): React.Node {
  return (
    <RNTPressableRow
      title={item.module.title}
      description={item.module.description}
      testID={item.module.title}
      onPressIn={onShowUnderlay}
      onPressOut={onHideUnderlay}
      accessibilityLabel={item.module.title + ' ' + item.module.description}
      onPress={() =>
        handlePress({
          exampleType: item.exampleType,
          key: item.key,
          title: item.module.title,
        })
      }
    />
  );
}

const renderSectionHeader = ({section}: {section: any, ...}) => (
  <RNTesterThemeContext.Consumer>
    {theme => {
      return (
        <Text
          style={[
            styles.sectionHeader,
            {
              color: theme.SecondaryLabelColor,
              backgroundColor: theme.GroupedBackgroundColor,
            },
          ]}>
          {section.title}
        </Text>
      );
    }}
  </RNTesterThemeContext.Consumer>
);

const RNTesterModuleList: React$AbstractComponent<any, void> = React.memo(
  ({sections, handleModuleCardPress}) => {
    return <Investigation />;
  },
);

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  sectionHeader: {
    padding: 5,
    fontWeight: '500',
    fontSize: 11,
  },
  topRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  imageViewStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 5,
  },
  imageStyle: {
    height: 25,
    width: 25,
  },
});

module.exports = RNTesterModuleList;

function Investigation() {
  return (
    <View>
      <TestComponent />
      <Text type="title">with 0</Text>
      {0 && <TestComponent />}
      {/* <Text>{0 && <TestComponent />}</Text> */}
      <Text type="title">with empty str</Text>
      {'' && <TestComponent />}
      <Text type="title">with NaN</Text>
      {/* {NaN && <TestComponent />} */}
      <Text type="title">with false</Text>
      {false && <TestComponent />}
      <Text type="title">with null</Text>
      {null && <TestComponent />}
      <Text type="title">with undefined</Text>
      {undefined && <TestComponent />}
    </View>
  );
}

function TestComponent() {
  return (
    <View>
      <Text>Example Component</Text>
    </View>
  );
}
