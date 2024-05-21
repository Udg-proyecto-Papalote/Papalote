import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, CssVarsProvider, Grid } from '@mui/joy'
import { BrowserRouter } from 'react-router-dom'
import 'animate.css';

import { extendTheme } from '@mui/joy/styles'
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

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
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
	</React.StrictMode>
)
