# Google Sheets Integration - Setup Guide

## 1. Criar Google Apps Script

1. Abra sua planilha no Google Sheets
2. Vá em **Extensões** → **Apps Script**
3. Cole o código abaixo:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Extract form data
    const id = e.parameter.id || '';
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';
    const qty = e.parameter.qty || '';
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Append row with data
    sheet.appendRow([timestamp, id, name, email, phone, qty]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Reserva registrada com sucesso!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'Erro ao processar reserva', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2. Configurar Planilha

Adicione as seguintes colunas na primeira linha (A1 a F1):

| Timestamp | ID | Nome | Email | Telefone | Pessoas |
|-----------|----|----- |-------|----------|---------|

## 3. Implantar o Script

1. Clique em **Implantar** → **Nova implantação**
2. Escolha tipo: **Aplicativo da Web**
3. Configurações:
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
4. Clique em **Implantar**
5. **Copie a URL da implantação**

## 4. Configurar no Projeto

1. Abra o arquivo `.env` na raiz do projeto
2. Substitua `YOUR_SCRIPT_ID` pela URL copiada:

```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID_AQUI/exec
```

## 5. Testar

1. Reinicie o servidor de desenvolvimento: `npm run dev`
2. Preencha o formulário de reserva
3. Verifique se os dados aparecem na planilha

## Estrutura de Dados Enviados

O formulário envia os seguintes campos via FormData:

- **id**: Código único da reserva (formato: BL-XX-2P-A3F9)
- **name**: Nome completo do cliente
- **email**: Email do cliente
- **phone**: Telefone/WhatsApp
- **qty**: Número de pessoas (quantidade)

## Solução de Problemas

### Dados não aparecem na planilha
1. Verifique se a URL no `.env` está correta
2. Confirme que o script foi implantado como "Qualquer pessoa"
3. Verifique os logs no Apps Script (View → Executions)

### Erro de CORS
- O código usa `mode: 'no-cors'` para evitar problemas de CORS
- Isso é normal com Google Apps Script

### Testar manualmente
Você pode testar o endpoint diretamente:
```bash
curl -X POST "SUA_URL_AQUI" \
  -d "id=TEST-01" \
  -d "name=Teste" \
  -d "email=teste@email.com" \
  -d "phone=11999999999" \
  -d "qty=2"
```
