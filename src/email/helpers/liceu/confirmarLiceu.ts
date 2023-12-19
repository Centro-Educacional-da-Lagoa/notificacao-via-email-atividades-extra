export function confirmarLiceu(
  nomeResponsavel: string,
  nomeAluno: string,
  cursos: string[],
): string {
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
              margin: 0 auto;
              /* Centraliza horizontalmente */
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
              background: #a71c20;
              display: grid;
              padding-top: 40px;
              grid-template-rows: 1fr 10px;
              align-items: center;
              color: white;
              text-align: center;
              /* Removido margin-top e position */
          }
  
          .logo-and-icons {
              display: grid;
              grid-template-columns: auto;
              padding: 10px;
              gap: 20px;
              justify-content: center;
              margin: 0 auto;
              /* Centraliza horizontalmente */
          }
  
          .social-icons {
              display: flex;
              justify-content: center;
          }
  
          .social-icons a {
              margin: 0 10px;
          }
  
          .barra-footer {
              height: 100%;
              background-color: #004a80;
              width: 100%;
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
                  <a href="https://liceufranco.com.br/" target="_blank">
                      <img src="https://sjc1.vultrobjects.com/sinergia-cdn/franco%20logo/logo%20franco%20Colorida%20Horizontal.png"
                          height="200px" />
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
                      Olá, ${nomeResponsavel}
                  </h1>
              </td>
          </tr>
          <tr>
              <td>
  
                  <p style="color: #565656; padding: 0px 32px;">
                      Informamos que a inscrição do aluno <span style="font-weight: 800;">${nomeAluno}</span> no(s)
                      curso(s)
                      <span style="font-weight: 700;">${
                        cursos.length > 1
                          ? cursos.slice(0, -1).join(', ') +
                            ' e ' +
                            cursos.slice(-1)
                          : cursos[0]
                      }</span>, foi efetuada com sucesso!
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
                              Abraços, <br />Equipe Centro Educacional da Lagoa
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
                  <tr>
                      <td>
                          <div class="footer-div">
                              <div class="logo-and-icons">
                                  <a href="https://centrocultural.liceufranco.com.br/" target="_blank">
                                      <img src="https://sjc1.vultrobjects.com/sinergia-cdn/franco%20logo/logo%20franco%20Colorida%20Vertical%20Branca.png"
                                          alt="" height="80px" />
                                  </a>
                                  <div class="social-icons">
                                      <a href="https://www.instagram.com/colegiofrancobrasileiro/" target="_blank">
                                          <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/InstagramLogo.png"
                                              alt="Logo do instagram" height="22px" />
                                      </a>
                                      <a href="https://twitter.com/liceufranco" target="_blank">
                                          <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/TwitterLogo.png"
                                              alt="Logo do Twitter" height="22px" />
                                      </a>
                                      <a href="https://www.facebook.com/colegiofrancobrasileiro" target="_blank">
                                          <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/FacebookLogo.png"
                                              alt="Logo do Facebook" height="22px" />
                                      </a>
                                      <a href="https://pt.linkedin.com/company/col%C3%A9gio-liceu-franco-brasileiro"
                                          target="_blank">
                                          <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/LinkedinLogo.png"
                                              alt="Logo do Linkedin" height="22px" />
                                      </a>
                                      <a href="https://www.youtube.com/channel/UCquX2i8JG0dK3pFgSz5pF1w" target="_blank">
                                          <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/YoutubeLogo.png"
                                              alt="Logo do Youtube" height="22px" />
                                      </a>
                                  </div>
          
                              </div>
                              <div class="barra-footer"></div>
                          </div>
                      </td>
                  </tr>
              </table>
          </body>
          
          </html>
            `;
}
