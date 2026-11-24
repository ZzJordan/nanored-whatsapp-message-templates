import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Page } from './Page'
import { WhatsAppTemplatesTool } from './components/whatsapp-templates-tool'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page Tool={WhatsAppTemplatesTool} />
  </StrictMode>,
)
