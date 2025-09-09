// Configurações do formulário de contato
// Configuração para envio via webhook n8n

const FORM_CONFIG = {
    // Configuração do webhook n8n
    N8N_WEBHOOK: {
        // URL do webhook n8n (substituir pela URL real quando estiver pronto para produção)
        URL: 'https://n8n.digitalcollege.com.br/webhook-test/flash-financeiro/lead',
        // Método HTTP para o webhook
        METHOD: 'POST',
        // Headers customizados se necessário
        HEADERS: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
};
