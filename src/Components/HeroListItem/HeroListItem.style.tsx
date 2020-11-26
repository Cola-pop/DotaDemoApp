import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#ff9999',
    padding: 20,
    margin: 5,
    borderRadius: 15,
  },
  itemImage: {
    width: 75,
    height: 75,
    borderRadius: 200,
  },
  textContainer: {
    marginLeft: 15,
    alignSelf: 'stretch',
    textAlign: 'center',
    flexDirection: 'column',
  },
  itemTitle: {
    color: '#000',
    fontSize: 24,
  },
  itemAttackType: {
    color: '#000',
    fontSize: 16,
  },
  role: {
    color: '#000',
    fontSize: 10,
  },
});
