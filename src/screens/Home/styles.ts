import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  subtitle: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
    marginRight: 8
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 32
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 36,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 42
  },
  listEmptyText: {
    color: '#FDFCFE',
    fontSize: 14,
    textAlign: 'center'
  }
})