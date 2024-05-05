import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, CssVarsProvider, Grid, extendTheme } from '@mui/joy'

const theme = extendTheme({ cssVarPrefix: 'demo'})
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CssVarsProvider
			defaultMode='dark'
			theme={theme}
			disableNestedContext
		>
			<CssBaseline />
			<Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
				<App />
			</Grid>
		</CssVarsProvider>
	</React.StrictMode>
)
