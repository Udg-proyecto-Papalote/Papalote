import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, CssVarsProvider, Grid } from '@mui/joy'
import { BrowserRouter } from 'react-router-dom'
import 'animate.css';
import './style.css';

import { extendTheme } from '@mui/joy/styles'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const theme = extendTheme({
	components: {
		JoyButton: {
			styleOverrides: {
				root: {
					transition: 'background-color 0.5s ease-in-out'
				},
			},
		},
		JoyFormHelperText: {
			styleOverrides: {
				root: {
					color: '#f87171',
				},
			},
		},
	},
})

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<BrowserRouter>
					<CssVarsProvider
						defaultMode='dark'
						theme={theme}
						disableNestedContext
					>
						<CssBaseline />
						<Grid container justifyContent="center" sx={{ height: '100vh' }}>
							<App />
						</Grid>
					</CssVarsProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
