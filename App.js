import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // Estados para los campos del formulario
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [entrada, setEntrada] = useState('');

  // Estados para los errores
  const [errores, setErrores] = useState({
    nombreCompleto: '',
    correo: '',
    edad: '',
    entrada: ''
  });

  // Estado para mensaje de éxito
  const [registroExitoso, setRegistroExitoso] = useState(false);

  // Función para validar el nombre completo
  const validarNombre = (nombre) => {
    if (nombre.trim().length === 0) {
      return 'El nombre completo es obligatorio';
    }
    if (nombre.trim().length < 3) {
      return 'El nombre debe tener al menos 3 caracteres';
    }
    return '';
  };

  // Función para validar el correo
  const validarCorreo = (email) => {
    if (email.trim().length === 0) {
      return 'El correo es obligatorio';
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return 'El correo debe contener @ y ser válido';
    }
    return '';
  };

  // Función para validar la edad
  const validarEdad = (edadStr) => {
    if (edadStr.trim().length === 0) {
      return 'La edad es obligatoria';
    }
    const edadNum = parseInt(edadStr);
    if (isNaN(edadNum)) {
      return 'La edad debe ser un número válido';
    }
    if (edadNum < 1 || edadNum > 120) {
      return 'La edad debe estar entre 1 y 120 años';
    }
    return '';
  };

  // Función para validar la entrada
  const validarEntrada = (tipo) => {
    if (tipo.trim().length === 0) {
      return 'Debe seleccionar un tipo de entrada';
    }
    return '';
  };

  // Manejo del cambio de nombre
  const handleNombreChange = (text) => {
    setNombreCompleto(text);
    setRegistroExitoso(false);
    const error = validarNombre(text);
    setErrores({ ...errores, nombreCompleto: error });
  };

  // Manejo del cambio de correo
  const handleCorreoChange = (text) => {
    setCorreo(text);
    setRegistroExitoso(false);
    const error = validarCorreo(text);
    setErrores({ ...errores, correo: error });
  };

  // Manejo del cambio de edad
  const handleEdadChange = (text) => {
    setEdad(text);
    setRegistroExitoso(false);
    const error = validarEdad(text);
    setErrores({ ...errores, edad: error });
  };

  // Manejo del cambio de entrada
  const handleEntradaChange = (text) => {
    setEntrada(text);
    setRegistroExitoso(false);
    const error = validarEntrada(text);
    setErrores({ ...errores, entrada: error });
  };

  // Función para seleccionar tipo de entrada
  const seleccionarEntrada = (tipo) => {
    setEntrada(tipo);
    setRegistroExitoso(false);
    const error = validarEntrada(tipo);
    setErrores({ ...errores, entrada: error });
  };

  // Validación completa del formulario
  const validarFormulario = () => {
    const errorNombre = validarNombre(nombreCompleto);
    const errorCorreo = validarCorreo(correo);
    const errorEdad = validarEdad(edad);
    const errorEntrada = validarEntrada(entrada);

    setErrores({
      nombreCompleto: errorNombre,
      correo: errorCorreo,
      edad: errorEdad,
      entrada: errorEntrada
    });

    return !errorNombre && !errorCorreo && !errorEdad && !errorEntrada;
  };

  // Manejo del envío del formulario
  const handleSubmit = () => {
    if (validarFormulario()) {
      setRegistroExitoso(true);
      Alert.alert(
        '¡Registro Exitoso! 🎉',
        `Bienvenido ${nombreCompleto}!\n\nTu inscripción al evento ha sido confirmada.\n\nTipo de entrada: ${entrada}\n\nRecibirás un correo de confirmación en: ${correo}`,
        [
          {
            text: 'Aceptar',
            onPress: () => console.log('Registro confirmado')
          }
        ]
      );
    } else {
      Alert.alert(
        'Formulario Incompleto',
        'Por favor, corrige los errores antes de continuar.',
        [{ text: 'Entendido' }]
      );
    }
  };

  // Función para limpiar el formulario
  const limpiarFormulario = () => {
    setNombreCompleto('');
    setCorreo('');
    setEdad('');
    setEntrada('');
    setErrores({
      nombreCompleto: '',
      correo: '',
      edad: '',
      entrada: ''
    });
    setRegistroExitoso(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>🎟️</Text>
          <Text style={styles.headerTitle}>Inscripción a Evento</Text>
          <Text style={styles.headerSubtitle}>
            Completa el formulario para registrarte
          </Text>
        </View>

        {/* Formulario */}
        <View style={styles.formContainer}>
          {/* Campo: Nombre Completo */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre Completo *</Text>
            <TextInput
              style={[
                styles.input,
                errores.nombreCompleto ? styles.inputError : null
              ]}
              placeholder="Ingresa tu nombre completo"
              placeholderTextColor="#999"
              value={nombreCompleto}
              onChangeText={handleNombreChange}
            />
            {errores.nombreCompleto ? (
              <Text style={styles.errorText}>⚠️ {errores.nombreCompleto}</Text>
            ) : null}
          </View>

          {/* Campo: Correo */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo Electrónico *</Text>
            <TextInput
              style={[
                styles.input,
                errores.correo ? styles.inputError : null
              ]}
              placeholder="ejemplo@correo.com"
              placeholderTextColor="#999"
              value={correo}
              onChangeText={handleCorreoChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errores.correo ? (
              <Text style={styles.errorText}>⚠️ {errores.correo}</Text>
            ) : null}
          </View>

          {/* Campo: Edad */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Edad *</Text>
            <TextInput
              style={[
                styles.input,
                errores.edad ? styles.inputError : null
              ]}
              placeholder="Ingresa tu edad"
              placeholderTextColor="#999"
              value={edad}
              onChangeText={handleEdadChange}
              keyboardType="numeric"
              maxLength={3}
            />
            {errores.edad ? (
              <Text style={styles.errorText}>⚠️ {errores.edad}</Text>
            ) : null}
          </View>

          {/* Campo: Tipo de Entrada */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo de Entrada *</Text>
            <View style={styles.entradaContainer}>
              <Pressable
                style={[
                  styles.entradaButton,
                  entrada === 'General' && styles.entradaButtonSelected
                ]}
                onPress={() => seleccionarEntrada('General')}
              >
                <Text
                  style={[
                    styles.entradaButtonText,
                    entrada === 'General' && styles.entradaButtonTextSelected
                  ]}
                >
                  🎫 General
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.entradaButton,
                  entrada === 'VIP' && styles.entradaButtonSelected
                ]}
                onPress={() => seleccionarEntrada('VIP')}
              >
                <Text
                  style={[
                    styles.entradaButtonText,
                    entrada === 'VIP' && styles.entradaButtonTextSelected
                  ]}
                >
                  ⭐ VIP
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.entradaButton,
                  entrada === 'Estudiante' && styles.entradaButtonSelected
                ]}
                onPress={() => seleccionarEntrada('Estudiante')}
              >
                <Text
                  style={[
                    styles.entradaButtonText,
                    entrada === 'Estudiante' && styles.entradaButtonTextSelected
                  ]}
                >
                  🎓 Estudiante
                </Text>
              </Pressable>
            </View>
            {errores.entrada ? (
              <Text style={styles.errorText}>⚠️ {errores.entrada}</Text>
            ) : null}
          </View>

          {/* Mensaje de éxito */}
          {registroExitoso && (
            <View style={styles.successContainer}>
              <Text style={styles.successIcon}>✅</Text>
              <Text style={styles.successTitle}>¡Registro Exitoso!</Text>
              <Text style={styles.successMessage}>
                Tu inscripción ha sido confirmada correctamente.
              </Text>
            </View>
          )}

          {/* Botones de acción */}
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.submitButton}
              onPress={handleSubmit}
              android_ripple={{ color: '#fff', radius: 150 }}
            >
              <Text style={styles.submitButtonText}>✓ Inscribirse</Text>
            </Pressable>

            <Pressable
              style={styles.clearButton}
              onPress={limpiarFormulario}
              android_ripple={{ color: '#6B46C1', radius: 150 }}
            >
              <Text style={styles.clearButtonText}>↻ Limpiar</Text>
            </Pressable>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Todos los campos marcados con * son obligatorios
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A'
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50
  },
  header: {
    alignItems: 'center',
    marginBottom: 30
  },
  headerIcon: {
    fontSize: 60,
    marginBottom: 10
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center'
  },
  formContainer: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5
  },
  inputGroup: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E2E8F0',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#334155',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#334155'
  },
  inputError: {
    borderColor: '#EF4444'
  },
  errorText: {
    color: '#EF4444',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5
  },
  entradaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  entradaButton: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: '#334155',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#334155'
  },
  entradaButtonSelected: {
    backgroundColor: '#6B46C1',
    borderColor: '#8B5CF6'
  },
  entradaButtonText: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '600'
  },
  entradaButtonTextSelected: {
    color: '#FFFFFF'
  },
  successContainer: {
    backgroundColor: '#065F46',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#10B981'
  },
  successIcon: {
    fontSize: 40,
    marginBottom: 10
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5
  },
  successMessage: {
    fontSize: 14,
    color: '#D1FAE5',
    textAlign: 'center'
  },
  buttonContainer: {
    gap: 12
  },
  submitButton: {
    backgroundColor: '#6B46C1',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#6B46C1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  clearButton: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6B46C1'
  },
  clearButtonText: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: '600'
  },
  footer: {
    marginTop: 20,
    alignItems: 'center'
  },
  footerText: {
    color: '#64748B',
    fontSize: 13,
    textAlign: 'center'
  }
});
