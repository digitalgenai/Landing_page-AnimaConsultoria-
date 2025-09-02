// Configurações do formulário de contato
// Para alterar o e-mail de destino, modifique apenas o valor de EMAIL_DESTINO

const FORM_CONFIG = {
    // E-mail que receberá as mensagens do formulário
    EMAIL_DESTINO: 'wendell.pereira@digitalcollege.com.br',
    
    // Configurações do EmailJS (opcional - requer configuração no site emailjs.com)
    EMAILJS: {
        SERVICE_ID: 'service_id',     // Substituir pela Service ID do EmailJS
        TEMPLATE_ID: 'template_id',   // Substituir pela Template ID do EmailJS para leads
        ASSISTANT_TEMPLATE_ID: 'assistant_template_id', // Template específico para envio do link do assistente
        PUBLIC_KEY: 'your_public_key' // Substituir pela Public Key do EmailJS
    },
    
    // Configurações do Web3Forms (recomendado - gratuito)
    WEB3FORMS: {
        ACCESS_KEY: 'a88d5eb2-7cb6-42df-8f77-92782acc99e7' // Obter em https://web3forms.com
    },
    
    // Configurações do Formspree (alternativa)
    FORMSPREE: {
        FORM_ID: 'YOUR_FORM_ID',      // Obter em https://formspree.io
        ASSISTANT_FORM_ID: 'YOUR_ASSISTANT_FORM_ID' // Formulário específico para envio do link do assistente
    }
};

// Função para obter o e-mail de destino
function getDestinationEmail() {
    return FORM_CONFIG.EMAIL_DESTINO;
}

// Função para atualizar o e-mail de destino
function setDestinationEmail(newEmail) {
    FORM_CONFIG.EMAIL_DESTINO = newEmail;
}
