import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 130,
    height: 210,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  img: {
    width: 100,
    height: 150
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center'
  },
});

export default styles;