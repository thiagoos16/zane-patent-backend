var rp = require('request-promise');
var parser = require('xml2js').parseString;

module.exports = {
  pay: function * () {
    try { 
        var options = {
            method: 'POST',
            uri: 'https://ws.sandbox.pagseguro.uol.com.br/v2/pre-approvals/request',
            form: {
                email : 'SEU_EMAIL',
                token: 'SEU_TOKEN',
                currency: 'BRL',
                preApprovalCharge: 'auto',
                preApprovalName: 'Assinatura parseString1',
                preApprovalDetails: 'Cobranca mensal',
                preApprovalAmountPerPayment: '249.91',
                preApprovalPeriod: 'monthly',
                preApprovalMaxTotalAmount: '249.91',
                reference: '654987asd987asdf', //ID para vc identificar a venda
                senderName: 'NOME_DO_CABA',
                senderCPF: CPF,
                senderAreaCode: 'TE',
                senderPhone: 'LEFONE',
                senderEmail: EMAIL_DO_COMPRADOR,
                senderHash: params.senderHash, //A API te retorna,
                installmentQuantity: '1', // Parcelamento
                installmentValue: '249.91',
                noInterestInstallmentQuantity: '12',
                creditCardToken: params.user.cardToken,
                creditCardHolderName: 'Nome do usuário',
                creditCardHolderCPF: 'CPF',
                creditCardHolderBirthDate: 'DATA_NASCIMENTO',
                creditCardHolderAreaCode: 'TE',
                creditCardHolderPhone: 'LEFONE',
                billingAddressStreet: ENDERECO_DO_MELIANTE,
                billingAddressNumber: NUMERO_QUE_NINGUEM_ENTENDE,
                billingAddressComplement: COMPLEMENTO,
                billingAddressDistrict: DISTRITO,
                billingAddressPostalCode: CEP,
                billingAddressCity: CIDADE,
                billingAddressState: ESTADO,
                billingAddressCountry: 'BRA'
            }
        }

        var response = {}
        
        yield rp(options).then(function(xml) {
            parseString(xml, function (err, result) {
                response = result
            })
        }).catch(function(err) {
            response = err
        })

        this.body = response

      } else {
        throw new Error('Erro no pagamento!')
      }
    } catch(error) {
      this.body = {error: error.message}
    }
  }
}