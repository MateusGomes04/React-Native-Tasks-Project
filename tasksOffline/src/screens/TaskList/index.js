import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import commonStyles from '../../commonStyles';
import TodayImage from '../../assets/imgs/today.jpg';

import Task from '../../components/Task';

import moment from 'moment';

import 'moment/locale/pt-br';

export default class TaskList extends Component {
  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    return (
      <View style={styles.container}>
        <ImageBackground source={TodayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Buy Book"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Read a Book" estimateAt={new Date()} doneAt={null} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 50,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBottom: 30,
    fontSize: 20,
  },
});
