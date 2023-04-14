import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {number, object} from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = object().shape({
  length: number()
    .min(4, 'password be more than or equal to 4')
    .max(16, 'password must be less or equal to 16')
    .required('please enter password'),
});

const Form = () => {
  const [password, setPassword] = useState('');
  const [isgenetated, setIsgenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (length: number) => {
    let characterList = '';

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = uppercase.toLowerCase();
    const special = '+*/!@#$%^&*';
    const digit = '0123456789';

    if (upperCase) {
      characterList += uppercase;
    }
    if (numbers) {
      characterList += digit;
    }
    if (lowerCase) {
      characterList += lowercase;
    }
    if (symbols) {
      characterList += special;
    }

    const passwordResult = createPassword(characterList, length);

    setPassword(passwordResult);
    setIsgenerated(true);
  };

  const createPassword = (characters: string, length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const reset = () => {
    setIsgenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Password Generator</Text>
        <Formik
          initialValues={{length: ''}}
          validationSchema={PasswordSchema}
          onSubmit={values => {
            generatePassword(+values.length);
          }}>
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleSubmit,
            handleReset,
          }) => (
            <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length</Text>
                  {touched.length && errors.length && (
                    <Text style={styles.errorText}>{errors.length}</Text>
                  )}
                </View>
                <TextInput
                  style={styles.inputStyle}
                  value={values.length}
                  onChangeText={handleChange('length')}
                  placeholder="Ex. 8"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include lowercase</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={lowerCase}
                  onPress={() => setLowerCase(!lowerCase)}
                  fillColor="#29AB87"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Uppercase letters</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={upperCase}
                  onPress={() => setUpperCase(!upperCase)}
                  fillColor="#FED85D"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Numbers</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)}
                  fillColor="#C9A0DC"
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Symbols</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={symbols}
                  onPress={() => setSymbols(!symbols)}
                  fillColor="#FC80A5"
                />
              </View>
              <View style={styles.formActions}>
                <TouchableOpacity
                  disabled={!isValid}
                  style={styles.primaryBtn}
                  onPress={handleSubmit}>
                  <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={() => {
                    handleReset();
                    reset();
                  }}>
                  <Text style={styles.secondaryBtnTxt}>Reset</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
      {isgenetated ? (
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.subTitle}>Result:</Text>
          <Text style={styles.description}>Long Press to copy</Text>
          <Text selectable={true} style={styles.generatedPassword}>
            {password}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});

export default Form;
