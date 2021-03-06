import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#303133',
    height: '100%',
  },
  image: {
    width: '90%',
    height: '20%',
    margin: '5%',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    marginLeft: '5%',
  },
  subTitle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: '5%',
  },
  role: {
    fontSize: 10,
  },
  statRow: {
    flexDirection: 'row',
  },
  diamond: {
    width: 40,
    height: 40,
    backgroundColor: '#303133',
    borderWidth: 5,
    transform: [{ rotate: '45deg' }],
    marginLeft: '5%',
    marginTop: '6%',
  },
  red: {
    borderColor: 'red',
  },
  green: {
    borderColor: 'green',
  },
  blue: {
    borderColor: 'blue',
  },
  statText: {
    color: '#fff',
    fontSize: 24,
    marginLeft: '15%',
    marginTop: '5%',
  },
  attributeRow: {
    flexDirection: 'row',
    height: '13%',
  },
});
