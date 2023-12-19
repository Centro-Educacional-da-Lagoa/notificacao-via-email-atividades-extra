export function priorizacoesLiceu(
  nome: string,
  alunosAtividades: any[],
): string {
  let tabelaCursos = '<table style="width: 100%; border-collapse: collapse;">';
  alunosAtividades.forEach((aluno) => {
    tabelaCursos += `
      <tr>
        <td colspan="2">
          <p style="color: #004a80; padding: 0px 32px; font-size: 1.2em; font-weight: bold;">
            ${aluno.nome}
          </p>
        </td>
      </tr>
      `;
    aluno.cursos.forEach((curso) => {
      tabelaCursos += `
        <tr style="border-bottom: 1px solid #ccc; ">
          <td>
            <p style="color: #565656; padding: 5px 32px;">
              ${curso.atividade}
            </p>
          </td>
          <td>
            <p style="color: ${
              curso.status === 'apto para matrícula' ? '#008000' : '#FF0000'
            }; padding: 0px 32px;">
              ${curso.status}
            </p>
          </td>
        </tr>
        `;
    });
  });

  tabelaCursos += '</table>';

  return `
    <!DOCTYPE html>
    <html lang="pt">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
        .espacamento-icones {
            padding: 10px;
          }
        
          .logo-and-icons {
            display: grid;
            grid-template-columns: auto;
            padding: 10px;
            gap: 20px;
            justify-content: center;
            margin: 0 auto; /* Centraliza horizontalmente */
          }

          .social-icons {
            display: flex;
            justify-content: center;      
          }
          
          .social-icons a {
            margin: 0 10px;
          }
          
          body {
            height: 100vh;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
          }
          
          .header-div {
            text-align: center;
            margin: 50px 0;
          }

          .main-div {
            max-width: 600px;
            margin: 0 auto;
            padding: 0 32px;
          }
         
          .footer-div {
            height: 180px;
            background: #D6141A;
            margin-top: 23px;
            display: grid;
            padding-top: 40px;
            grid-template-rows: 1fr 10px;
            align-items: center;
            color: white;
            text-align: center; /* Centraliza o texto no footer */
          }

          .logo-and-icons {  
            display: grid;
            grid-template-columns: auto;
            padding: 10px;
            gap: 20px;
            justify-content: center;
            margin: 0 auto; /* Centraliza horizontalmente */
          }
      
          .social-icons {
            display: flex;
            justify-content: center;
          }

          .social-icons a {
            margin: 0 10px;
          }

          .barra-footer {
            height: 50%;
            background-color: #004a80;
            width: 100%;
            margin-top: 45px;
            position: absolute;
            bottom: 0;
          }
        
          .tabela-principal {
            /* padding: 0px 32px; */
            /* margin: auto; */
            max-width: 600px;
            /* display: flex; */
            /* flex-direction: column; */
          }
        
          .barra-divisoria {
            border: rgb(233, 233, 233) 1px solid;
            margin-top: 35px;
            max-width: 550px;
          }
        </style>
    </head>
    
    <body style="margin: 0px; font-family: Arial, Helvetica, sans-serif;">
        <table align="center" class="tabela-principal">
        <tr>
            <td align="center">
                <a href="https://www.cel.com.br/" target="_blank">
                    <img
                        src="https://sjc1.vultrobjects.com/sinergia-cdn/cel%20logo/Logo%20CEL%20Intercultural%20School_Colorido.png"
                        height="100px"
                        style="margin-top: 50px; margin-bottom: 50px"
                    />
                </a>
            </td>
        </tr>
    
            <tr>
                <td>
    
                    <h1 style="
                            color: #004a80;
                            font-size: 20px;
                            font-weight: 700;
                            line-height: 114%;
                            padding: 0px 32px;
                          ">
                        Prezado Responsável, ${nome}
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="color: #565656; padding: 0px 32px;">
                        Informamos que as intenções de participação nas atividades do Centro Cultural já foram analisadas e
                        o seu(sua) filho(a) está apto a ser matriculado(a) no curso escolhido! O prazo para conclusão deste
                        processo é de 48h a partir do recebimento desta mensagem. Como a procura por algumas atividades foi
                        superior a quantidade de vagas disponíveis, após este período, caso a matrícula não seja realizada,
                        concederemos a vaga para o próximo(a) da fila de espera, caso haja.
                    </p>
                    <p style="color: #565656; padding: 0px 32px;">
                        Para realização da matrícula, basta clicar no link abaixo, fazer o login utilizando o Login e Senha
                        do Responsável Financeiro, confirmar as informações e concluir a matrícula.
                    </p>
                    <p style="color: #565656; padding: 0px 32px;">
                        Caso tenha alguma dúvida, entre em contato com a Secretaria Escolar.
                    </p>
                    <p style="padding: 0px 32px;">
                    ${tabelaCursos}
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="
                            font-size: 1rem;
                            font-weight: 500;
                            color: #575757;
                            padding: 0px 32px;
                          ">
                        Atenciosamente, <br />
                        Coordenação do Centro Cultural
                    </p>
                </td>
            </tr>
            <tr align="center">
                <td>
                    <a href="#" style="text-decoration: none;">
                        <button style="
                            width: 144px;
                            border-radius: 25px;
                            border: solid #004a80 2px;
                            height: 40px;
                            margin-top: 56px;
                            color: #004a80;
                            font-weight: 600;
                          " onMouseOver="this.style.backgroundColor='#004a80', this.style.color='white'"
                            onMouseOut="this.style.backgroundColor='white',this.style.color='#004a80'">
                            Ir para o portal
                        </button>
                    </a>
                </td>
            </tr>
    
            <tr>
                <td align="center">
                    <p style="
                          font-size: 0.7rem;
                          color: #565656;
                          max-width: 422px;
                          padding: 0px 32px;
                          margin-top: 60px;
                        ">
                        Por favor, pedimos que você não responda esse e-mail, pois se trata
                        de uma mensagem automática.
                    </p>
                </td>
            </tr>
        </table>
        <div class="footer-div">
            <div class="logo-and-icons">
                <a href="https://www.cel.com.br/" target="_blank">
                <img src="https://sjc1.vultrobjects.com/sinergia-cdn/cel%20logo/Logo%20CEL%20Intercultural%20School_BRANCA.png" alt="Logo do Cel" style="margin-bottom: 20px" height="60px">
                </a>
                <div class="social-icons">
                <a href="https://www.instagram.com/cel.rj/" target="_blank">
                    <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/InstagramLogo.png" alt="Logo do Instagram" height="22px">
                </a>
                <a href="https://www.facebook.com/cel.rj/" target="_blank">
                    <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/FacebookLogo.png" alt="Logo do Facebook" height="22px">
                </a>
                <a href="https://www.linkedin.com/company/celrj/" target="_blank">
                    <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/LinkedinLogo.png" alt="Logo do Linkedin" height="22px">
                </a>
                <a href="https://www.youtube.com/channel/UCfV-Uwf2Hai7UcM2tDWZI2A" target="_blank">
                    <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/YoutubeLogo.png" alt="Logo do Youtube" height="22px">
                </a>
                </div>
            </div>
            <div class="barra-footer"></div>
            </div>
        </body>
    </html>
    `;
}
